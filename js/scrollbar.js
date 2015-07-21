define(['jquery','scrollto'], function($,scrollto) {
    ScrollBar.default = {
        method: 'move',         // 以什么方式移动,move缓慢移动,不为move时瞬间移动
        dest: 0,                // 移动到哪   
        speed: 800,             // 值也小速度越快
        pos: $(window).height() // 决定div显示或者隐藏的位置
    };

    // 构造函数
    function ScrollBar($el,opts){
        this.opts = $.extend({}, ScrollBar.default, opts);
        this.$el = $($el);  //无论是jq对象还是DOM对象都转为jq对象
        this.scrollto = new scrollto.scrollto();  //实例化其他类也要写在this里面
        this._checkPosition();

        if (this.opts.method === 'move') {
            this.$el.on('click', $.proxy(this._move,this));
        } else {
            this.$el.on('click', $.proxy(this._go,this));
        }
        $(window).scroll($.proxy(this._checkPosition,this));
    }

    // 平滑移动
    ScrollBar.prototype._move = function() {
        this.scrollto.move();
    };
    // 瞬间移动
    ScrollBar.prototype._go = function() {
        this.scrollto.go();
    };
    // 决定div是否显示或者隐藏    
    ScrollBar.prototype._checkPosition = function() {
        var opts = this.opts,
            $el  = this.$el;
        $(window).scrollTop() < opts.pos ? $el.fadeOut() : $el.fadeIn();
    };

    //注册为jq插件
    $.fn.extend({
        'scrollToTop': function(opts) {
            return this.each(function() {   //有可能是多个.class组成,所以需要加上each遍历
                new ScrollBar(this, opts);
            });
        }
    });

    return {
        'scrollbar' : ScrollBar
    }
});