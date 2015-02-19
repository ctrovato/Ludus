// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){
	$('.form_slide').hide();
	$('.not_logged_in_msg').hide();
	
	//toggles form on button click
	$('.slide_down').click(function(e){
		e.preventDefault();
		$('.form_slide').slideToggle('slow');
	})

	//toggles message for users who are not signed in
	$('.slide_down_not_loggedIn').click(function(e){
		e.preventDefault();
		$('.not_logged_in_msg').slideToggle('slow');
	}) 
});