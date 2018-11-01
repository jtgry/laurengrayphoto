function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
 
function addClass(ele,cls) {  
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
 
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {      
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
    ele.className=ele.className.replace(reg,' ');  
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('page').className = "load";

  window.sr = ScrollReveal({
    delay: 1,
    scale: 0.99,
    viewFactor: 0.4
  });
    
    sr.reveal('.block-image', {origin: 'bottom', duration: 800});
    sr.reveal('.block-content', {origin: 'bottom', duration: 600});
    sr.reveal('.block-feature', {origin: 'bottom', duration: 600});
    sr.reveal('.block-cta', {origin: 'bottom', duration: 600});
    sr.reveal('.contact-form', {origin: 'bottom', duration: 600});
    //Menu
    sr.reveal('.block-gallery-item', {origin: 'bottom', duration: 600 }, 200);
    var menuButton = document.getElementById('navButton');
    var mobileNav = document.getElementById('mobile-nav');
    menuButton.addEventListener('click', function (e) {
      menuButton.classList.toggle('is-active');
      e.preventDefault();
      
      if (hasClass(mobileNav, 'load')) {
        removeClass(mobileNav, 'load');
        addClass(mobileNav, 'exit');
        var myFunction = function(){
          addClass(mobileNav, 'hidden');
        };
        setTimeout(myFunction, 500);
        
      } else {
        removeClass(mobileNav, 'exit');
        removeClass(mobileNav, 'hidden');
        addClass(mobileNav, 'load');
      }
    });
    
  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazyload",
    load_delay: 200
  });
  // Image Process
  var imgHires = document.getElementsByClassName('image-hires');
  for (var i=0; i<imgHires.length; i++) {
      if(imgHires[i].getAttribute('data-style')) {
         imgHires[i].setAttribute('style',imgHires[i].getAttribute('data-style'));
         imgHires[i].removeAttribute('data-style'); //use only if you need to remove data-src attribute after setting src
         addClass(imgHires[i], 'image-loaded');
      }
  }
  // Image Process

  baguetteBox.run('.gallery');

});