(function($) {
  $('.who__slider').slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  });

  $('body').on('keyup', 'input.card-input', function () {
    var key = event.keyCode || event.charCode;
    var inputs = $('input.card-input');
    if (($(this).val().length === this.size) && key != 32) {
      inputs.eq(inputs.index(this) + 1).focus();
    }
    if (key == 8 || key == 46) {
      var indexNum = inputs.index(this);
      if (indexNum != 0) {
        inputs.eq(inputs.index(this) - 1).val('').focus();
      }
    }
  });
  $('body').on('keyup', 'input.exp-input', function () {
    var key = event.keyCode || event.charCode;
    var inputs = $('input.exp-input');
    if (($(this).val().length === this.size) && key != 32) {
      inputs.eq(inputs.index(this) + 1).focus();
    }
    if (key == 8 || key == 46) {
      var indexNum = inputs.index(this);
      if (indexNum != 0) {
        inputs.eq(inputs.index(this) - 1).val('').focus();
      }
    }
  });
  $('.purchase__form-card').on('click', function () {
    $('#card').focus();
  })
  $('.purchase__form-exp').on('click', function () {
    $('#expire-card').focus();
  })


  $(function () {
    new WOW().init();
  });
  $(".hero__order-btn, .who__bonus-oder a").on('click', function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".purchase").offset().top
    }, 2000);
  });
  let countDate = moment().format('2020/11/28 12:00', "America/Sao_Paulo");
  $('#daysUntilStream').countdown(countDate, function(event) {
    $(this).html(event.strftime('%D Days'));
  });
  $('#daysUntilStream1').countdown(countDate, function(event) {
    $(this).html(event.strftime('%D Days'));
  });
  $('#hoursUntilStream').countdown(countDate, function(event) {
    $(this).html(event.strftime('%H Hours'));
  });
  $('#hoursUntilStream1').countdown(countDate, function(event) {
    $(this).html(event.strftime('%H Hours'));
  });

  $(function(){
    let formRow = $('.form-row_duplicate');
    let formRowDuplicate = $('.form-row_duplicate .form-row_hidden');
    let formRowDelete = $('.form-row_active_close');

    $('.purchase__form-footer-add a').on('click', function(e){
      e.preventDefault();
      if( $('.form-row_duplicate .form-row').length < 4 ){
        $(formRowDuplicate).clone().appendTo(formRow).removeClass('form-row_hidden').addClass('form-row_active');
      }
    })

    $('.form-row_duplicate').on('click', '.form-row_active_close', function(){
        $(this).closest('.form-row_active').remove();
    })
  });

  var isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
  if(isFirefox){
    $('body').addClass('isFirefox')
  }
  else{
    $('body').addClass('isNotFirefox')
  }


}
)(jQuery);
  

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICQoJy53aG9fX3NsaWRlcicpLnNsaWNrKHtcclxuICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbigna2V5dXAnLCAnaW5wdXQuY2FyZC1pbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LmNoYXJDb2RlO1xyXG4gICAgdmFyIGlucHV0cyA9ICQoJ2lucHV0LmNhcmQtaW5wdXQnKTtcclxuICAgIGlmICgoJCh0aGlzKS52YWwoKS5sZW5ndGggPT09IHRoaXMuc2l6ZSkgJiYga2V5ICE9IDMyKSB7XHJcbiAgICAgIGlucHV0cy5lcShpbnB1dHMuaW5kZXgodGhpcykgKyAxKS5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleSA9PSA4IHx8IGtleSA9PSA0Nikge1xyXG4gICAgICB2YXIgaW5kZXhOdW0gPSBpbnB1dHMuaW5kZXgodGhpcyk7XHJcbiAgICAgIGlmIChpbmRleE51bSAhPSAwKSB7XHJcbiAgICAgICAgaW5wdXRzLmVxKGlucHV0cy5pbmRleCh0aGlzKSAtIDEpLnZhbCgnJykuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJ2JvZHknKS5vbigna2V5dXAnLCAnaW5wdXQuZXhwLWlucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQuY2hhckNvZGU7XHJcbiAgICB2YXIgaW5wdXRzID0gJCgnaW5wdXQuZXhwLWlucHV0Jyk7XHJcbiAgICBpZiAoKCQodGhpcykudmFsKCkubGVuZ3RoID09PSB0aGlzLnNpemUpICYmIGtleSAhPSAzMikge1xyXG4gICAgICBpbnB1dHMuZXEoaW5wdXRzLmluZGV4KHRoaXMpICsgMSkuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmIChrZXkgPT0gOCB8fCBrZXkgPT0gNDYpIHtcclxuICAgICAgdmFyIGluZGV4TnVtID0gaW5wdXRzLmluZGV4KHRoaXMpO1xyXG4gICAgICBpZiAoaW5kZXhOdW0gIT0gMCkge1xyXG4gICAgICAgIGlucHV0cy5lcShpbnB1dHMuaW5kZXgodGhpcykgLSAxKS52YWwoJycpLmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICAkKCcucHVyY2hhc2VfX2Zvcm0tY2FyZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyNjYXJkJykuZm9jdXMoKTtcclxuICB9KVxyXG4gICQoJy5wdXJjaGFzZV9fZm9ybS1leHAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjZXhwaXJlLWNhcmQnKS5mb2N1cygpO1xyXG4gIH0pXHJcblxyXG5cclxuICAkKGZ1bmN0aW9uICgpIHtcclxuICAgIG5ldyBXT1coKS5pbml0KCk7XHJcbiAgfSk7XHJcbiAgJChcIi5oZXJvX19vcmRlci1idG4sIC53aG9fX2JvbnVzLW9kZXIgYVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcclxuICAgICAgc2Nyb2xsVG9wOiAkKFwiLnB1cmNoYXNlXCIpLm9mZnNldCgpLnRvcFxyXG4gICAgfSwgMjAwMCk7XHJcbiAgfSk7XHJcbiAgbGV0IGNvdW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnMjAyMC8xMS8yOCAxMjowMCcsIFwiQW1lcmljYS9TYW9fUGF1bG9cIik7XHJcbiAgJCgnI2RheXNVbnRpbFN0cmVhbScpLmNvdW50ZG93bihjb3VudERhdGUsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoJyVEIERheXMnKSk7XHJcbiAgfSk7XHJcbiAgJCgnI2RheXNVbnRpbFN0cmVhbTEnKS5jb3VudGRvd24oY291bnREYXRlLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgJCh0aGlzKS5odG1sKGV2ZW50LnN0cmZ0aW1lKCclRCBEYXlzJykpO1xyXG4gIH0pO1xyXG4gICQoJyNob3Vyc1VudGlsU3RyZWFtJykuY291bnRkb3duKGNvdW50RGF0ZSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQodGhpcykuaHRtbChldmVudC5zdHJmdGltZSgnJUggSG91cnMnKSk7XHJcbiAgfSk7XHJcbiAgJCgnI2hvdXJzVW50aWxTdHJlYW0xJykuY291bnRkb3duKGNvdW50RGF0ZSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQodGhpcykuaHRtbChldmVudC5zdHJmdGltZSgnJUggSG91cnMnKSk7XHJcbiAgfSk7XHJcblxyXG4gICQoZnVuY3Rpb24oKXtcclxuICAgIGxldCBmb3JtUm93ID0gJCgnLmZvcm0tcm93X2R1cGxpY2F0ZScpO1xyXG4gICAgbGV0IGZvcm1Sb3dEdXBsaWNhdGUgPSAkKCcuZm9ybS1yb3dfZHVwbGljYXRlIC5mb3JtLXJvd19oaWRkZW4nKTtcclxuICAgIGxldCBmb3JtUm93RGVsZXRlID0gJCgnLmZvcm0tcm93X2FjdGl2ZV9jbG9zZScpO1xyXG5cclxuICAgICQoJy5wdXJjaGFzZV9fZm9ybS1mb290ZXItYWRkIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiggJCgnLmZvcm0tcm93X2R1cGxpY2F0ZSAuZm9ybS1yb3cnKS5sZW5ndGggPCA0ICl7XHJcbiAgICAgICAgJChmb3JtUm93RHVwbGljYXRlKS5jbG9uZSgpLmFwcGVuZFRvKGZvcm1Sb3cpLnJlbW92ZUNsYXNzKCdmb3JtLXJvd19oaWRkZW4nKS5hZGRDbGFzcygnZm9ybS1yb3dfYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnLmZvcm0tcm93X2R1cGxpY2F0ZScpLm9uKCdjbGljaycsICcuZm9ybS1yb3dfYWN0aXZlX2Nsb3NlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mb3JtLXJvd19hY3RpdmUnKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gIHZhciBpc0ZpcmVmb3ggPSAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgIT09IC0xKTtcclxuICBpZihpc0ZpcmVmb3gpe1xyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0ZpcmVmb3gnKVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdpc05vdEZpcmVmb3gnKVxyXG4gIH1cclxuXHJcblxyXG59XHJcbikoalF1ZXJ5KTtcclxuICBcclxuIl19
