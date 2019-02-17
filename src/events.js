import $ from 'jquery';

function _bindVignettesClick() {
    const $this = $(this),
        index = $this.data('index');
    $('.js-car-color-v-listitem').removeClass('active').addClass('hidden');
    $('.js-car-image').addClass('hidden').eq(index).removeClass('hidden');
    $('.js-car-title').addClass('hidden').eq(index).removeClass('hidden');
    $this.removeClass('hidden').addClass('active');
}

function bindEvents () {
    const $body = $(document.body);
    $body.on('click', '.js-car-color-v-listitem', _bindVignettesClick);
    $('.js-progress-bar').each(function() {
        let $this = $(this),
            id = setInterval(frame, 10),
            width = 1;
        function frame() {
            if (width >= $this.data('progress')) {
                clearInterval(id);
            } else {
                width++;
                $this.css({
                    'width': width + '%'
                });
            }
        }
    });
}
export default bindEvents;