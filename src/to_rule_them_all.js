

(function ( $ ) {

    $.fn.rule = function() {
        var cli = (function() {
            return {
                test: function(value) {
                    return $('.test');
                }
            }
        })();
        return cli;
    };

}( jQuery ));
