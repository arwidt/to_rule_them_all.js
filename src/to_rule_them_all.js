

;(function($, window, document, undefined) {
    var $window = $(window);

    var _rulers_container = null;
    var _rulers = [];
    var _following_rulers = [];

    $window.resize(function() {
        var item,
            fpos,
            fwidth,
            fheight;

        for (var i = 0; i < _following_rulers.length; i++) {
            item = _following_rulers[i];
            fpos = _following_rulers[i]._following.position();

            fwidth = _following_rulers[i]._following.width();
            fheight = _following_rulers[i]._following.height();

            if (item.type == "vertical") {
                if (item.offsetXType === "%") {
                    item._instance.css('left', fpos.left + utils.calcPercentOf(item.offsetX, fwidth));
                } else {
                    item._instance.css('left', fpos.left + item.offsetX);
                }
            } else {
                if (item.offsetYType === "%") {
                    item._instance.css('top', fpos.top + utils.calcPercentOf(item.offsetY, fheight));
                } else {
                    item._instance.css('top', fpos.top + item.offsetY);
                }
            }
        }
    });

    var removeRuler = function(ro) {
        $('#' + ro.id).remove();
    };

    var utils = (function() {
        var _inst = {};

        _inst.getType = function(val) {
            if (typeof val === "number") {
                // return val + "px";
                return "px";
            } else if (typeof val === "string") {
                if (val.substr(val.length-1, 1) === "%") {
                    // return val;
                    return "%";
                } else if (val.substr(val.length-2, 2) === "px") {
                    // return val;
                    return "px";
                }
            } else {
                // return "0";
                return null;
            }
        };

        _inst.calcPercentOf = function(perc, value) {
            if (perc.substr(perc.length-1, 1) !== "%") return null;
            return +perc.substr(0, perc.length-1)/100*value;
        };

        return _inst;
    })();

    window.utils = utils;

    $.fn.unrule = function(id) {
        var obj;
        for (var i = 0; i < _rulers.length; i++) {
            if (_rulers[i].id == id) {
                obj = _rulers.splice(i, 1)[0];
                removeRuler(obj);
                break;
            }
        }
        for (var i = 0; i < _following_rulers.length; i++) {
            if (_following_rulers[i].id == id) {
                obj = _following_rulers.splice(i, 1)[0];
                removeRuler(obj);
                break;
            }
        }
    };

    $.fn.rule = function(opts) {

        // OPTS PARAMS

        // id

        // offsetX: number
        // offsetXType: '%' | 'px'
        // offsetY: number
        // offsetYType: '%' | 'px'

        // type: vertical | horizontal
        // color: number
        // alpha: number 0-1
        // follow: true | false

        // console.log(utils);

        if (opts) {
            // console.log(opts);
            // console.log(utils.getType(opts.offsetX));
        }

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
            hash: Math.round(Math.random()*99999999),
            id: Math.round(Math.random()*99999999),
            color: 'cyan',
            type: 'vertical',
            offsetX: 0,
            offsetXType: "px",
            offsetY: 0,
            offsetYType: "px",
            alpha: 1,
            follow: true,
            _instance: ruler,
            _following: $(this)
        };

        ro = $.extend(ro, opts);

        ro.offsetXType = utils.getType(ro.offsetX);
        ro.offsetYType = utils.getType(ro.offsetY);

        if (ro.offsetY !== 0) {
            ro.type = 'horizontal';
        }

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

        return ro;
    };

})(jQuery, window, document);
