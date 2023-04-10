<?php
    
   $conn = mysqli_connect("127.0.0.1", "root", "1234" , "ibinet");
   $sql = "SELECT * FROM daigaku";
   $result = mysqli_query($conn, $sql);
   
   if (mysqli_num_rows($result) > 0) {
   while($row = mysqli_fetch_assoc($result)) {
   echo "順番: " . $row["idx"]. " 名前: " . $row["name"]. " 学年: " . $row["grade"]. " 専攻: " . $row["major"]. "<br>";

   }
   }else{
   echo "テーブルにデータがございません。";
   }
   mysqli_close($conn);
?>
