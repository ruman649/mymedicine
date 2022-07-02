let menuBtn = document.querySelector('#btn')
let menuList = document.querySelector('#btn_menu');
let isTrue = false;

function nav_menu() {
    isTrue = !isTrue;
    menuAction();
}
function menuAction() {
    if (isTrue) {
        menuBtn.classList.remove('ti-view-list-alt');
        menuBtn.classList.add('ti-close')
        menuList.classList.remove("-translate-y-72")
    }
    else {
        menuBtn.classList.remove("ti-close");
        menuBtn.classList.add('ti-view-list-alt')
        menuList.classList.add('-translate-y-72')
    }
}