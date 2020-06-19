// variables

// دکمه باز کردن منوی اصلی در حالت موبایل
const openListMenu = document.getElementById('open_list_menu');
// دکمه بسته شدن منوی اصلی در حالت موبایل
const closeListMenu = document.getElementById('close_list_menu');
// منوی اصلی
const listMenu = document.querySelector('.list_menu');
// دکمه باز شدن زیر منوی موارد بیشتر در حالت موبایل
const moreToggle = document.getElementById('more_toggle');
// دکمه بسته شدن زیر منوی موارد بیشتر در حالت موبایل
const backMoreSub = document.getElementById('back_more_sub');
// زیر منوی موارد بیشتر
const moreSub = document.querySelector('.more_sub')



// listiners

// زمانی که روی کلید تاگل منو در حالت موبایل کلید می شود
openListMenu.addEventListener('click', openList);
// زمانی که روی دکمه بسته شدن منو در حالت باز موبایل است کلید شود
closeListMenu.addEventListener('click', closeList);
// زمانی که روی کلید موارد بیشتر کلید می شود
moreToggle.addEventListener('click', moreSubMenu);
// زمانی که روی کلید بازگشت در زیر منوی موارد بیشتر کلید می شود
backMoreSub.addEventListener('click', backMoreSubMenu)



// function

// تابع باز کردن منو
function openList(e) {
    e.preventDefault();
    listMenu.style.width = '22em';
}

// تابع بستن منو

function closeList(e) {
    e.preventDefault();
    listMenu.style.width = '0';
}

// تابع باز کردن زیر منوی موارد بیشتر
function moreSubMenu(e) {
    e.preventDefault();
    moreSub.style.width = '22em';
}

// تابع بسته کردن زیر منوی موارد بیشتر
function backMoreSubMenu(e) {
    e.preventDefault();
    moreSub.style.width = '0'
}