<?php
include("./dbconn.php");
?>

<html>  
<head>
    <title>회원정보 수정</title>
    <link href="./style.css" rel="stylesheet" type="text/css">
</head>    
<body>
    <? if $_POST
    <form action="RUC_check.php" method ='post'>
        <table>
                <tr>
                    <th>비밀번호</th>
                    <td><input type="password" name="mb_password">
                    <input type="submit" value="확인">
                    <a href="./login.php">돌아가기</a></td>
                </tr>
        </table>
    </form>
</body>
</html>




