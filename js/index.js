require.config({
    paths:{
        'jquery': 'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
    }
});

requirejs(['jquery','scrollbar'], function($,scrollbar) {
    // 第一种调用：实例化一个对象
    // var scrollbar = new scrollbar.scrollbar($('#scroll-btn'));

    // 第二种调用：jquery插件的形式调用
    // $('.scroll-btn').scrollToTop();
    $('#scroll-btn').scrollToTop();
});