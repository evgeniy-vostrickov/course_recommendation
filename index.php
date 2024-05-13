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
$PAGE->requires->css(new moodle_url('/local/course_recommendation/src/style.css'));
echo '<script src="'.new moodle_url('/local/course_recommendation/src/lunr.js').'"></script>';
echo '<script src="'.new moodle_url('/local/course_recommendation/src/lunr.stemmer.support.js').'"></script>';
echo '<script src="'.new moodle_url('/local/course_recommendation/src/lunr.ru.js').'"></script>';
echo '<script src="'.new moodle_url('/local/course_recommendation/src/lunr.multi.js').'"></script>';
echo '<script>';
echo 'var currentUserID = ' . $USER->id . ';';
echo '</script>';
echo '<script defer src="'.new moodle_url('/local/course_recommendation/src/getRecommendation.js').'" type="module"></script>';
echo '<script src="'.new moodle_url('/local/course_recommendation/src/test_search.js').'"></script>';

// Сохраняем id текущего пользователя.
$currentuser = $USER->id;
$baseurl = new moodle_url('/local/course_recommendation/index.php');

$PAGE->set_title(get_string('courserecommendation', 'local_course_recommendation'));
$PAGE->set_heading(get_string('courserecommendation', 'local_course_recommendation'));
echo $OUTPUT->header();

$output = $PAGE->get_renderer('local_course_recommendation');
$page = new \local_course_recommendation\output\recommendation_for_user($currentuser);
echo $output->render($page);

echo $OUTPUT->footer();
