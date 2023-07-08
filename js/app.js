$(".more_btn").on("click",function(){
  $(".lunch_hide").slideToggle();
  if ($(this).text() === '閉じる') {
    $(this).text('もっと見る');
  } else {
    $(this).text('閉じる');
  }
});