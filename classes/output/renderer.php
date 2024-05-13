<?php

/**
 * Renderer class for local_course_recommendation
 *
 * @package    local_course_recommendation
 */

namespace local_course_recommendation\output;

defined('MOODLE_INTERNAL') || die;

use plugin_renderer_base;
use stdClass;

/**
 * Renderer class for competency statistic report
 *
 * @package    local_course_recommendation
 */
class renderer extends plugin_renderer_base {
    /**
     * @param recommendation_for_user $page
     * @return string html for the page
     */
    public function render_recommendation_for_user(recommendation_for_user $page): string
    {
        $data = $page->export_for_template($this);
        return parent::render_from_template('local_course_recommendation/recommendation_for_user', $data);
    }
}
