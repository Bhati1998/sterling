$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });

      $(".testimonial-carousel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: $(".testimonial-carousel-controls .prev"),
        nextArrow: $(".testimonial-carousel-controls .next")
      });

      $('.client_SLider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });

      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<i class='fa fa-arrow-left'></i>",
          "<i class='fa fa-arrow-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
        
      });

      $(function () {
        $('#myTab li:first-child a').tab('show')
      });

      $(".inputs").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next('.inputs').focus();
        }
      });
      
  });

  (function($){
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
  
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
      });
  
      return false;
    });
  })(jQuery);


      $('#dp1').datepicker({
        format: 'mm-dd-yyyy'
    });


    $('.btn-number, .btn-number1').click(function(e){
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
    if(type == 'minus') {
        
        if(currentVal > input.attr('min')) {
            input.val(currentVal - 1).change();
        } 
        if(parseInt(input.val()) == input.attr('min')) {
            $(this).attr('disabled', true);
        }

    } else if(type == 'plus') {

        if(currentVal < input.attr('max')) {
            input.val(currentVal + 1).change();
        }
        if(parseInt(input.val()) == input.attr('max')) {
            $(this).attr('disabled', true);
        }

        }
        } else {
        input.val(0);
        }
        });
        $('.input-number').focusin(function(){
        $(this).data('oldValue', $(this).val());
        });
        $('.input-number').change(function() {

        minValue =  parseInt($(this).attr('min'));
        maxValue =  parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('name');
        //alert(name);
        if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
        }


        });
        $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
        });



  $(document).ready(function(){
    $("span#editAccountProffile").click(function(){
        $("div#editmyaccountModel").toggle();
    });

    $('a#editbtn-id').click(function(){
        $("div.edit-profileCls").toggle();
    });

    $('a#editbtn-id22').click(function(){
      $("div.edit-profileCls22").toggle();
    });

  $('#credits_btn').click(function(){
    $("div.credit-main-section").toggle();
  })

});







  


  
