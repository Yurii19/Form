<?php 
session_start();

$file_path = 'users/';
$curent_file = $file_path.$_SESSION['user_mail'].'.JSON';
$user_file = file_get_contents($_SESSION['file_path']);
$json_file = json_decode($user_file, TRUE);	

$current_name = $_POST['username'];
$current_clan = $_POST['clanselect'];
$current_info = $_POST['textinfo'];

$current_emeail = $_SESSION['user_mail'];

$errors = ['name' => '', 'house' => '', 'textinfo' => ''];

$name_error = validateName($current_name);
if ($name_error !== $current_name) {
	$errors['name'] = $name_error;
} else {
	$json_file['name'] = $current_name;
}

if ($current_clan === 'Select House') {
	$errors['house'] = 'Select your house';
} else {
	$json_file['clan'] = $current_clan;
}

if ($current_info === '') {
	$errors['textinfo'] = 'Tell about yourself';
} else {
	$json_file['aboutself'] = $current_info;
}

if ($errors['textinfo'] === '' && $errors['name'] === '' && $errors['house'] === '') {
	file_put_contents($curent_file, json_encode($json_file));
}


$json_respond = json_encode($errors);
echo $json_respond;

	function validateName($name) {
		$res = '';
		$namePattern = '/^[\w]{4,15}$/';
		if ( $name === '') {
			$res = 'Input a name';
		} else if (strlen($name) < 4) {
			$res = 'Name too short';
		}
		else if (preg_match($namePattern, $name)) {
			$res = $name;
		}
		else {
			$res = 'Incorrect name';
		}
		return $res;
	}

