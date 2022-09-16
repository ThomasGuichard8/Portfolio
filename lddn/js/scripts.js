/*!
* Start Bootstrap - Freelancer v7.0.0 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//var TxtType = function(el, toRotate, period) {
//        this.toRotate = toRotate;
//        this.el = el;
//        this.loopNum = 0;
//        this.period = parseInt(period, 10) || 2000;
//        this.txt = '';
//        this.tick();
//        this.isDeleting = false;
//    };
//
//    TxtType.prototype.tick = function() {
//        var i = this.loopNum % this.toRotate.length;
//        var fullTxt = this.toRotate[i];
//
//        if (this.isDeleting) {
//        this.txt = fullTxt.substring(0, this.txt.length - 1);
//        } else {
//        this.txt = fullTxt.substring(0, this.txt.length + 1);
//        }
//
//        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
//
//        var that = this;
//        var delta = 200 - Math.random() * 100;
//
//        if (this.isDeleting) { delta /= 2; }
//
//        if (!this.isDeleting && this.txt === fullTxt) {
//        delta = this.period;
//        this.isDeleting = true;
//        } else if (this.isDeleting && this.txt === '') {
//        this.isDeleting = false;
//        this.loopNum++;
//        delta = 500;
//        }
//
//        setTimeout(function() {
//        that.tick();
//        }, delta);
//    };
//
//    window.onload = function() {
//        var elements = document.getElementsByClassName('typewrite');
//        for (var i=0; i<elements.length; i++) {
//            var toRotate = elements[i].getAttribute('data-type');
//            var period = elements[i].getAttribute('data-period');
//            if (toRotate) {
//              new TxtType(elements[i], JSON.parse(toRotate), period);
//            }
//        }
//        // INJECT CSS
//        var css = document.createElement("style");
//        css.type = "text/css";
//        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//        document.body.appendChild(css);
//    };

var clk =((document.ontouchstart!==null)?'click':'touchstart'),
counter = 0, 
// all figures
figures = document.querySelectorAll('.slideshow figure'),
// make slice
items = Array.prototype.slice.call(figures);

// add class show first element
// good for php loop
items[0].classList.add('show');

// auto on click stop this
var auto = setInterval(function(){
    counter++;
  _current(items);
},3000);


// add click events to prev & next buttons 
_('.next').addEventListener(clk, function(){
  counter++;
  _current(items);
  clearInterval(auto);
});
_('.prev').addEventListener(clk, function(){
  counter--;
  _current(items);
  clearInterval(auto);
});



/*
 *  short queryselector function
 * -------------------------------------------------------*/
function _(el){
  return document.querySelector(el);
}
/*
 *  current function
 * -------------------------------------------------------*/
function _current(elem){
  var numItems = elem.length,
      itemToShow = Math.abs(counter%numItems);
  Array.prototype.forEach.call(elem,function(obj,index){
    obj.classList.remove('show');
  })
  elem[itemToShow].classList.add('show');  
}