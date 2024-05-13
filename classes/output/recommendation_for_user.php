<?php
namespace local_course_recommendation\output;

use renderable;
use templatable;
use renderer_base;
use stdClass;

class recommendation_for_user implements renderable, templatable {

    /** @var int $user_id */
    protected $user_id;

    /**
     * Construct this renderable.
     *
     * @param int $userid The user id
     */
    public function __construct($userid) {
        $this->user_id = $userid;
    }

    /**
     * Export this data so it can be used as the context for a mustache template.
     *
     * @param \renderer_base $output
     * @return stdClass
     */
    public function export_for_template(renderer_base $output) {
        global $DB, $PAGE;
        // $PAGE->requires->js_call_amd('local_course_recommendation/myfile', 'someFunction');

        $data = new stdClass();

        $list_popular_tags = array_keys($DB->get_records('popular_tags', array(), 'count DESC', 'tag_name', 0, 5));
        $data->list_popular_tags = $list_popular_tags;
        return $data;
    }

}
