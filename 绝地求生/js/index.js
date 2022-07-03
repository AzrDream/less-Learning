window.onload = function () {
    // 1.拿到需要操作的元素
    let oToolbar = document.querySelector(".toolbar");
    let oNav = document.querySelector(".nav");
    let oMenu = document.querySelector("#myMenu");
    let oMenuUp = document.querySelector(".menu-up");
    let oMenuDown = document.querySelector(".menu-down");
    let oTips = document.querySelector(".tips");

    new fullpage('#fullpage',{
        verticalCentered: false,
        sectionsColor: ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000'],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        menu: '#myMenu',
        onLeave: function (origin, destination, direction) {
            if(destination.isFirst){
                // 是第一屏
                oToolbar.style.display = "block";
                oNav.style.top = "42px";
                oMenu.style.display = "none";
            }else{
                // 不是第一屏
                oToolbar.style.display = "none";
                oNav.style.top = "0px";
                oMenu.style.display = "block";
            }
            if(destination.isLast){
                // 最后一屏
                oTips.style.display = "none";
            }else{
                // 不是最后一屏
                oTips.style.display = "block";
            }
        }
    })
};
