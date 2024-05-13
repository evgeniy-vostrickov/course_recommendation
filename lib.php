<?php

function local_course_recommendation_extend_navigation_user($navigation, $user, $context, $course, $coursecontext) {
    $url = new moodle_url('/local/course_recommendation/index.php');
    $navigation->add(get_string('courserecommendation', 'local_course_recommendation'), $url);
}

function local_course_recommendation_myprofile_navigation(core_user\output\myprofile\tree $tree, $user, $iscurrentuser, $course) {
    // мой id в eos2 14775
    if ($user->id == 14775) {
        $courserecommendation = new moodle_url('/local/course_recommendation/index.php');
        $node = new core_user\output\myprofile\node('miscellaneous', 'course_recommendation', get_string('courserecommendation', 'local_course_recommendation'), null, $courserecommendation);
        $tree->add_node($node);
    }

    $mycompetencies = new moodle_url('/local/course_recommendation/mycompetencies.php');
    $node = new core_user\output\myprofile\node('miscellaneous', 'my_competencies', get_string('mycompetencies', 'local_course_recommendation'), null, $mycompetencies);
    $tree->add_node($node);
    return true;
}