<?php
/**
 *
 * @package    local
 * @subpackage local_course_recommendation
 */
require_once('../../config.php');
require_once("$CFG->libdir/externallib.php");
require_once($CFG->dirroot . "/local/course_recommendation/lib.php");

use stdClass;
use external_api;
use core_competency\course_competency;
use core_competency\api as competency_api;

/**
 * External API class.
 *
 * @package    local_course_recommendation
 */
class course_recommendation_external extends external_api {
    public static function getListCoursesByIds_parameters() {
        return new external_function_parameters([
            'names_courses' => new external_value(PARAM_TEXT, 'The names courses'),
            'names_requests' => new external_value(PARAM_TEXT, 'The names requests'),
            'seach_type' => new external_value(PARAM_TEXT, 'The names courses'),
        ]);
    }

    public static function getListCoursesByIds_returns() {
        return new external_value(PARAM_TEXT, 'The description of the returned value');
    }

    private function getSqlCourses($seach_type, $param) {
        global $DB;
        $dbman = $DB->get_manager();
        $tableName = "tool_courserating_summary";

        if ($dbman->table_exists($tableName)) {
            if ($seach_type == 'Поиск по курсам') {
                return array_keys($DB->get_records_sql("SELECT t1.courseid FROM (SELECT id as courseid FROM {course} course WHERE course.fullname LIKE '%09.0_.0_ $param _сем%') as t1 LEFT JOIN {tool_courserating_summary} t2 ON t1.courseid = t2.courseid ORDER BY t2.avgrating DESC"));
            } else {
                $sql = "SELECT id FROM {competency} WHERE " . $DB->sql_like('description', ':search', false);
                $competencies = $DB->get_records_sql($sql, array('search' => $DB->sql_like_escape($param)));
                $ids_course = array();
                
                if ($competencies) {
                    foreach ($competencies as $competency) {
                        $ids_course = array_merge($ids_course, array_keys($DB->get_records_sql("SELECT t1.courseid FROM (SELECT courseid FROM {competency_coursecomp} competency_coursecomp WHERE competency_coursecomp.competencyid=$competency->id) as t1 LEFT JOIN {tool_courserating_summary} t2 ON t1.courseid = t2.courseid ORDER BY t2.avgrating DESC")));
                    }
                }
                return $ids_course;
            }
        } else {
            if ($seach_type == 'Поиск по курсам') {
                return array_keys($DB->get_records_sql("SELECT id as courseid FROM {course} course WHERE course.fullname LIKE '%09.0_.0_ $param _сем%'"));
            } else {
                $sql = "SELECT id FROM {competency} WHERE " . $DB->sql_like('description', ':search', false);
                $competencies = $DB->get_records_sql($sql, array('search' => $DB->sql_like_escape($param)));
                $ids_course = array();
                
                if ($competencies) {
                    foreach ($competencies as $competency) {
                        $ids_course = array_merge($ids_course, array_keys($DB->get_records_sql("SELECT courseid FROM {competency_coursecomp} competency_coursecomp WHERE competency_coursecomp.competencyid=$competency->id")));
                    }
                }
                return $ids_course;
            }
        }
    }

    /**
     * @param   string $names_courses
     * @return  string
     */
    public static function getListCoursesByIds(string $names_courses, string $names_requests, string $seach_type) {
        global $DB, $CFG;
        $dbman = $DB->get_manager();
        $nameRatingTable = "tool_courserating_summary";

        $names_courses = explode(";", $names_courses);

        if ($DB->record_exists_select('popular_tags', 'tag_name = :tag_name', array('tag_name' => $names_requests))) {
            // update_record
            $record = $DB->get_record('popular_tags', array('tag_name' => $names_requests), 'id, count');
            $new_record = (object) array(
                'id' => $record->id,
                'tag_name' => $names_requests,
                'count' => $record->count + 1
            );
            $DB->update_record('popular_tags', $new_record);
        } else {
            $new_record = (object) array(
                'tag_name' => $names_requests,
                'count' => 1
            );
            $DB->insert_record('popular_tags', $new_record);
        }

        $courses = [];
        foreach ($names_courses as $course_name) {
            $ids_course = self::getSqlCourses($seach_type, $course_name);

            // if ($seach_type == 'Поиск по курсам') {
            //     $ids_course = array_keys($DB->get_records_sql("SELECT t1.courseid FROM (SELECT id as courseid FROM {course} course WHERE course.fullname LIKE '%09.03.0_ $course_name _сем%') as t1 LEFT JOIN {tool_courserating_summary} t2 ON t1.courseid = t2.courseid ORDER BY t2.avgrating DESC"));
            // } else {
            //     $sql = "SELECT id FROM {competency} WHERE " . $DB->sql_like('description', ':search', false);
            //     $competencies = $DB->get_records_sql($sql, array('search' => $DB->sql_like_escape($course_name)));
            //     $ids_course = array();
                
            //     if ($competencies) {
            //         foreach ($competencies as $competency) {
            //             $ids_course = array_merge($ids_course, array_keys($DB->get_records_sql("SELECT t1.courseid FROM (SELECT courseid FROM {competency_coursecomp} competency_coursecomp WHERE competency_coursecomp.competencyid=$competency->id) as t1 LEFT JOIN {tool_courserating_summary} t2 ON t1.courseid = t2.courseid ORDER BY t2.avgrating DESC")));
            //         }
            //     }
            // }

            foreach ($ids_course as $id) {
                $currentCourse = get_course($id);
                $new_course = new stdClass();
                $new_course->id = $currentCourse->id;

                $split_full_name_course = explode(" ", $currentCourse->fullname);
                $name_course = "";
                for ($i = 2; $i <= count($split_full_name_course) - 4; $i++)
                    $name_course .= $split_full_name_course[$i] . " ";
                
                $new_course->name = $name_course;
                $new_course->direction = $split_full_name_course[1];
                $new_course->teacher = $split_full_name_course[count($split_full_name_course) - 1];

                $course_rating = "нет";
                if ($dbman->table_exists($nameRatingTable)) {
                    $course_rating = $DB->get_field($nameRatingTable, 'avgrating', array('courseid' => $currentCourse->id));
                    $course_rating = empty($course_rating) ? "нет" : $course_rating;
                }
                $new_course->rating = $course_rating;
                
                $competencies_course = competency_api::list_course_competencies($currentCourse->id);
                $list_competency_name = "";
                foreach ($competencies_course as $compet) {
                    if (mb_strlen($list_competency_name) > 140) {
                        break;
                    }
                    $list_competency_name .= mb_strimwidth($compet['competency']->get('description'), 0, 50, "...; ");
                }
                $new_course->competencies = empty($list_competency_name) ? "нет" : $list_competency_name;

                $new_course->viewurl = "$CFG->wwwroot/course/view.php?id=$currentCourse->id";

                $courses[] = $new_course;
            }
        }

        $courses = json_encode($courses);

        ob_clean();
        return $courses;
    }
}
