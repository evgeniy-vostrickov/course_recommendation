<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Web service for Recently accessed items local
 *
 * @package    local_course_recommendation
 */

defined('MOODLE_INTERNAL') || die();

$functions = array(
    'local_course_recommendation_courses' => array(
        'classname' => 'course_recommendation_external',
        'methodname' => 'getListCoursesByIds',
        'classpath' => 'local/course_recommendation/externallib.php',
        'description' => 'List of items a user has accessed most recently.',
        'type' => 'read',
        'ajax' => true,
        'services' => array(MOODLE_OFFICIAL_MOBILE_SERVICE),
    ),
);