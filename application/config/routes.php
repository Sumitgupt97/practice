<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
// $route['admin/dashboard'] = 'admin/dashboard';
// $route['default_controller'] = 'admin/dashboard';


$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
$route['cars'] = 'Welcome/cars';
$route['details/(:any)'] = 'Welcome/details/$1';
$route['signup'] = 'Welcome/signup';
$route['login'] = 'Welcome/login';
$route['logout'] = 'Welcome/logout';
$route['profile'] = 'User/dashboard';
$route['bookings'] = 'User/bookings';
$route['booking/(:any)'] = 'User/booking/$1';
$route['login-google'] = 'Google_login/index';
$route['auth/google'] = 'Google_login/auth';
$route['checkout/(:any)'] = 'Chekout/index/$1';
$route['payment-success'] = 'Welcome/payment_success';
$route['payment-cancel'] = 'Welcome/payment_cancel';
$route['contact'] = 'Welcome/contact';
$route['about'] = 'Welcome/about';
$route['blog'] = 'Welcome/blog';
$route['faq'] = 'Welcome/faq';
$route['terms'] = 'Welcome/terms';
$route['blog-details'] = 'Welcome/blogdetails';
$route['privacy'] = 'Welcome/privacypolicy';
$route['cancellation'] = 'Welcome/cancellation';
$route['search'] = 'Welcome/search';
$route['set-session'] = 'Welcome/set_session';
$route['clear-session'] = 'Welcome/clear_session';
$route['change-password'] = 'User/change_password';
$route['forgot-password'] = 'User/forgot_password';
$route['reset-password/(:any)'] = 'User/reset_password/$1';
$route['verify-email/(:any)'] = 'User/verify_email/$1';
$route['resend-verification'] = 'User/resend_verification';
$route['do_payment'] = 'Checkout/do_payment';
$route['saveUserdata'] = 'Checkout/saveUserdata';
$route['thank-you/(:any)'] = 'Thankyou/index/$1';