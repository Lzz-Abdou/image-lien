var loader = document.getElementById('loader');
var all = document.querySelector('.all');
all.style.display='none';
var loading = function(){
	
	loader.style.display='none';
    all.style.display='block';


};
console.log("timeout")
setTimeout(loading,2000);