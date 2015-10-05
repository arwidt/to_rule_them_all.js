

(function ( $ ) {

    var _rulers_container = null;
    var _rulers = [];
    var _following_rulers = [];

    $(window).resize(function() {
        var item,
            fpos;

        for (var i = 0; i < _following_rulers.length; i++) {
            item = _following_rulers[i];
            fpos = _following_rulers[i]._follower.position();
            if (item.type == "vertical") {
                // console.log(item._follower);
                item._instance.css('left', fpos.left + item.offsetX);
            } else {
                item._instance.css('top', fpos.top + item.offsetY);
            }
        }
    });

    $.fn.rule = function(opts) {

        // OPTS PARAMS

        // offsetX: number
        // offsetXType: '%' | 'px'
        // offsetY: number
        // offsetYType: '%' | 'px'

        // type: vertical | horizontal
        // color: number
        // alpha: number 0-1
        // follow: true | false

        console.log(opts);

        if (!_rulers_container) {
            _rulers_container = $('<div />');
            _rulers_container.addClass('rulers');
            _rulers_container.css('position', 'fixed');
            _rulers_container.css('width', '100%');
            _rulers_container.css('height', '100%');
            _rulers_container.css('z-index', '1000');
            $('body').prepend(_rulers_container);
        }

        var ruler = $('<div class="ruler" />');

        var ro = {
            id: Math.round(Math.random()*99999999),
            color: 'cyan',
            type: 'vertical',
            offsetX: 0,
            offsetXType: 'px',
            offsetY: 0,
            offsetYType: 'px',
            alpha: 1,
            follow: true,
            _instance: ruler,
            _follower: $(this)};

        ro = $.extend(ro, opts);

        ruler.attr('id', ro.id);
        ruler.css('background-color', ro.color);
        ruler.css('opacity', ro.alpha);
        ruler.css('position', 'absolute');

        if (ro.type == 'horizontal') {
            ruler.css('height', '1px');
            ruler.css('width', '100%');

            ruler.css('top', ro.offsetY);
            ruler.css('left', '0');
        } else {
            ruler.css('width', '1px');
            ruler.css('height', '100%');

            ruler.css('top', '0');
            ruler.css('left', ro.offsetX);
        }

        if (ro.follow) {
            _following_rulers.push(ro);
        }
        _rulers.push(ro);

        _rulers_container.prepend(ruler);

        $(window).trigger('resize');

        return this;
    };

}( jQuery ));
