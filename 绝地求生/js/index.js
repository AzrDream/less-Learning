window.onload = function () {
    // 1.拿到需要操作的元素
    let oToolbar = document.querySelector(".toolbar");
    let oNav = document.querySelector(".nav");

    new fullpage('#fullpage',{
        verticalCentered: false,
        sectionsColor: ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000'],
        onLeave: function (origin, destination, direction) {
            if(destination.isFirst) {
                // 是第一屏
                oToolbar.style.display = "block";
                oNav.style.top = "42px";
            }else{
                // 不是第一屏
                oToolbar.style.display = "none";
                oNav.style.top = "0px";
            }
        }
    })
};
