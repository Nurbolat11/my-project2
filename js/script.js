"use strict"

$(document).ready(function(){
	
	$('#show').click(function() {		
		$('.view').css({'display':'block'})
		$('.img1').css({'width':'90%'})		
	})
	
	$('#unshow').click(function() {
		$('.view').css({'display':'none'})
		$('.img1').css({'width':'50%'})
	})
	
	$('#show2').click(function() {
		$('.view2').css({'display':'block'})
		$('.img2').css({'width':'90%'})
	})
	
	$('#unshow2').click(function() {
		$('.view2').css({'display':'none'})
		$('.img2').css({'width':'50%'})
	})
	
	$('#show3').click(function() {
		$('.view3').css({'display':'block'})
		$('.img3').css({'width':'90%'})
	})
	
	$('#unshow3').click(function() {
		$('.view3').css({'display':'none'})
		$('.img3').css({'width':'50%'})
	})
	
	
	$('#smallMenu').click(function() {
		$('.line1').fadeToggle()
		$('.line4').fadeToggle()
		$('#cross2').toggleClass('line2 rotated2')
		$('#cross3').toggleClass('line3 rotated3')		
		$('.slide').slideToggle(500)
	})
	
	$(window).resize(function() {
		
		console.log($('body').width())
		
		if($('body').width()>801) {
			$('.slide').css({
				'display': 'block'
			})			
		} else {
			$('.slide').css({
				'display': 'none'
			})	
		}
	})	
	
})

let s = 1;
let timerId;
activeSlide()
autoslide()

function slideClick(arg) {
	s=arg
	$('header').css({'background-image': 'url(images/img'+s+'.jpg)'})
	activeSlide()
	clearTimeout(timerId)
	autoslide()
	
}

function autoslide() {
	timerId=setTimeout(slide,5000) 
}

function slide() {
	s++
	if(s>5) {
		s=1
		}
	$('header').css({'background-image': 'url(images/img'+s+'.jpg)'})
	activeSlide()
	clearTimeout(timerId)
	autoslide()
}

function activeSlide() {
		$('.dot').css({'border-color': '#fff',
			'background': 'transparent'})
	
		$('.dot:eq('+(s-1)+')').css({'border-color': '#D6F9E0',
		'background': '#D6F9E0'})
}

function Scroll(id) {
		let a=$(id).offset().top-109				
		
		$('html,body').animate({scrollTop:a},2000)
	}
