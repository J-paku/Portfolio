<?php
include("./dbconn.php");

$mb_email				= trim($_POST['mb_email']); // 이메일

$sql = "SELECT * FROM member where mb_email = '$mb_email' " ;
$result = mysqli_query($conn, $sql);
$mb = mysqli_fetch_array($result);

echo mysqli_num_rows($result)." 섹스";

if (mysqli_num_rows($result) > 0) { // 만약 사용중인 아이디라면 알림창을 띄우고 회원가입 페이지로 이동
		echo "<script>alert('らむとやりたいだなぁぁぁぁ');</script>";
		exit;
	}

mysqli_close($conn);
/*

if($_POST['mb_email'] == $mb){
    echo "<script>alert('오 되네?');</script>";
} else{
    echo "<script>alert('ㅅㅂ아');</script>";
}


mysqli_close($conn);

*/
?>