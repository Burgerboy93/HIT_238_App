$(function(){

    $('.translate').click(function(){
        var text = $('#translateText').val();
        text = encodeURIComponent(text);
        var url = "https://translate.google.com.au/#en/ja/"+text;
        $('audio').attr('src', url).get(0).play();
    });

});
