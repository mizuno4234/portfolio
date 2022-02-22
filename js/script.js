
$(function() {

    //ページローディング後処理
    window.addEventListener('DOMContentLoaded', function(){
        setTimeout(() => {
            $(".typeCatch").t({
                speed : 100,
                caret : true,
            })
        }, 2000);
        setTimeout(() => {
            $('.fadein-menu').each(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(10px)');
            });
        }, 3500);    
    });

    /** TOPへ戻るボタン表示 **/
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが〇〇に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //タイプライター
    $(document).ready(function(){
        $(".type").t({
            speed : 100,
            caret:false,
            // speed_vary:true,
            // mistype:10,
            // repeat: true,
        })
        // const element =document.getElementById('catch')
        // element.addEventListener('transitionend', () => {
        //     // アニメーション終了後に実行する内容
        //     $(".sub-catch").fadeIn(300);
        // })
    });

    /** ふわっと表示 **/
    //スクロール時にイベントを発動する
    $(window).scroll(function (){
        $('.fadein').each(function(){
            //ターゲット要素の高さ
            var targetElement = $(this).offset().top;
            //スクロール位置（ページの一番上からディスプレイ上端）
            var scroll = $(window).scrollTop();
            //ウィンドウの高さ
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 400){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});