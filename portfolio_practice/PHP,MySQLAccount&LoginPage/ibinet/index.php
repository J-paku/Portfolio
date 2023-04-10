
<?php
    $host = 'localhost';
    $user = 'root';
    $pw = '1234';
    $dbName = 'ibinet';
    $mysqli = new mysqli($host, $user, $pw, $dbName);
 
    if($mysqli){
        echo "MySQL 接続　成功";
    }else{
        echo "MySQL 接続 失敗";
    }
?>