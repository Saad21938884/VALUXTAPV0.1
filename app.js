// Telegram Mini App

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();


// بيانات المستخدم

let user = tg.initDataUnsafe.user;


if (user) {

    document.getElementById("userid").innerText = user.id;

}


// النقاط (مؤقتاً 0 حتى نربط قاعدة البيانات)

let points = 0;

document.getElementById("points").innerText = points;



// زر المكافأة

const rewardButton = document.querySelector(".reward button");


rewardButton.onclick = () => {

    rewardButton.innerText = "تم الاستلام ✅";

    rewardButton.disabled = true;

};