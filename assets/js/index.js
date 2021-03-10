$(document).ready(function () {
    // jQuery code
    $('#pembayaran a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    if ($('.slider-banner-slick').length > 0) { // check if element exists
        $('.slider-banner-slick').slick({
            infinite: true,
            autoplay: true,
            slidesToShow: 1,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        });
    }

});

window.addEventListener('load', function(){



});

var cardType = document.getElementById('cardType');

cardType.addEventListener('change', function(){

    console.log(cardType.value);
    var cardTypeVal = cardType.value;

    if (cardTypeVal == 'pra') {

        document.getElementById('button-buy-pra').style.display = 'block';
        document.getElementById('select-amount-pra').style.display = 'block';
        document.getElementById('button-pay-pasca').style.display = 'none';

    } else {

        document.getElementById('button-buy-pra').style.display = 'none';
        document.getElementById('select-amount-pra').style.display = 'none';
        document.getElementById('button-pay-pasca').style.display = 'block';

    }

});