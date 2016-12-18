<?php
        $host_name  = "exmaPLE";
        $database   = "exmpla";
        $user_name  = "exema";
        $password   = "example!";


        $connect = new mysqli($host_name, $user_name, $password, $database);
        echo "DB.PHP opened";

        /* Check connection */

            if(mysqli_connect_errno())
            {
            echo 'Connection to MySQL server failed: '.mysqli_connect_error().' ';
            }
            else
            {
            echo 'Connection to MySQL server successful. ';
            }

?>