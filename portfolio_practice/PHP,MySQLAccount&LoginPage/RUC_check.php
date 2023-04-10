<?php
include("./dbconn.php");
$_SESSION['ss_mb_id'] = $mb_id;
$mb_id          = trim($_Post['mb_id']);
$mb_password    = trim($_Post['mb_password']);

if (!$mb_password){
    echo "<script>alert('비밀번호가 공백이면 안됩니다.');</script>";
    echo "<script>location.repalce('./register_update_certify.php');</script>";
}

$sql = "SELECT * FROM member where = 'mb_password' " ; // 입력한 비밀번호를 MySQL password()함수를 이용해 암호화해서 가져옴
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$password = $row['pass'];

if(isset($_SESSION['ss_mb_id'])) {
    
if (!$_POST['mb_password']) { // 아이디랑 비밀번호가 맞는가?
    echo "<script>alert('비밀번호가 틀립니다.');</script>";
    echo "<script>location.replace('./register_update_certify.php');</script>";
    exit;
} else {
    echo "<script>alert('비밀번호 인증 완료');</script>";
    echo "<script>location.replace('./register.php');</script>";
    }
}


mysqli_close($conn);
?>