'use strict';

document.addEventListener('DOMContentLoaded', () => {

    options();
    optionEvent();

    const $livePreview = Array.prototype.slice.call(document.querySelectorAll('.options'), 0);
    if ($livePreview.length > 0) {
        $livePreview.forEach(el => {
            el.addEventListener('change', (event) => {
                options();
                optionEvent();
            });
        });
    }

});

function options(event) {



    let position;
    let shape;
    let size;
    let animation;

    //    Default value
    // position = document.querySelector('#position').value;
    // shape = document.querySelector('#shape').value;
    // size = document.querySelector('#size').value;
    // animation = document.querySelector('#animation').value;

    //    Modified value
    position = "flBtn-position-r";
    shape = "flBtn-shape-rsquare";
    size = "flBtn-size-small";
    animation = "flBtn-effect-rotate-translate";


    let buttons =
        '<div class="flBtn ' + position + ' ' + size + ' ' + shape + ' ' + animation + '" id="floatBtn">' +
        '<input type="checkbox">' +
        '<a href="#" data-role="main" data-color="ORANGE-white">' +
        '<i class="fas fa-hand-point-up" data-action="open"></i>' +
        '<i class="fas fa-times" data-action="close"></i>' +
        '</a>' +
        '<ul class="flBtn-first">' +
        '<li><a href="#" tooltip="Home" data-color="WHITE-black"><i class="fas fa-home"></i></a></li>' +
        '<li><a href="#" data-btn-type="print" tooltip="Print" data-color="BLUE-white"><i class="fas fa-print"></i></a></li>' +
        '<li><a href="#examples" tooltip="Smooth Scroll" data-color="WHITE-lime" data-btn-type="scroll"><i class="fas fa-images"></i></a></li>' +
        '<li><a href="#" tooltip="To Top" data-color="GREEN-red" data-btn-type="toTop"><i class="fas fa-chevron-up"></i></a></li>' +
        '</ul>' +
        '<ul class="flBtn-second">' +
        '<li><a href="#" data-btn-share="facebook" tooltip="Share on Facebook" data-color="BLUE-white" data-btn-share="facebook"><i class="fab fa-facebook-f"></i></a></li>' +
        '<li><a href="#" tooltip="Share on Reddit" data-color="PURPLE-white" data-btn-share="reddit"><i class="fab fa-reddit"></i></a></li>' +
        '<li><a href="#" data-btn-share="twitter" tooltip="Share on Twitter" data-color="CYAN-white" data-btn-share="twitter"><i class="fab fa-twitter"></i></a></li>' +
        '<li><a href="#" data-btn-share="email" tooltip="Share via Email" data-color="YELLOW-black" data-btn-share="email"><i class="fas fa-envelope"></i></a></li>' +
        '</ul>' +
        '</div>';

    document.getElementById('result').innerHTML = buttons;
}


function optionEvent() {

    const $btnType = Array.prototype.slice.call(document.querySelectorAll('[data-btn-type]'), 0);

    if ($btnType.length > 0) {

        $btnType.forEach(el => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                let selected = el.getAttribute('data-btn-type');

                if (selected === 'print') {
                    window.print();
                } else if (selected === 'scroll') {
                    let anchor = el.getAttribute('href');

                    document.querySelector(anchor).scrollIntoView({
                        behavior: 'smooth'
                    });

                } else if (selected === 'toTop') {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                } else if (selected === 'back') {
                    window.history.back();
                } else if (selected === 'forward') {
                    window.history.forward();
                }

            });
        });

    }


    const $btnShare = Array.prototype.slice.call(document.querySelectorAll('[data-btn-share]'), 0);

    if ($btnShare.length > 0) {

        $btnShare.forEach(el => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                let network = el.getAttribute('data-btn-share');
                let url = window.location.href;
                let title = document.title;

                let shareUrl;

                switch (network) {
                    case 'facebook':
                        shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
                        break;
                    case 'vk':
                        shareUrl = 'http://vk.com/share.php?url=' + url;
                        break;
                    case 'twitter':
                        shareUrl = 'https://twitter.com/share?url=' + url + '&text=' + title;
                        break;
                    case 'linkedin':
                        shareUrl = 'https://www.linkedin.com/shareArticle?url=' + url + '&title=' + title;
                        break;
                    case 'odnoklassniki':
                        shareUrl = 'http://ok.ru/dk?st.cmd=addShare&st._surl=' + url;
                        break;
                    case 'googleplus':
                        shareUrl = 'https://plus.google.com/share?url=' + url;
                        break;
                    case 'pinterest':
                        shareUrl = 'https://pinterest.com/pin/create/button/?url=' + url;
                        break;
                    case 'xing':
                        shareUrl = 'https://www.xing.com/spi/shares/new?url=' + url;
                        break;
                    case 'myspace':
                        shareUrl = 'https://myspace.com/post?u=' + url + '&t=' + title;
                        break;
                    case 'weibo':
                        shareUrl = 'http://service.weibo.com/share/share.php?url=' + url + '&title=' + title;
                        break;
                    case 'buffer':
                        shareUrl = 'https://buffer.com/add?text=' + title + '&url=' + url;
                        break;
                    case 'stumbleupon':
                        shareUrl = 'http://www.stumbleupon.com/submit?url=' + url + '&title=' + title;
                        break;
                    case 'reddit':
                        shareUrl = 'http://www.reddit.com/submit?url=' + url + '&title=' + title;
                        break;
                    case 'tumblr':
                        shareUrl = 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + url + '&title=' + title;
                        break;
                    case 'blogger':
                        shareUrl = 'https://www.blogger.com/blog-this.g?u=' + url + '&n=' + title;
                        break;
                    case 'livejournal':
                        shareUrl = 'http://www.livejournal.com/update.bml?subject=' + title + '&event=' + url;
                        break;
                    case 'pocket':
                        shareUrl = 'https://getpocket.com/save?url=' + url;
                        break;
                    case 'telegram':
                        shareUrl = 'https://telegram.me/share/url?url=' + url + '&text=' + title;
                        break;
                    case 'skype':
                        shareUrl = 'https://web.skype.com/share?url=' + url;
                        break;
                    case 'email':
                        shareUrl = 'mailto:?subject=' + title + '&body=' + url;
                        break;
                    default:
                        shareUrl = '';
                }

                let popupWidth = 550;
                let popupHeight = 450;
                let topPosition = (screen.height - popupHeight) / 2;
                let leftPosition = (screen.width - popupWidth) / 2;
                let popup = 'width=' + popupWidth + ', height=' + popupHeight + ', top=' + topPosition + ', left=' + leftPosition +
                    ', scrollbars=0, resizable=1, menubar=0, toolbar=0, status=0';

                window.open(shareUrl, null, popup);

            });
        });

    }
}
