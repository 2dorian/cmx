<?php
    include_once('db.php');
    $result = mysqli_query($connect, "SELECT Job_title, Job_id FROM campaign");

    $data = array();

    while ($row = mysqli_fetch_array($result)) {
    $data[] = $row;
    }
        print json_encode($data);



/*
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $result = $connect>query("SELECT Job_title, Job_id FROM campaign");

    $outp = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
            $outp .= '{"Jobtitle":"'  . $rs["Job_title"] . '",';
            $outp .= '"Jobid":"'   . $rs["Job_id"]        . '"}';
    }

    $outp ='{"records":['.$outp.']}';
    $connect->close();

    echo($outp);

*/

    ?>