$(function(){
	var navMain = $(".navbar-collapse");
	navMain.on("click","a:not([data-toggle])",null,function(){navMain.collapse('hide');});
});

var vals = [
	`<h1 class="devOsan"">
              <span style="color: #696035;">{</span>dev<span style="color: #696035;">}</span>Osan
            </h1>
            <h4 class="devOsan">Software Development Club</h4>`, //Original
	`<h1 class="devOsan" style="text-shadow: 2px 2px 6px #AAFFAA;">
               <span style="color: #696035;">{</span>dev<span style="color: #696035;">}</span>Osan
            </h1>	
            <h4 class="devOsan">Software Development Club</h4>`,	//By Sig
];

var vals2 = [
	`<span style="color: #696035">{</span>dev<span style="color: #696035">}</span>Osan`, //Original
	`<span style="color:black;text-shadow: 0px 0px 2px #AAFFAA;"><span style="color: #696035;">{</span>dev<span style="color: #696035">}</span>Osan</span>`, //By Sig	
];

window.onload=generateLogo(Math.floor(Math.random()*vals.length));

function generateLogo(numb) {
	document.getElementById("devOsanLogo-dynamic").innerHTML=vals[numb];
	document.getElementById("devOsanMiniLogo-dynamic").innerHTML=vals2[numb];
}