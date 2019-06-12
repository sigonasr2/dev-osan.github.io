
window.onload=init();

function init() {
	var defaultText=`
		<h3 style="margin-top:24px;">Ask <span style="color: #696035">{</span>dev<span style="color: #696035">}</span>Osan</h3>
		<!--<input type="text" style="width:85%" name="question" value="What would you like to know?"><input type="submit">-->
		<form name="q" "action="#formanchor" onsubmit="submitQuestion(); return false;">
		<div class="input-group input-group-lg">
		  <div class="input-group-prepend">
			<span class="input-group-text" id="inputGroup-sizing-lg">Q</span>
		  </div>
		  <input type="text" class="form-control" placeholder="What would you like to know?" aria-label="Question" aria-describedby="inputGroup-sizing-lg" name="question" required>
		</div>
		<br>
		<div class="container">
		<div class="row">
			  <div class="col-5">
			<div class="input-group input-group-sm">
				<input type="text" id="name" class="form-control" placeholder="Name (Optional)" aria-describedby="namehelp">
			</div>
			<small id="namehelp" class="form-text text-muted">
			  Your name will be displayed next to the question.
			</small>
			</div>
			  <div class="col-7">
			<div class="input-group input-group-sm">
				<input type="text" id="email" class="form-control" placeholder="Email (Optional)" aria-describedby="namehelp">
			</div>
			<small id="namehelp" class="form-text text-muted">
			  Providing an email will send you a notification when your question has been answered.
			</small>
			</div>
			<button class="btn btn-primary col-3 m-2" type="submit">Submit</button>
		</div>
		</div>
		</form>
		<hr>
		<div class="sig-ask-devosan-popular">Fetching data...</div>
		`;
	document.getElementsByClassName("sig-ask-devosan")[0].innerHTML=`
	<div class="sig-ask-devosan1"></div>
	<div class="sig-ask-devosan2"></div>
	`;
	document.getElementsByClassName("sig-ask-devosan1")[0].style.display="block";
	document.getElementsByClassName("sig-ask-devosan1")[0].innerHTML=defaultText;
	document.getElementsByClassName("sig-ask-devosan2")[0].style.display="none";
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200) {
			document.getElementsByClassName("sig-ask-devosan-popular")[0].innerHTML=this.responseText;
		}
	}
	req.open("POST","http://45.33.13.215/projects/dev-osan/dev-osan.github.io/sig-ask-devosan/popularquestions.php",true)
	req.send();
	document.getElementsByClassName("sig-ask-devosan-popular")[0].innerHTML=`
	Fetch data...
	`;
}

function submitQuestion() {
	document.getElementsByClassName("sig-ask-devosan1")[0].style.display="none";
	document.getElementsByClassName("sig-ask-devosan2")[0].style.display="block";
	document.getElementsByClassName("sig-ask-devosan2")[0].innerHTML=`<hr>
	<button class="btn btn-primary m-2" type="button" disabled>
	  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
	  Submitting Question...
	</button>
	`;
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200) {
			document.getElementsByClassName("sig-ask-devosan2")[0].innerHTML=this.responseText;
		}
	}
	req.open("POST","http://45.33.13.215/projects/dev-osan/dev-osan.github.io/sig-ask-devosan/index.php",true)
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(`question=${document.forms["q"]["question"].value}&name=${document.forms["q"]["name"].value}&email=${document.forms["q"]["email"].value}`);
}

