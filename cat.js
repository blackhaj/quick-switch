$(document).ready(function() {

  $('body').on('keydown', function(e) {
    if (e.keyCode === 90) {
      $('body').empty();
      $('body').append(
        "<img src='https://i.picsum.photos/id/1062/5092/3395.jpg' height='100%' width='100%'>"
      )
    }
    if (e.keyCode === 88) {
      window.location = "https://www.bbc.com/"
    }
    
  });
});
