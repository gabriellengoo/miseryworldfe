// $("div1").css({cursor : 'url(../assets/cursor2.gif), auto'});


$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

	// $(document).mousedown(function(e){
	// 	if(!$(e.target).hasClass('email')){
	// 		$('.flash').removeClass('blue red yellow purple green orange').addClass('flashing black');
	// 		$('header').hide();
	// 		$('.info').show();
	// 		slide = slide >= $('.slides li').length - 1 ? slide = 0 : slide + 1;
	// 		$('.slides li').eq(slide).addClass('visible');
	// 		e.preventDefault();
	// 	}
	// });

	// $(document).mouseup(function(e){
	// 	$('.slides li').removeClass('visible');
	// 	colourIndex = colourIndex === 5 ? colourIndex = 0 : colourIndex + 1;
	// 	$('.flash').addClass(colours[colourIndex]).removeClass('flashing black');
	// 	$('.info').hide();
	// 	$('header').show();
	// 	e.preventDefault();
	// });

	document.addEventListener('touchmove', function(e){
		$('.flash, .white').css({
			top:e.pageY,
			left:e.pageX
		});
		e.preventDefault();
	}, false);

});







	$(document).ready(function(){

		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var slide = 0;
		var colours = ['green'];
		var colourIndex = 0;
		var divider = 1/$(document).height();
	
		if(winWidth < 600){
			var size = winHeight < winWidth ? winWidth : winHeight;
			$('.flashh').css({
				width:size*2,
				height:size*2,
				marginTop:-size,
				marginLeft:-size
			});
		}
	
		// $(document).scroll(function(){
		// 	scrollTop = $(document).scrollTop();
		// 	scale = 1 - (scrollTop * divider);
		// 	$('.flash').css({'transform':'scale(' + scale + ')'});
		// });
	
		$(document).mousemove(function(e){
			$('.flashh').css({
				top:e.pageY - $(document).scrollTop(),
				left:e.pageX
			});
		});

	document.addEventListener('touchmove', function(e){
		$('.flashh, .white').css({
			top:e.pageY,
			left:e.pageX
		});
		e.preventDefault();
	}, false);


});





$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash22').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash22').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash22, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});


$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash2').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash2').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash2, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});







$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash3').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash3').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash3, .white3').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});



$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash33').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash33').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash33, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});









$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash33').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash44').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash44, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash4').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash4').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash4, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash55').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash55').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash55, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash5').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash5').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash5, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash66').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash66').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash66, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});$(document).ready(function(){

	var winWidth = $(window).width();
	var winHeight = $(window).height();
	var slide = 0;
	var colours = ['green'];
	var colourIndex = 0;
	var divider = 1/$(document).height();

	if(winWidth < 600){
		var size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash6').css({
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		});
	}

	// $(document).scroll(function(){
	// 	scrollTop = $(document).scrollTop();
	// 	scale = 1 - (scrollTop * divider);
	// 	$('.flash').css({'transform':'scale(' + scale + ')'});
	// });

	$(document).mousemove(function(e){
		$('.flash6').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});

document.addEventListener('touchmove', function(e){
	$('.flash6, .white2').css({
		top:e.pageY,
		left:e.pageX
	});
	e.preventDefault();
}, false);


});



var ball=document.getElementsByClassName("ball");

