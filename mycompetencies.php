<?php
/**
 *
 * @package    local
 * @subpackage local_course_recommendation
 */

require_once('../../config.php');
require_once($CFG->libdir . '/formslib.php'); // подключение файла с формами
require_once($CFG->dirroot .'/course/externallib.php'); //подключение файла с классом контента курса
require_once($CFG->dirroot .'/enrol/externallib.php'); //подключение файла с классом группы курса
require_once($CFG->libdir.'/gradelib.php'); // подключаем файл с классом оценок

// Подключение стилей и скриптов
$PAGE->requires->css(new moodle_url('/report/competency_statistic/src/cssprogress.min.css'));
$PAGE->requires->css(new moodle_url('/report/competency_statistic/src/style.css'));
echo '<script src="'.new moodle_url('/report/competency_statistic/src/chart.min.js').'"></script>';

// Сохраняем id текущего пользователя.
$currentuser = $USER->id;
$date_start = optional_param('date_start', null, PARAM_TEXT);
$date_end = optional_param('date_end', null, PARAM_TEXT);
$baseurl = new moodle_url('/local/course_recommendation/index.php');

$PAGE->set_title(get_string('courserecommendation', 'local_course_recommendation'));
$PAGE->set_heading(get_string('courserecommendation', 'local_course_recommendation'));
echo $OUTPUT->header();

$output = $PAGE->get_renderer('local_course_recommendation');
$page = new \report_competency_statistic\output\report_for_all_competencies($currentuser, $date_start, $date_end);
echo $output->render($page);

echo $OUTPUT->footer();
