<!-- <html>
	<head>
		<title>PHP Test</title>
	</head>
 	<body>
 		<?php
			$q1_why = $_POST['q1_why'];
			$q2_service = $_POST['q2_service'];
			$q3_state = $_POST['q3_state'];
			$q4_comments = $_POST['q4_comments'];
			?> 
 	</body>
</html>
-->


<?php
$action = $_GET["action"];
$myText = $_POST["mytext"];

if($action = "save") {
  $targetFolder = "/process.php";
  file_put_contents($targetFolder."mytext.txt", $myText);
}
?>   
<html>
<head>
 <title>myform</title>
</head>
<body>
  <form action="?action=save" name="myform" method="post">
    <input type=text name="mytext">
    <input type="submit" value="save">
  </form>
</body>
</html>