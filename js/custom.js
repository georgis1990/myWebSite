//enable smoot scrolling
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
  &&
  location.hostname == this.hostname
) {
  // Figure out element to scroll to
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  // Does a scroll target exist?
  if (target.length) {
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000, function() {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) { // Checking if the target was focused
        return false;
      } else {
        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        $target.focus(); // Set focus again
      };
    });
  }
}
});

//change navbar background on scrool
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 770);


});

//typed js text animation
var typed = new Typed(".type", {
strings: ["JAVASCRIPT",
          "HTML/CSS",
          "WORDPRESS",
          "RUBY ON RAILS"],
typeSpeed: 10,
backSpeed: 30,
smartBackspace: true,
 showCursor: false,
 cursorChar: '|',
 loop: true

});



// nav menu hover animation
$(".jelloAnimate").hover(function(){
    $(this).addClass('animated jello');
    }, function(){
   $(this).removeClass('animated jello');
});
// download CV pulse
$("#downloadCv").hover(function(){
    $(this).addClass('animated pulse');
    }, function(){
   $(this).removeClass('animated pulse');
});

// progress bar on Skills

$(window).scroll(function(){

    $('#progress95').toggleClass('scrolled', $(this).scrollTop() > 70);

  });

  $(window).scroll(function(){

      $('#progress90').toggleClass('scrolled', $(this).scrollTop() > 70);

    });

  $(window).scroll(function(){

      $('#progress85').toggleClass('scrolled', $(this).scrollTop() > 70);

    });
  $(window).scroll(function(){

        $('#progress75').toggleClass('scrolled', $(this).scrollTop() > 70);

      });
  $(window).scroll(function(){

      $('#progress55').toggleClass('scrolled', $(this).scrollTop() > 70);

    });

  // Protfolio Area animation
  $(window).scroll(function(){


      $('#javascriptImg').toggleClass('displayNow', $(this).scrollTop() > 750);
      $('#rubyImg').toggleClass('displayNow', $(this).scrollTop() > 750);
      $('#wordpressImg').toggleClass('displayNow', $(this).scrollTop() > 750);
      $('#portfolioImgBack').toggleClass('displayNow', $(this).scrollTop() > 680);


    });
