let title = document.querySelector("#title");
if (title instanceof HTMLElement) {
    title.innerHTML = "반갑소";
}
let link = document.querySelector("#link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com"; //에러생김
}
let button = document.getElementById("button");
if (button instanceof HTMLButtonElement) {
    button.addEventListener("click", function () {
        console.log("안녕");
        alert("하이");
    });
}
//이미지 버튼클릭시 바뀌는것
let isImg = true;
// let divv = document.getElementById("fidiv");
// let imgg = divv?.querySelector("img") as HTMLImageElement;
let imgg = document.getElementById("imge");
let imgbutton = document.getElementById("imgchange");
if (imgbutton instanceof HTMLButtonElement) {
    imgbutton.addEventListener("click", function () {
        if (isImg === true) {
            imgg.src = "2.png";
            isImg = false;
        }
        else {
            imgg.src = "1.png";
            isImg = true;
        }
    });
}
let nave = document.querySelectorAll(".naver");
nave.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
