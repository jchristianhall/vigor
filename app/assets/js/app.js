$(document).ready(function () {
  'use strict';

  // Visibility Controls
  //$('#today').hide();
  $('#exercise').hide();
  $('#weight').hide();
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

  $('#exercise-list-box .plus-icon').click(function () {
    $('#add-exercise').fadeIn();
    $('.overlay').fadeIn();
  });

  $('#settings-cancel').click(function () {
    $('#settings').fadeOut();
    $('.overlay').fadeOut();
  });

  $('#add-exercise-cancel').click(function () {
    $('#add-exercise').fadeOut();
    $('.overlay').fadeOut();
  });

  // Toggle controls
  $('.toggle').click(function () {
    if (!$(this).hasClass('toggle-active')) {
      $(this).addClass('toggle-active');
    } else {
      $(this).removeClass('toggle-active');
    }
  });

  // Add exercise controls
  $('.add-exercise-type select').click(function () {
    if ($('.add-exercise-type select option:selected').text() === 'Other') {
      $('.add-exercise-other').fadeIn();
    } else {
      $('.add-exercise-other').fadeOut();
    }
  });
  $('.add-exercise-style select').click(function () {
    if ($('.add-exercise-style select option:selected').text() === 'Sets') {
      $('.add-exercise-sets').fadeIn();
      $('.add-exercise-reps').fadeIn();
    } else {
      $('.add-exercise-sets').fadeOut();
      $('.add-exercise-reps').fadeOut();
    }
  });

  var optionsLine = {

    //Boolean - If we show the scale above the chart data
    scaleOverlay : false,

    //Boolean - If we want to override with a hard coded scale
    scaleOverride : true,

    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : 4,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 5,
    //Number - The scale starting value
    scaleStartValue : 120,

    //String - Colour of the scale line
    scaleLineColor : "rgba(0,0,0,.1)",

    //Number - Pixel width of the scale line
    scaleLineWidth : 1,

    //Boolean - Whether to show labels on the scale
    scaleShowLabels : true,

    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",

    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Lato'",

    //Number - Scale label font size in pixels
    scaleFontSize : 12,

    //String - Scale label font weight style
    scaleFontStyle : "normal",

    //String - Scale label font colour
    scaleFontColor : "rgba(52, 73, 94, 1)",

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether the line is curved between points
    bezierCurve : false,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //Boolean - Whether to animate the chart
    animation : true,

    //Number - Number of animation steps
    animationSteps : 60,

    //String - Animation easing effect
    animationEasing : "easeOutQuart",

    //Function - Fires when the animation is complete
    onAnimationComplete : null

  }

  var dataLine = {
    labels : ["3/8","3/9","3/10","3/11","3/12","3/13","3/14"],
    datasets : [{
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(231, 139, 67, 1)",
      pointColor : "rgba(231, 139, 67, 1)",
      pointStrokeColor : "rgba(231, 139, 67, 1)",
      data : [130,135,131,132,130,140,135],
      mouseover: function(data) {
          console.log(data);
          console.log('over: look at me im in the data code!')
      },

      mouseout: function(data) {
          console.log(data);
          console.log('out: ook at me im in the data code!')
      }
    }]
  }

  var ctxLine = $("#weight-graph").get(0).getContext("2d");
  var weightChart = new Chart(ctxLine);

  new Chart(ctxLine).Line(dataLine,optionsLine);


var optionsBar = {

  //Boolean - If we show the scale above the chart data
  scaleOverlay : false,

  //Boolean - If we want to override with a hard coded scale
  scaleOverride : true,

  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps : 5,
  //Number - The value jump in the hard coded scale
  scaleStepWidth : 5,
  //Number - The scale starting value
  scaleStartValue : 0,

  //String - Colour of the scale line
  scaleLineColor : "rgba(0,0,0,.1)",

  //Number - Pixel width of the scale line
  scaleLineWidth : 1,

  //Boolean - Whether to show labels on the scale
  scaleShowLabels : true,

  //Interpolated JS string - can access value
  scaleLabel : "<%=value%>",

  //String - Scale label font declaration for the scale label
  scaleFontFamily : "'Lato'",

  //Number - Scale label font size in pixels
  scaleFontSize : 12,

  //String - Scale label font weight style
  scaleFontStyle : "normal",

  //String - Scale label font colour
  scaleFontColor : "rgba(52, 73, 94, 1)",

  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,

  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",

  //Number - Width of the grid lines
  scaleGridLineWidth : 1,


  //Boolean - If there is a stroke on each bar
  barShowStroke : true,

  //Number - Pixel width of the bar stroke
  barStrokeWidth : 1,

  //Number - Spacing between each of the X value sets
  barValueSpacing : 12,

  //Number - Spacing between data sets within X values
  barDatasetSpacing : 0,

  //Boolean - Whether to animate the chart
  animation : true,

  //Number - Number of animation steps
  animationSteps : 60,

  //String - Animation easing effect
  animationEasing : "easeOutQuart",

  //Function - Fires when the animation is complete
  onAnimationComplete : null

}
  var dataBar = {
    labels : ["2/17/14","2/24/14","3/3/14"],
    datasets : [
    {
      fillColor : "rgba(32,153,214,1)",
      strokeColor : "rgba(32,153,214,1)",
      data : [8,14,16],

      mouseover: function(data) {
          console.log(data);
          console.log('over: look at me im in the data code!')
      },
      mouseout: function(data) {
          console.log(data);
          console.log('out: ook at me im in the data code!')
      }
    },

    {
      fillColor : "rgba(239,72,65,1)",
      strokeColor : "rgba(239,72,65,1)",
      data : [12,10,13],

      mouseover: function(data) {
          console.log(data);
          console.log('over: look at me im in the data code!')
      },
      mouseout: function(data) {
          console.log(data);
          console.log('out: ook at me im in the data code!')
      }
    },

    {
      fillColor : "rgba(0,204,124,1)",
      strokeColor : "rgba(0,204,124,1)",
      data : [4,2,4],

      mouseover: function(data) {
          console.log(data);
          console.log('over: look at me im in the data code!')
      },
      mouseout: function(data) {
          console.log(data);
          console.log('out: ook at me im in the data code!')
      }
    },

    {
      fillColor : "rgba(244,195,68,1)",
      strokeColor : "rgba(244,195,68,1)",
      data : [2,2,2],

      mouseover: function(data) {
          console.log(data);
          console.log('over: look at me im in the data code!')
      },
      mouseout: function(data) {
          console.log(data);
          console.log('out: ook at me im in the data code!')
      }
    }
    ]
  }

  var ctxBar = $("#exercise-graph").get(0).getContext("2d");
  var exerciseChart = new Chart(ctxBar);

  new Chart(ctxBar).Bar(dataBar,optionsBar);
});