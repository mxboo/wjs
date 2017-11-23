window.onload=function(){

    /*
    *
    * 1：动态生成轮播图并且 响应各种终端
    *
    *
    *
    * */

    var data=[
        {
            pcurl:"./images/slide_01_2000x410.jpg",
            mburl:"./images/slide_01_640x340.jpg"
        },
        {
            pcurl:"./images/slide_02_2000x410.jpg",
            mburl:"./images/slide_02_640x340.jpg"
        },
        {
            pcurl:"./images/slide_03_2000x410.jpg",
            mburl:"./images/slide_03_640x340.jpg"
        },
        {
            pcurl:"./images/slide_04_2000x410.jpg",
            mburl:"./images/slide_04_640x340.jpg"
        },
        {
            pcurl:"./images/slide_01_2000x410.jpg",
            mburl:"./images/slide_01_640x340.jpg"
        }
    ];
    /*
    * underscore.js 框架 下面的渲染方法
    *   _.template(模板内容)
    * 模板的方法
    * */
    function render() {
        var isMoblie=false;
        var clinetWidth = $(window).width();
        if (clinetWidth<768){
            isMoblie=true;
        }else {
            isMoblie=false;
        }
        var pointTemplate  = _.template($("#pointTemplate").html());
        var bannerTemplate  = _.template($("#bannerTemplate").html());
        /*
        * 参数：object  {}
        * 转化出来html 字符串
        * */
        var pointHtml = pointTemplate({medol:data});
        var bannerHtml = bannerTemplate({medol:data ,flag:isMoblie});
        /*
        * 渲染页
        * */
        $(".carousel-indicators").html(pointHtml);
        $(".carousel-inner").html(bannerHtml);
    }
    render();

    /*
    *
    * 2：标签页 nav 导航设置
    *
    *
    *
    * */

    function setTabNav(){

        var bigBox = document.querySelector(".wjs_tabs-top");
        var imgBox = bigBox.querySelector("ul");
        var lis =  imgBox.querySelectorAll("li");
        var totalHeight=0;
        for(var i = 0 ; i< lis.length;i++){
            totalHeight+=lis[i].offsetWidth;
        }
        imgBox.style.width=totalHeight+"px";
        console.log(totalHeight);
        /*
        *
        * 使用swipe 插件
        * */
        itestcode.iScroll({
            swipeDom:bigBox,
            swipeType:"x",
            swipeDistance:50
        });
    }

    setTabNav ();
    $(window).on("resize",function(){
        setTabNav ();
        render();
    });
};