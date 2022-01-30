// SELECTING FLOOR ELEMENTS

const floor_G = document.querySelector(".on-floor");
const floor1 = document.querySelector(".f1");
const floor2 = document.querySelector(".f2");
const floor3 = document.querySelector(".f3");
const floor4 = document.querySelector(".f4");
const floor5 = document.querySelector(".f5");
const floor6 = document.querySelector(".f6");
const floor7 = document.querySelector(".f7");
const floor8 = document.querySelector(".f8");
const floor9 = document.querySelector(".f9");
const floor10 = document.querySelector(".f10");
// =============================================

// SELECTING BUTTONS ELEMENTS
const groundBtn = document.querySelector(".btn-G");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btn10 = document.querySelector(".btn-10");
// ==================================================

// adding event listener to all the button elements

groundBtn.addEventListener("click", function (e) {
  floor_G.classList.remove("on-floor");
  floor1.classList.remove("on-floor");

  floor2.classList.remove("on-floor");
  floor3.classList.remove("on-floor");
  floor4.classList.remove("on-floor");
  floor5.classList.remove("on-floor");
  floor6.classList.remove("on-floor");
  floor7.classList.remove("on-floor");
  floor8.classList.remove("on-floor");
  floor9.classList.remove("on-floor");
  floor10.classList.remove("on-floor");
  floor_G.classList.add("on-floor");
});

btn1.addEventListener("click", function (e) {
  console.log(e.target.innerText);

  floor_G.classList.remove("on-floor");
  floor2.classList.remove("on-floor");
  floor3.classList.remove("on-floor");
  floor4.classList.remove("on-floor");
  floor5.classList.remove("on-floor");
  floor6.classList.remove("on-floor");
  floor7.classList.remove("on-floor");
  floor8.classList.remove("on-floor");
  floor9.classList.remove("on-floor");
  floor10.classList.remove("on-floor");
  floor1.classList.add("on-floor");
});

btn2.addEventListener("click", function (e) {
  removing2();
});
btn3.addEventListener("click", function (e) {
  removeing3();
});

btn4.addEventListener("click", function (e) {
  removing4();
});
btn5.addEventListener("click", function (e) {
  removing5();
});

btn6.addEventListener("click", function (e) {
  removing6();
});
btn7.addEventListener("click", function (e) {
  removing7();
});
btn8.addEventListener("click", function (e) {
  removing8();
});
btn9.addEventListener("click", function (e) {
  removing9();
});

btn10.addEventListener("click", function (e) {
  removing10();
});

