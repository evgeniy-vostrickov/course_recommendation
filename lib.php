<?php
require_once("$CFG->dirroot/lib/accesslib.php");

function local_course_recommendation_myprofile_navigation(core_user\output\myprofile\tree $tree, $user, $iscurrentuser, $course) {
    if (is_siteadmin()) {
        $courserecommendation = new moodle_url('/local/course_recommendation/index.php');
        $node = new core_user\output\myprofile\node('miscellaneous', 'course_recommendation', get_string('courserecommendation', 'local_course_recommendation'), null, $courserecommendation);
        $tree->add_node($node);
    }

    $mycompetencies = new moodle_url('/local/course_recommendation/mycompetencies.php');
    $node = new core_user\output\myprofile\node('miscellaneous', 'my_competencies', get_string('mycompetencies', 'local_course_recommendation'), null, $mycompetencies);
    $tree->add_node($node);
    return true;
}