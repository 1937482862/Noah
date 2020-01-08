//bannerLeft驼峰命名法
var bannerLeft = document.querySelector(".banner_left");
var bannerImage1 = document.querySelector(".banner_img1");
var bannerLine = document.querySelector(".banner_line");
var bannerImage2 = document.querySelector(".banner_img2");
var bannerImage3 = document.querySelector(".banner_img3");
var bannerImage4 = document.querySelector(".banner_img4");
var banner = document.querySelector(".banner");
var intro1 = document.querySelector(".intro_content_text");
var intro2 = document.querySelector(".intro_bg2")
var intro3 = document.querySelector(".intro_bg4")
var intro4 = document.querySelector(".intro_bg6")
//bannerLeft.style.transform="rotateY(0deg)";
//页面每滚动一像素要旋转的角度
var speed = 45 / window.innerHeight;
var speed1 = 300 / window.innerHeight;
var speed2 = 360 / window.innerHeight;
var speed3 = 1000 / window.innerHeight;
var speed4 = 600 / window.innerHeight;
var speed5 = 300 / 293
window.onscroll = function () {
    var top = document.documentElement.scrollTop;
    console.log(top);
    //y轴旋转动画
    var angle = top * speed;
    if (angle <= 45) {
        bannerLeft.style.transform = "rotateY(" + (45 - angle) + "deg)"
        bannerImage1.style.transform = "rotateY(" + (45 - angle) + "deg)"
    }
    else {
        bannerLeft.style.transform = "rotateY(0)"
        bannerImage1.style.transform = "rotateY(0)"
    }
    //内容平移的动画
    var x = top * speed1
    if (x <= 300) {
        bannerLine.style.transform = "translateX(" + (x - 300) + "px)"
        bannerImage2.style.transform = "translateX(" + (x - 300) + "px)"
        bannerImage3.style.transform = "translateX(" + (x - 300) + "px)"
    }
    else {
        bannerLine.style.transform = "translateX(0px)"
        bannerImage2.style.transform = "translateX(0px)"
        bannerImage3.style.transform = "translateX(0px)"
    }
    //首屏旋转的动画
    var angle2 = top * speed2;
    if (angle2 <= 360) {
        bannerImage4.style.transform = "rotate(" + angle + "deg)" //默认沿Y轴转
    }
    else {
        bannerImage4.style.transform = "rotate(360deg)"
    }
    //处理首屏定位方法
    if (top > window.innerHeight) {
        banner.style.position = "absolute"
        banner.style.top = window.innerHeight + "px"

    }
    else {
        banner.style.position = "fixed"
        banner.style.top = 0
    }
    //企业介绍内容动画
    //企业介绍的图片动画1   
    //判断当前是不是已经滚动到1.5屏到2屏的范围内
    if (top > 1.5 * window.innerHeight && top < 2 * window.innerHeight) {
        var dis = 500 - (top - 1.5 * window.innerHeight) * speed3
        var dis2 = -300 + (top - 1.5 * window.innerHeight) * speed4
        intro1.style.transform = "translateX(" + dis + "px)"
        intro2.style.transform = "translateX(" + dis2 + "px)"
    }
    else if (top > 2 * window.innerHeight) {
        intro1.style.transform = "translateX(0px)"
        intro2.style.transform = "translateX(0px)"
    }
    //企业介绍动画2
    if (top > 1667 && top < 1969) {
        var dis = -300 + (top - 1667) * speed5
        var dis2 = 300 - (top - 1667) * speed5
        intro3.style.transform = "translateX(" + dis + "px)"
        intro4.style.transform = "translateX(" + dis2 + "px)"
    }
    else if (top > 1969) {
        intro3.style.transform = "translateX(0px)"
        intro4.style.transform = "translateX(0px)"
    }
}

//网页内容加载完成时回到顶部
// window.onload = function () {
//    setTimeout(function() {
//        window.scrollTo(0,0);
//    }, 20);
// }