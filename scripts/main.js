// Menu Mobile
$(".btn__mobile").click(function() {
  $('.navs__container').addClass('active');
});

$(".close__menu__mobile").click(function() {
  $('.navs__container').removeClass('active');
});

$(".link__share__mobile").click(function() {
  $('.link__share').addClass('active');
});

/*Click Out*/
$(document).mouseup(function (e) {
  var container = $(".link__share__mobile");

  if (!container.is(e.target) && container.has(e.target).length === 0 && !$('.link__share__mobile').is(e.target)) {
      $('.link__share').removeClass('active');
  }
});


/*Scroll*/
$('.scroll').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top - 60;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});

/*Slick Carrossel*/
var noticias = {
  init:function(){
    $('.container__lista__noticias').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 951,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

  }
}

// Verificar se os Campos estão vazios//
$('#contato').submit(function(e){
  e.preventDefault();
  
  $('.required').each(function(){        
        if($(this).val().length !== 0){
          $('#contato').find('.formulario_error_mensagem').css('display','none');
          $('#contato').find('.input').removeClass('formulario_error_box')
          $('#contato').find('.input__area').removeClass('formulario_error_box')
        }else{
            $('#contato').find('.formulario_error_mensagem').css('display','block');
            $('#contato').find('.input').addClass('formulario_error_box')
            $('#contato').find('.input__area').addClass('formulario_error_box')
        }
  })

  $('.input, .input__area').focus(function(){
    $(this).parent().parent().find('.formulario_error_mensagem').css('display','none');
    $(this).parent().parent().find('.input').removeClass('formulario_error_box')
    $(this).parent().parent().find('.input__area').removeClass('formulario_error_box')
  })
  
});



/*Hover*/
$(".container__listagem__noticias .item__noticia").hover(function () {
  $(".container__listagem__noticias .item__noticia").not($(this)).css({ "opacity": 0.6 });
  $(".container__listagem__noticias .item__noticia").not($(this)).css({ "filter": 'blur(2px)' });
  },
  function () {
      $(".container__listagem__noticias .item__noticia").css({ "opacity": 1 });
      $(".container__listagem__noticias .item__noticia").css({ "filter": 'blur(0px)' });
  });


/*Scroll*/
$('.scroll').click(function(e){
  jQuery('a[href^=#]').on('click', function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ 
        scrollTop:$(href).offset().top
    },'slow');
});
});