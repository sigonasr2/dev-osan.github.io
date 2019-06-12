<?php
	if (strlen($_POST['question'])>0) {
		$question = $_POST['question'];
		$name = $_POST['name'];
		$email = $_POST['email'];
		//echo "Posted Question: <b>".$_POST['question']."</b><br>";
		if (strlen($_POST['name'])>0) {
			//echo "Posted Name: <b>".$_POST['name']."</b><br>";
		}
		if (strlen($_POST['email'])>0) {
			//echo "Posted Email: <b>".$_POST['email']."</b><br>";
		}
		
		//Submit the question to a polling list.
		$file = fopen("./requests/requests.php","a");
		fwrite($file,$question."
".$name."
".$email."
");
	} else {
		echo "-1";
	}
?>