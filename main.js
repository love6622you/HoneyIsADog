;(function($) {
  $(document).on('click', 'a', function(event) {
    event.preventDefault()
    var target = $(this).attr('href')
    if (target !== 'javascript:void(0)') {
      $('html').animate(
        {
          scrollTop: $(target).offset().top - 50
        },
        500
      )
    }
  })

  let navToggler = () => {
    var x = document.querySelector('#topnav')
    console.log(x)
    if (x.className === 'topnav') {
      x.className += ' responsive'
    } else {
      x.className = 'topnav'
    }
  }

  $('a.icon').on('click', function(event) {
    navToggler()
  })
})(jQuery)
