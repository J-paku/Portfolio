<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>회원 인증 메일</title>
</head>

<body>

<div style="margin:30px auto;width:600px;border:10px solid #f7f7f7">
    <div style="border:1px solid #dedede">
        <h1 style="padding:30px 30px 0;background:#f7f7f7;color:#555;font-size:1.4em">
            회원 인증 메일입니다.
        </h1>
        <p style="margin:20px 0 0;padding:30px 30px 50px;min-height:200px;height:auto !important;height:200px;border-bottom:1px solid #eee">
            아래의 주소를 클릭하시면 인증이 완료됩니다.<br/>
            <a href="<?php echo $certify_href ?>" target="_blank"><b><?php echo $certify_href ?></b></a><br/><br/>

            이 메일은 영국에서부터 시작됐을듯<br/>
            감사합니다.
        </p>
        <a href="http://localhost/myapp/tsukuri/login.php" target="_blank" style="display:block;padding:30px 0;background:#484848;color:#fff;text-decoration:none;text-align:center">로그인 바로가기</a>
    </div>
</div>

</body>
</html>