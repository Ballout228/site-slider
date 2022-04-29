/*
document.getElementById('click').onclick = function(){
	earth.style.cssText ='display: block;';
	click.style.cssText = 'display: none;';

}
document.getElementById('close').onclick = function(){
	earth.style.cssText = 'display: none;';
	click.style.cssText = 'display: block;';
}
*/

var smoothLinks = document.querySelectorAll('a[href^="#"]');
			
for(let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function(e){
		e.preventDefault();
		var id = smoothLink.getAttribute('href');
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -30);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('cloud-show');
     change.target.classList.add('cloud-snow');
    }
    else{
    	change.target.classList.remove('cloud-show');
    	change.target.classList.remove('cloud-snow');
    }
  });
}

let options = {
  threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.cloud');
let moves = document.querySelectorAll('.cloudtwo');

for (let elm of elements) {
  observer.observe(elm);
}
for (let mov of moves){
	observer.observe(mov);
}

document.getElementById('buy').onclick = function(){
	alert("Временно сервер недоступен. Приносим свои извинения!");
}
document.getElementById('buyt').onclick = function(){
	alert("Временно сервер недоступен. Приносим свои извинения!");
}
/* Индекс слайда по умолчанию */








      
 

    
 




