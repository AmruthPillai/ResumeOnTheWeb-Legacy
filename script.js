$(function() {
  $('#lang-circle-eng').percircle({
    progressBarColor: '#207bc2',
    text: 'ENGLISH'
  });

  $('#lang-circle-tam').percircle({
    progressBarColor: '#e83d2c',
    text: 'TAMIL'
  });

  $('#lang-circle-kan').percircle({
    progressBarColor: '#e8a32c',
    text: 'KANNADA'
  });
});

$(document).ready(function() {
  window.sr = ScrollReveal({
    origin: 'top',
    distance: 0,
    duration: 500,
    delay: 100
  });
  sr.reveal('.resume-section');
});
