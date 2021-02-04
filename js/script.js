
$(function() {

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
            // mistype:10,
        })
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