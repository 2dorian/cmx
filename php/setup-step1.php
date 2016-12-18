<?php
include_once('db.php');

$errors = array();
$data = array();

$_POST = json_decode(file_get_contents("php://input"), true);



if (empty($_POST['jobtitle'])) {
    $errors['jobtitle'] = 'Job title is required.';
    }
    else {
       $jobtitle = $_POST['jobtitle'];
       $vacancyid = $_POST['vacancyid'];
       $data = "INSERT INTO campaign (Job_title, Job_id) VALUES ('$jobtitle', '$vacancyid')";

   }

if ($connect->query($data) === TRUE) {
    $connect->close();
} else {
    echo "Error: " . $sql . "<br>" . $connect->error;
}

exit();

?>

