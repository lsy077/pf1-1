$(document).ready(function(){
	/*모바일 높이*/
	document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
	$(window).resize(function(){
		//document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px');
	});			
});