define(['jquery'], function($){
    ScrollTo.default = {
        dest: 0,
        speed: 800
    };

    function ScrollTo(opts) {
        this.opts = $.extend({}, ScrollTo.default, opts);
        this.$el = $('html, body');
    }

    ScrollTo.prototype.move = function() {
        var opts = this.opts
            $el  = this.$el;
        if ( $(window).scrollTop()!=opts.dest && !$el.is(':animated') ) {
            $el.animate({
                'scrollTop': opts.dest
            },opts.speed);
        }
    };

    ScrollTo.prototype.go = function() {
        var opts = this.opts,
            $el  = this.$el;
        $el.scrollTop(opts.dest);
    };

    return {
        'scrollto': ScrollTo
    }
});