// =================================================
function removing2() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 4000);
  setTimeout('floor1.classList.add("on-floor")', 4010);
  setTimeout('floor1.classList.remove("on-floor")', 5000);
  setTimeout('floor_G.classList.add("on-floor")', 5010);
}
function removeing3() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 3000);
  setTimeout('floor3.classList.add("on-floor")', 3010);
  setTimeout('floor3.classList.remove("on-floor")', 5000);
  setTimeout('floor2.classList.add("on-floor")', 5010);
  setTimeout('floor2.classList.remove("on-floor")', 6000);
  setTimeout('floor1.classList.add("on-floor")', 6010);
  setTimeout('floor1.classList.remove("on-floor")', 7000);
  setTimeout('floor_G.classList.add("on-floor")', 7010);
}
function removing4() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 3000);
  setTimeout('floor3.classList.add("on-floor")', 3010);
  setTimeout('floor3.classList.remove("on-floor")', 4000);
  setTimeout('floor4.classList.add("on-floor")', 4010);
  setTimeout('floor4.classList.remove("on-floor")', 6000);
  setTimeout('floor3.classList.add("on-floor")', 6010);
  setTimeout('floor3.classList.remove("on-floor")', 7000);
  setTimeout('floor2.classList.add("on-floor")', 7010);
  setTimeout('floor2.classList.remove("on-floor")', 8000);
  setTimeout('floor1.classList.add("on-floor")', 8010);
  setTimeout('floor1.classList.remove("on-floor")', 9000);
  setTimeout('floor_G.classList.add("on-floor")', 9010);
}
function removing5() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 3000);
  setTimeout('floor3.classList.add("on-floor")', 3010);
  setTimeout('floor3.classList.remove("on-floor")', 4000);
  setTimeout('floor4.classList.add("on-floor")', 4010);
  setTimeout('floor4.classList.remove("on-floor")', 5000);
  setTimeout('floor5.classList.add("on-floor")', 5010);
  setTimeout('floor5.classList.remove("on-floor")', 7000);
  setTimeout('floor4.classList.add("on-floor")', 7010);
  setTimeout('floor4.classList.remove("on-floor")', 8000);
  setTimeout('floor3.classList.add("on-floor")', 8010);
  setTimeout('floor3.classList.remove("on-floor")', 9000);
  setTimeout('floor2.classList.add("on-floor")', 9010);
  setTimeout('floor2.classList.remove("on-floor")', 10000);
  setTimeout('floor1.classList.add("on-floor")', 10010);
  setTimeout('floor1.classList.remove("on-floor")', 11000);
  setTimeout('floor_G.classList.add("on-floor")', 11010);

}
function removing6() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 3000);
  setTimeout('floor3.classList.add("on-floor")', 3010);
  setTimeout('floor3.classList.remove("on-floor")', 4000);
  setTimeout('floor4.classList.add("on-floor")', 4010);
  setTimeout('floor4.classList.remove("on-floor")', 5000);
  setTimeout('floor5.classList.add("on-floor")', 5010);
  setTimeout('floor5.classList.remove("on-floor")', 6000);
  setTimeout('floor6.classList.add("on-floor")', 6010);
  setTimeout('floor6.classList.remove("on-floor")', 9000);
  setTimeout('floor5.classList.add("on-floor")', 9010);
  setTimeout('floor5.classList.remove("on-floor")', 10000);
  setTimeout('floor4.classList.add("on-floor")', 10010);
  setTimeout('floor4.classList.remove("on-floor")', 11000);
  setTimeout('floor3.classList.add("on-floor")', 11010);
  setTimeout('floor3.classList.remove("on-floor")', 12000);
  setTimeout('floor2.classList.add("on-floor")', 12010);
  setTimeout('floor2.classList.remove("on-floor")', 13000);
  setTimeout('floor1.classList.add("on-floor")', 13010);
  setTimeout('floor1.classList.remove("on-floor")', 14000);
  setTimeout('floor_G.classList.add("on-floor")', 14010);

}
function removing7() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 3000);
  setTimeout('floor3.classList.add("on-floor")', 3010);
  setTimeout('floor3.classList.remove("on-floor")', 4000);
  setTimeout('floor4.classList.add("on-floor")', 4010);
  setTimeout('floor4.classList.remove("on-floor")', 5000);
  setTimeout('floor5.classList.add("on-floor")', 5010);
  setTimeout('floor5.classList.remove("on-floor")', 6000);
  setTimeout('floor6.classList.add("on-floor")', 6010);
  setTimeout('floor6.classList.remove("on-floor")', 7000);
  setTimeout('floor7.classList.add("on-floor")', 7010);
  setTimeout('floor7.classList.remove("on-floor")', 9000);
  setTimeout('floor6.classList.add("on-floor")', 9010);
  setTimeout('floor6.classList.remove("on-floor")', 10000);
  setTimeout('floor5.classList.add("on-floor")', 10010);
  setTimeout('floor5.classList.remove("on-floor")', 11000);
  setTimeout('floor4.classList.add("on-floor")', 11010);
  setTimeout('floor4.classList.remove("on-floor")', 12000);
  setTimeout('floor3.classList.add("on-floor")', 12010);
  setTimeout('floor3.classList.remove("on-floor")', 13000);
  setTimeout('floor2.classList.add("on-floor")', 13010);
  setTimeout('floor2.classList.remove("on-floor")', 14000);
  setTimeout('floor1.classList.add("on-floor")', 14010);
  setTimeout('floor1.classList.remove("on-floor")', 15000);
  setTimeout('floor_G.classList.add("on-floor")', 15010);
}
function removing8() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 3000);
  setTimeout('floor3.classList.add("on-floor")', 3010);
  setTimeout('floor3.classList.remove("on-floor")', 4000);
  setTimeout('floor4.classList.add("on-floor")', 4010);
  setTimeout('floor4.classList.remove("on-floor")', 5000);
  setTimeout('floor5.classList.add("on-floor")', 5010);
  setTimeout('floor5.classList.remove("on-floor")', 6000);
  setTimeout('floor6.classList.add("on-floor")', 6010);
  setTimeout('floor6.classList.remove("on-floor")', 7000);
  setTimeout('floor7.classList.add("on-floor")', 7010);
  setTimeout('floor7.classList.remove("on-floor")', 8000);

  setTimeout('floor8.classList.add("on-floor")', 8010);
  setTimeout('floor8.classList.remove("on-floor")', 10000);

  setTimeout('floor7.classList.add("on-floor")', 10010);
  setTimeout('floor7.classList.remove("on-floor")', 11000);
  setTimeout('floor6.classList.add("on-floor")', 11010);
  setTimeout('floor6.classList.remove("on-floor")', 12000);
  setTimeout('floor5.classList.add("on-floor")', 12010);
  setTimeout('floor5.classList.remove("on-floor")', 13000);
  setTimeout('floor4.classList.add("on-floor")', 13010);
  
  setTimeout('floor4.classList.remove("on-floor")', 14000);
  setTimeout('floor3.classList.add("on-floor")', 14010);

  setTimeout('floor3.classList.remove("on-floor")', 15000);
  setTimeout('floor2.classList.add("on-floor")', 15010);
  setTimeout('floor2.classList.remove("on-floor")', 16000);
  setTimeout('floor1.classList.add("on-floor")', 16010);
  setTimeout('floor1.classList.remove("on-floor")', 17000);
  setTimeout('floor_G.classList.add("on-floor")', 17010);

}
function removing9() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 3000);
  setTimeout('floor3.classList.add("on-floor")', 3010);
  setTimeout('floor3.classList.remove("on-floor")', 4000);
  setTimeout('floor4.classList.add("on-floor")', 4010);
  setTimeout('floor4.classList.remove("on-floor")', 5000);
  setTimeout('floor5.classList.add("on-floor")', 5010);
  setTimeout('floor5.classList.remove("on-floor")', 6000);
  setTimeout('floor6.classList.add("on-floor")', 6010);
  setTimeout('floor6.classList.remove("on-floor")', 7000);
  setTimeout('floor7.classList.add("on-floor")', 7010);
  setTimeout('floor7.classList.remove("on-floor")', 8000);
  setTimeout('floor8.classList.add("on-floor")', 8010);
  setTimeout('floor8.classList.remove("on-floor")', 9000);
  setTimeout('floor9.classList.add("on-floor")', 9010);

  setTimeout('floor9.classList.remove("on-floor")', 11000);
  setTimeout('floor8.classList.add("on-floor")', 11010);
  setTimeout('floor8.classList.remove("on-floor")', 12000);

  setTimeout('floor7.classList.add("on-floor")', 12010);
  setTimeout('floor7.classList.remove("on-floor")', 13000);
  setTimeout('floor6.classList.add("on-floor")', 14010);
  setTimeout('floor6.classList.remove("on-floor")', 15000);
  setTimeout('floor5.classList.add("on-floor")', 15010);
  setTimeout('floor5.classList.remove("on-floor")', 16000);
  setTimeout('floor4.classList.add("on-floor")', 16010);
  
  setTimeout('floor4.classList.remove("on-floor")', 17000);
  setTimeout('floor3.classList.add("on-floor")', 17010);

  setTimeout('floor3.classList.remove("on-floor")', 18000);
  setTimeout('floor2.classList.add("on-floor")', 18010);
  setTimeout('floor2.classList.remove("on-floor")', 19000);
  setTimeout('floor1.classList.add("on-floor")', 19010);
  setTimeout('floor1.classList.remove("on-floor")', 20000);
  setTimeout('floor_G.classList.add("on-floor")', 20010);
}
function removing10() {
  setTimeout('floor_G.classList.remove("on-floor")', 1000);
  setTimeout('floor1.classList.add("on-floor")', 1010);
  setTimeout('floor1.classList.remove("on-floor")', 2000);
  setTimeout('floor2.classList.add("on-floor")', 2010);
  setTimeout('floor2.classList.remove("on-floor")', 3000);
  setTimeout('floor3.classList.add("on-floor")', 3010);
  setTimeout('floor3.classList.remove("on-floor")', 4000);
  setTimeout('floor4.classList.add("on-floor")', 4010);
  setTimeout('floor4.classList.remove("on-floor")', 5000);
  setTimeout('floor5.classList.add("on-floor")', 5010);
  setTimeout('floor5.classList.remove("on-floor")', 6000);
  setTimeout('floor6.classList.add("on-floor")', 6010);
  setTimeout('floor6.classList.remove("on-floor")', 7000);
  setTimeout('floor7.classList.add("on-floor")', 7010);
  setTimeout('floor7.classList.remove("on-floor")', 8000);
  setTimeout('floor8.classList.add("on-floor")', 8010);
  setTimeout('floor8.classList.remove("on-floor")', 9000);
  setTimeout('floor9.classList.add("on-floor")', 9010);

  setTimeout('floor9.classList.remove("on-floor")', 10000);
  setTimeout('floor10.classList.add("on-floor")', 10010);

  setTimeout('floor10.classList.remove("on-floor")', 12000);
  setTimeout('floor9.classList.add("on-floor")', 12010);

  setTimeout('floor9.classList.remove("on-floor")', 13000);
  setTimeout('floor8.classList.add("on-floor")', 13010);
  setTimeout('floor8.classList.remove("on-floor")', 14000);

  setTimeout('floor7.classList.add("on-floor")', 14010);
  setTimeout('floor7.classList.remove("on-floor")', 15000);
  setTimeout('floor6.classList.add("on-floor")', 15010);
  setTimeout('floor6.classList.remove("on-floor")', 16000);
  setTimeout('floor5.classList.add("on-floor")', 16010);
  setTimeout('floor5.classList.remove("on-floor")', 17000);
  setTimeout('floor4.classList.add("on-floor")', 17010);
  
  setTimeout('floor4.classList.remove("on-floor")', 18000);
  setTimeout('floor3.classList.add("on-floor")', 18010);

  setTimeout('floor3.classList.remove("on-floor")', 19000);
  setTimeout('floor2.classList.add("on-floor")', 19010);
  setTimeout('floor2.classList.remove("on-floor")', 20000);
  setTimeout('floor1.classList.add("on-floor")', 20010);
  setTimeout('floor1.classList.remove("on-floor")', 21000);
  setTimeout('floor_G.classList.add("on-floor")', 21010);

}
