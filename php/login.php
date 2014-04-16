<?php
$username=$_GET["username"];
$password=$_GET["password"];
$platform=$_GET["platform"];
$width=$_GET["width"];

if($username=="guest" && $password=="nnn"){

    // Use of session_register() is deprecated
    // Use of $_SESSION is preferred, as of PHP 4.1.0
    // the information is stored in an associative $_SESSION array.
    session_start();
	if (!isset($_SESSION['views'])) {
	    $_SESSION['views'] = time();
	} else if (time() - $_SESSION['views'] > 1800) {
	    // session started more than 30' ago
	    session_regenerate_id(true);    // change session ID for the current session an invalidate old session ID
	    $_SESSION['views'] = time();  // update creation time
	}
}