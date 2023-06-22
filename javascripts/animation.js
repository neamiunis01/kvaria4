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
  $("h1").click(function(){
    $(".about_text").toggleClass('none')
  });
});
