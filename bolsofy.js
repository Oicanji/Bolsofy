var nicPrefix = "bolso";
var nicCount = 20;

function getHit(){
	var bolNum = Math.floor(Math.random()*nicCount);
	return "images/"+nicPrefix+bolNum+".jpg";
}

function replaceImages(){
	Array.prototype.map.call(document.images,function(img){
		//don't re-nic images
		if(img.className.indexOf('bolso')>-1){
			return;
		}
		img.classList.add('bolso');
		//retain the original dimensions
		var width = img.width;
		var height = img.height;
		img.style.width = width+'px';
		img.style.height = height+'px';

		var loc = chrome.extension.getURL(getHit());
		img.src = loc;
		if(img.srcset){
			img.srcset = loc;
		}
	});
}

document.body.onscroll = function(){
	replaceImages();
};
window.setTimeout(replaceImages,500);
document.body.addEventListener('click',function(){
	replaceImages();
	
});
alert('COMUNISTAS!')