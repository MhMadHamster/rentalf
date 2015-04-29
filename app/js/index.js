$(document).ready(function() {

    $('input, select').styler();

    $('.slider').noUiSlider({
        start: [18500],
        step: 500,
        range: {
            'min': [0],
            'max': [50000]
        },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            postfix: ' <small>руб</small>'
        })
    })

    $('.slider').Link('lower').to('-inline-<div class="tooltip"></div>', function(value) {
        $(this).html(
                value 
            );
    });

    $('.js-popup').on('click', function(e) {
        e.preventDefault();
        $('.popup').bPopup();
    });
})