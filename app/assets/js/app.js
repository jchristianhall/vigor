$(document).ready(function () {
  'use strict';

  // Visibility Controls
  $('#today').hide();
  $('#exercise').hide();
  //$('#weight').hide();
  $('#badges').hide();
  $('#history').hide();
  $('#add-exercise').hide();
  $('#settings').hide();

  function updateSection(selection, id) {
    if (!$(selection).hasClass('active')) {
      $(selection).siblings().attr('class', '');
      $(selection).attr('class', 'active');
      $('#content > section').fadeOut();
      setTimeout(function () { $(id).fadeIn(); }, 500);
    }
  }

  $('nav ul li').eq(0).click(function () {
    updateSection(this, '#today');
  });

  $('nav ul li').eq(1).click(function () {
    updateSection(this, '#exercise');
  });

  $('nav ul li').eq(2).click(function () {
    updateSection(this, '#weight');
  });

  $('nav ul li').eq(3).click(function () {
    updateSection(this, '#badges');
  });

  $('nav ul li').eq(4).click(function () {
    updateSection(this, '#history');
  });

  $('.cog-icon').click(function () {
    $('#settings').fadeIn();
    $('.overlay').fadeIn();
  });
});