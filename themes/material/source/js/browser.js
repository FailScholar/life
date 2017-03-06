/*******************************************************************************
 * Copyright (c) 2017 by LiuFa. All rights reserved
 ******************************************************************************/

/**
 * Created by LiuFa on 2017/3/6.
 *
 * DevelopmentApp
 */

// 判断浏览器类型
var userAgent = navigator.userAgent.toLowerCase();
if (isChromium(userAgent)) {
    chromiumDisplay(userAgent);
} else if (isWebkit(userAgent)) {
    webkitDisplay(userAgent);
}

// 判断是否为chrome内核浏览器
function isChromium(userAgent) {
    var chromium = "mozilla/&&applewebkit/&&chrome/&&safari/".split("&&");
    for (var i = 0; i < chromium.length; i++)
        if (userAgent.indexOf(chromium[i]) < 0)
            return false;
    return true;
}

// 判断是否为webkit内核浏览器
function isWebkit(userAgent) {
    return userAgent.indexOf("applewebkit/") >= 0;

}

// 检测到chrome内核判断
function chromiumDisplay(userAgent) {
    var version = userAgent.match(/chrome\/([\d.]+)/)[1];

    var versionNum = version.split(".")[0];

    if (versionNum < 88) {
        document.write("<link rel=\"stylesheet\" href=\"/css/uc.css\">");
        alert('由于您的 Chrome 浏览器内核较旧，而本网站使用了一些新的特性。\n为了您能更好的浏览，推荐使用 Chrome 或 Firefox 浏览器。');
    }

}

// 检测到webkit内核浏览器时判断
function webkitDisplay(userAgent) {
    var version = userAgent.match(/applewebkit\/([\d.]+)/)[1];
    var versionNum = version.split(".")[0];

    if (versionNum < 600) {
        document.write("<link rel=\"stylesheet\" href=\"/css/uc.css\">");
        alert('由于您的 Safari 浏览器内核较旧，而本网站使用了一些新的特性。\n为了您能更好的浏览，推荐使用 Chrome 或 Firefox 浏览器。');
    }
}