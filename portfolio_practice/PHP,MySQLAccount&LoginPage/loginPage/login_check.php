<?php
include("./dbconn.php");

$mb_id      = trim($_POST['mb_id']);
$mb_password= trim($_POST['mb_password']);

if (!$mb_id || $mb_passwrd){
    echo "<script>alert('회원 아이디나 비밀번호가 공백이면 안됩니다.');</script>";
    echo "<script>location.replace('./login.php');</script>";
    exit;
}

$sql = "SELECT * FROM member where mb_id = '$mb_id' "; // 입력한 아이디를 가져옴
$result = mysqli_query($conn, $sql);
$mb = mysqli_fetch_array($result);

$sql = "SELECT PASSWORD('$mb_password') AS pass" ; // 입력한 비밀번호를 MySQL password()함수를 이용해 암호화해서 가져옴
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$password = $row['pass'];

if (!$mb['mb_id']) { // 존재하는 아이디인지
    echo "<script>alert('회원 아이디가 틀립니다.');</script>";
    echo "<script>location.replace('./login.php');</script>";
    exit;
}

if (!$mb['mb_id'] && !($password === $mb['mb_password'])){ // 아이디랑 비밀번호가 맞는가?
    echo "<script>alert('비밀번호가 틀립니다.');</script>";
    echo "<script>location.replace('./login.php');</script>";
    exit;
}

if ($mb['mb_email_certify'] == '0000-00-00 00:00:00') {
    include_once('./function.php');
    
    $mb_md5 = md5(pack('V*', rand(), rand(), rand(), rand())); // 어떠한 회원정보도 포함되지 않은 일회용 난수를 생성하여 인증에 사용

	$sql = " UPDATE member SET mb_email_certify2 = '$mb_md5' WHERE mb_id = '$mb_id' "; // 로그인을 시도하는 아이디가 메일 인증을 해야한다면 일회용 난수를 업데이트
	$result = mysqli_query($conn, $sql);
	mysqli_close($conn); // 데이터베이스 접속 종료

	$certify_href = 'http://localhost/myapp/tsukuri/email_certify.php?&amp;mb_id='.$mb_id.'&amp;mb_md5='.$mb_md5; // 메일 인증 주소

	$subject = 'Tottan`s Page 인증메일'; // 메일 제목

	ob_start();
	include_once ('./register_update_mail.php');
	$content = ob_get_contents(); // 메일 내용
	ob_end_clean();
    
    $mail_from = "civwars@naver.com";
    $mail_to = $mb['mb_email'];
    
    mailer('tottan', $mail_from, $mail_to, $subject, $content); // 메일 전송
    echo "<script>alert('".$mb['mb_email']." 메일로 인증메일을 전송하였습니다.\\n".$mb['mb_email']." 메일로 메일인증을 받으셔야 로그인 가능합니다.');</script>";
	echo "<script>location.replace('./login.php');</script>";
	exit;
}

$_SESSION['ss_mb_id'] = $mb_id;

mysqli_close($conn);

if(isset($_SESSION['ss_mb_id'])) {
    echo "<script>alert('로그인 되었습니다.');</script>";
	echo "<script>location.replace('./login.php');</script>";
}


?>