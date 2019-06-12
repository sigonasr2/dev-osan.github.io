
window.onload=init();

function init() {
	document.getElementsByClassName("sig-ask-devosan")[0].innerHTML=`
	<h1>Ask {dev}Osan.</h1>
	<form name="ask-devosan" method="POST" action="http://45.33.13.215/projects/dev-osan/dev-osan.github.io/sig-ask-devosan/index.php">
	<input type="text" style="width:85%" name="question" value="What would you like to know?"><input type="submit">
	</form>
	<div class="sig-ask-devosan-popular">Fetching data...</div>`;
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200) {
			document.getElementsByClassName("sig-ask-devosan-popular")[0].innerHTML=this.responseText;
		}
	}
	req.open("POST","http://45.33.13.215/projects/dev-osan/dev-osan.github.io/sig-ask-devosan/popularquestions.php")
	req.send();
	document.getElementsByClassName("sig-ask-devosan-popular")[0].innerHTML=`
	Fetch data...
	`;
}

