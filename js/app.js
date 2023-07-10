$(".more_btn").on("click",function(){
  $(".lunch_hide").slideToggle();
  if ($(this).text() === '閉じる') {
    $(this).text('もっと見る');
  } else {
    $(this).text('閉じる');
  }
});


// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
  $('.glowAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow");

    } else {
      $(this).removeClass("glow");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//   GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
    var element = $(".glowAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
        var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

function RollAnimeControl() {
  $('.rollAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();  //rollAnimeの子要素を取得
    if (scroll >= elemPos - windowHeight) {
      $(childs).each(function (i) {   //子要素を1つ1つ処理をおこなう
        if (i < 10) {         //10未満の場合
        $(this).css("transition-delay","."+i+"s");  //子要素にcsstransition-delayを追加
        }else {             //10以上の場合
          var n = i / 10;       //ミリ秒指定なので10で割る
          $(this).css("transition-delay",n+"s");  //子要素にcsstransition-delayを追加
        }
      });
      
      $(this).addClass("roll"); //rollというアニメーションクラスを付与

    } else {
      $(childs).each(function () {    //子要素を1つ1つ処理をおこなう
        $(this).css("transition-delay","0s");//子要素にcsstransition-delayの秒を0とする
      });
      $(this).removeClass("roll");//rollというアニメーションクラスを除去
    }
  });
}

$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".rollAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = [];
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="transition-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="transition-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
});

function delayScrollAnime() {
  var time = 0.2;//遅延時間を増やす秒数の値
  var value = time;
  $('.delayScroll').each(function () {
    var parent = this;          //親要素を取得
    var elemPos = $(this).offset().top;//要素の位置まで来たら
    var scroll = $(window).scrollTop();//スクロール値を取得
    var windowHeight = $(window).height();//画面の高さを取得
    var childs = $(this).children();  //子要素を取得
    
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {
        
        if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
          
          $(parent).addClass("play"); //親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUp");//アニメーションのクラス名を追加
          value = value + time;//delay時間を増加させる
          
          //全ての処理を終わったらplayを外す
          var index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }else {
      $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
      value = time;//delay初期値の数値に戻す
    }
  })
}
$(window).on('load', function(){
  delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// 画面をスクロールをしたら動かしたい場合の記述
  // $(window).scroll(function (){
  //   delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
  // });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
 
function BlurTextAnimeControl() {
  $('.blurTrigger').each(function(){ //blurTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
    }else{
    $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
//   BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
// });
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });

  // $(window).on('load', function(){
  //   fadeAnime();/* アニメーション用の関数を呼ぶ*/
  // });

 