document.onmousemove=function(){
var w=event.clientX*100/window.innerWidth+"%";
var h=event.clientY*110/window.innerHeight+"%";

for(var i=0;i<2;i++){
    ball[i].style.left=h;
    ball[i].style.top=w;
    ball[i].style.transform="translate(-"+w+",-"+h+")";
  }

 }

	// document.addEventListener('touchstart', function(e){
	// 	if(!$(e.target).hasClass('email')){
	// 		$('.flash, .white').css({
	// 			top:e.pageY,
	// 			left:e.pageX
	// 		});
	// 		$('.flash').removeClass('blue red yellow purple green orange').addClass('flashing black');
	// 		$('header').hide();
	// 		$('.info').show();
	// 		slide = slide >= $('.slides li').length - 1 ? slide = 0 : slide + 1;
	// 		$('.slides li').eq(slide).addClass('visible');
	// 		e.preventDefault();
	// 	}
	// }, false);

	// document.addEventListener('touchend', function(e){
	// 	if(!$(e.target).hasClass('email')){
	// 		$('.slides li').removeClass('visible');
	// 		colourIndex = colourIndex === 5 ? colourIndex = 0 : colourIndex + 1;
	// 		$('.flash').addClass(colours[colourIndex]).removeClass('flashing black');
	// 		$('.info').hide();
	// 		$('header').show();
	// 		e.preventDefault();
	// 	}
	// }, false);




/*
 * hover effects by pixelate
 * @reference http://e3.nintendo.com/
 * @use [TweenLite.js, TimelineMax.js, jQuery.js]
 */

var app = {};
app.pixelhover = (function() {
	function pixelate() {
  	var options = {
    	value: 0.06,
      duration: .5
    };
    var element = this,
    		elementParent = element.parentNode;
    
    var imgWidth = element.width,
    		imgHeight = element.height,
        canv = document.createElement('canvas');

    canv.width = imgWidth;
    canv.height = imgHeight;
    
    var ctx = canv.getContext('2d');
    
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    
    try {
    	ctx.drawImage(element, 0, 0, canv.width, canv.height);
    } catch(e) {
    	//
    }
    
    if (!$(elementParent).find('canvas').length) {
    	elementParent.insertBefore(canv, element);

      var thisBlur = { value: 1 };
      var pixelTimeline = new TimelineMax({ paused: true })
      	.to(thisBlur, options.duration, {
        	value: options.value,
          onStart: function() {
          	canv.style.display = 'block';
          },
          onUpdate: function() {
          	var blurHeight = imgHeight * thisBlur.value,
            		blurWidth = imgWidth * thisBlur.value;
            ctx.drawImage(element, 0, 0, blurWidth, blurHeight);
            ctx.drawImage(canv, 0, 0, 
            	blurWidth, blurHeight, 0, 0, 
              canv.width, canv.height
            );
          },
          onComplete: function() {},
          onReverseStart: function() {},
          onReverseComplete: function() {
          	element.style.display = 'block';
            canv.style.display = 'none';
            ctx.drawImage(element, 0, 0, imgWidth, imgHeight);
          }
        }
      );

      $(elementParent).on('mouseenter', function(e) {
				pixelTimeline.reverse();
      });
      
      $(elementParent).on('mouseleave', function(e) {
      
        pixelTimeline.play();
      });
      
      $(elementParent).on('click', function(e) {
      	element.style.display = 'block';
        canv.style.display = 'none';
        ctx.drawImage(element, 0, 0, imgWidth, imgWidth);
      });   
    }
	}
  
  window.HTMLImageElement.prototype.pixelate = pixelate;
  
  if (typeof $ === 'function') {
  	$.fn.extend({
    	pixelate: function() {
      	return this.each(function() {
        	pixelate.apply(this, arguments);
        });
      }
    });
  }
  
  function _pagePixels() {
  	$('img[data-pixelate]').one('load', function() {
    	this.pixelate();
    }).each(function() {
    	if (this.complete) $(this).load();
    });
  }
  
  function _clearPixels() {
  	$(pixelTweens).each(function(e) {
			this.kill();
    });
    $('img[data-pixelate]').parent().find('canvas').remove();
    $('img[data-pixelate]').parent().off();
  }
  
  function _refreshPixels() {
  	_clearPixels();
    _pagePixels();
  }
  
  function _forcePixelize() {}
  function _forceDepixelize() {}
  
  return {
  	apply: _pagePixels,
    destroy: _clearPixels,
    refresh: _refreshPixels,
    forcePixel: _forcePixelize,
    forceDepixel: _forceDepixelize
  };
})();

$(function() {
	app.pixelhover.apply();
});









