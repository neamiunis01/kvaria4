$(document).ready(function(){

  // Афиша и билеты
  $(".carmen_button").click(function(){
      $(".ticket_forms").toggleClass('none')
  });

  $(".onegin_button").click(function(){
      $(".ticket_forms").toggleClass('none')
  });

  $(".workshop_button").click(function(){
      $(".ticket_forms").toggleClass('none')
  });

  $(".traviata_button").click(function(){
      $(".ticket_forms").toggleClass('none')
  });

  $(".figaro_button").click(function(){
      $(".ticket_forms").toggleClass('none')
  });

  $(".kihot_button").click(function(){
      $(".ticket_forms").toggleClass('none')
  });

  $(".esc").click(function(){
      $(".ticket_forms").toggleClass('none')
  });

  $(".done_button_1").click(function(){
      $(".ch_seat_form").toggleClass('none');
      $(".name_form").toggleClass('none')
  });

  $(".done_button_2").click(function(){
      $(".name_form").toggleClass('none');
      $(".thankyou_form").toggleClass('none')
  });

  $(".menu_mobile").click(function(){
      $(".side_menu").toggleClass('none');
      $(".main_menu").toggleClass('none');
  });

  $(".esc_side").click(function(){
      $(".side_menu").toggleClass('none')
  });

  // О театре
  $(".theater").click(function(){
    $(".about_text").toggleClass('none')
  });
  $(".building").click(function(){
    $(".building_text").toggleClass('none')
  });
  $(".esc").click(function(){
    $(".about_text").toggleClass('none');
  });

  // Магазин
  $(".bag_group").click(function(){
      $(".buy_form").toggleClass('none')
  });
  $(".notebook_group").click(function(){
      $(".buy_form").toggleClass('none')
  });
  $(".tshirt_group").click(function(){
      $(".buy_form").toggleClass('none')
  });
  $(".stickers_group").click(function(){
      $(".buy_form").toggleClass('none')
  });
  $(".cup_group").click(function(){
      $(".buy_form").toggleClass('none')
  });
  $(".hat_group").click(function(){
      $(".buy_form").toggleClass('none')
  });
  $(".case_group").click(function(){
      $(".buy_form").toggleClass('none')
  });
  $(".book_group").click(function(){
      $(".buy_form").toggleClass('none')
  });
  $(".esc_buy").click(function(){
      $(".buy_form").toggleClass('none')
  });

  $(".done_button").click(function(){
      $(".buy_form").toggleClass('none');
  });


  // слайдер диспетчерской
  // вперед
  let slide = 0;
  let position = 0;
  $(".button_next").click(function(){
      position += -71.7;

      if (slide == 3)
      {
          slide = 0;
      }
      if (slide == 2) {
          $(".carousel").css({'background-position': position+ 'vw'});
          setTimeout(function() {
              $(".all_slides").css({'transition': '.0s'});
          }, 100);
          position = 0;
          setTimeout(function() {
              $(".all_slides").css({'background-position': position +'vw'});
          }, 500);
          setTimeout(function() {
              $(".all_slides").css({'transition': '.5s'});
          }, 510);
      }
      if (slide < 2) {
          $(".all_slides").css({'background-position': position+ 'vw'});
      }
      slide +=1;
  });
  // назад
  $(".button_prev").click(function(){
      position -= -71.7;

      if (slide == -3)
      {
          slide = 0;
      }
      if (slide == -2) {
          $(".all_slides").css({'background-position': position+ 'vw'});
          setTimeout(function() {
              $(".all_slides").css({'transition': '.0s'});
          }, 100);
          position = 0;
          setTimeout(function() {
              $(".all_slides").css({'background-position': position +'vw'});
          }, 500);
          setTimeout(function() {
              $(".all_slides").css({'transition': '.5s'});
          }, 510);
      }
      if (slide > -2) {
          $(".all_slides").css({'background-position': position+ 'vw'});
      }
      slide -=1;
  });
});
