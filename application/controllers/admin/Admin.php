<?php


class Admin extends CI_Controller 
{

 function __construct() {
        parent::__construct();
		$this->load->database();
		$this->load->library('session');
       
    }

    public function dashboard() {
        $this->load->view('views/admin/layout/header');
        $this->load->view('views/admin/layout/sidebar');
        $this->load->view('views/admin/layout/footer');
        $this->load->view('views/admin/dashboard');
    }
   


}