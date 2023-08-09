//main.js
// main_page 배경 마우스따라 움직임

const body = document.querySelector('body');
body.addEventListener('mousemove',(e)=>{
  let posX = e.pageX/150;
  let posY = e.pageY/250;
  // console.log(posY);

  let cloudImg1 = document.querySelector(".cloud_img1");
  let cloudImg2 = document.querySelector(".cloud_img2");
  let starImg1 = document.querySelector(".star_img1");
  let starImg2 = document.querySelector(".star_img2");
  let starImg3 = document.querySelector(".star_img3");
  let personImg1 = document.querySelector(".person_img1");
  let orbitImg = document.querySelector(".orbit_img");

  cloudImg1.style.left = + posX + 'px';
  cloudImg2.style.left = - posX + 'px';

  starImg1.style.left = + posX + 'px';
  starImg1.style.bottom = - posY + 'px';
  starImg2.style.left = + posX + 'px';
  starImg2.style.bottom = + posY + 'px';
  starImg3.style.left = - posX + 'px';
  starImg3.style.bottom = - posY + 'px';

  personImg1.style.left = -20 - posX + 'px';

  orbitImg.style.left = 20 - posX*3 + 'px';
  orbitImg.style.bottom = - posY*5 + 'px';

});


// // header
// const headerBtn = document.querySelectorAll('.header_bottom > .header_inner > nav > ul > li')
// const headerWhite = document.querySelector('.header_bottom');

// const content2Btn = document.querySelectorAll(".content2Btn");
// const content3Btn = document.querySelectorAll(".content3Btn");
// const content6Btn = document.querySelectorAll(".content6Btn");
// const content7Btn = document.querySelectorAll(".content7Btn");
// const content8Btn = document.querySelectorAll(".content8Btn");
// const content9Btn = document.querySelectorAll(".content9Btn");


// for(var i=0; i<headerBtn.length; i++){
//   headerBtn[i].addEventListener('click',(e)=>{
//     e.preventDefault();

//     let className = e.currentTarget.getAttribute("class");
//     console.log(className);

//     function contentClass(location,Name){

//       window.scroll({
//         top: location,
//         left: 0,
//         behavior: 'smooth'
//       });

//       if(location >= Name*devHeight && location < (Name+1)*devHeight){
//         sections.forEach(item=>{
//                 item.classList.remove('on');
//               });
        
//         sections[Name].classList.add('on');

//         if(sections[0].classList.contains('on')){
//           headerTop.classList.remove('on');
//           quickMenuAll.classList.remove('close');
//           btnDown.classList.remove('ab');
//         }else if(sections[sectionsLast].classList.contains('on')){
//           headerTop.classList.add('on');
//           quickMenuAll.classList.add('close');
//           btnDown.classList.add('ab');
//         }else{
//           headerTop.classList.add('on');
//           quickMenuAll.classList.remove('close');
//           btnDown.classList.remove('ab');
//         }
//       }
//     }

//     switch(className){
//       case "content2Btn":
//         contentClass(1*devHeight,1);
//         lisAni(lis, 1);
//         lisLastNum(1);
//       break;

//       case "content3Btn":
//         contentClass(2*devHeight,2);
//         lisAni(lis, 2);
//         lisLastNum(2);
//       break;

//       case "content6Btn":
//         contentClass(5*devHeight,5);
//         lisAni(lis, 5);
//         lisLastNum(5);
//       break;

//       case "content7Btn":
//         contentClass(6*devHeight,6);
//         lisAni(lis, 6);
//         lisLastNum(6);
//       break;

//       case "content8Btn":
//         contentClass(7*devHeight,7);
//         lisAni(lis, 7);
//         lisLastNum(7);
//       break;

//       case "content9Btn":
//         contentClass(8*devHeight,8);
//         lisAni(lis, 8);
//         lisLastNum(8);
//       break;
//     }

//     function lisLastNum(num){
//       lisLast.innerHTML = `<p><span>0${num+1} /</span><span>0${sections.length}</span></p>`;
//     }

//   });
// }

// function openMenu(num){
//   location.href=`index.html#content${num}`;

//   if(onclick = true){
//     sections[num].classList.add('on');

//     headerTop.classList.add('on');
//     quickMenuAll.classList.remove('close');
//     btnDown.classList.remove('ab');
//   }
// }


// 웹 접근성 자세히 보기, 웹 표준 자세히 보기
const mobBg = document.querySelector("div.bg");
const accBtn = document.querySelector('a.accessibilityBtn');
const accessibility = document.querySelector('div.web_accessibility');
const stanBtn = document.querySelector('a.standardsBtn');
const standards = document.querySelector('div.web_standards');
const resetBtn = document.querySelectorAll('a.resetBtn');

accBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  body.classList.add("on");
  mobBg.classList.add("on");
  accessibility.classList.add("on");
});

stanBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  body.classList.add("on");
  mobBg.classList.add("on");
  standards.classList.add("on");
});

for(var i=0; i<resetBtn.length; i++){
  resetBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();
    body.classList.remove("on");
    mobBg.classList.remove("on");
    accessibility.classList.remove("on");
    standards.classList.remove("on");

    scrollAni(2*devHeight);
    lisAni(lis, 2);
  });
}


// content8 -illust
const illustWrap = document.querySelector("div.illust_all > ul");
const illustItem = document.querySelectorAll("div.illust_all > ul > li");
const bestPrev = document.querySelector("div.illust_arrow > a.btn_prev");
const bestNext = document.querySelector("div.illust_arrow > a.btn_next");


let illustNum = 0;
let illustCount = illustItem.length;
let illustLast = illustItem.length-1;

let illustWrapWidth = 560;
let illustWrapMargin = 40;

illustWrap.style.width = (illustWrapWidth + illustWrapMargin)*illustCount - illustWrapMargin + 'px';

function illustSlide(num){
  illustWrap.style.transform = `translateX(${(-num*570)+320}px)`;
  illustWrap.style.transition = 'transform 0.3s linear 0.1s';
  illustNum = num;
}

// illustItem.forEach(item =>{
//   item.classList.remove("on");
// });

// illustItem[0].classList.add("on");




bestNext.addEventListener('click',(e)=>{
  e.preventDefault();

  if(illustNum < illustCount-1){
    illustSlide(illustNum+1);
    console.log(illustNum+1);
  }else{
    illustSlide(illustNum);
  }

  illustItem.forEach(item =>{
    item.classList.remove("on");
  });

  illustItem[illustNum].classList.add("on");
  
  if(illustItem[illustLast].classList.contains("on")){
    bestNext.classList.add('on');
  }else{
    bestPrev.classList.remove('on');
  }

});

bestPrev.addEventListener('click',(e)=>{
  e.preventDefault();

  if(illustNum <= 0){
    illustSlide(illustNum);
  }else{
    illustSlide(illustNum-1);
    console.log(illustNum-1);
  }

  illustItem.forEach(item =>{
    item.classList.remove("on");
  });

  illustItem[illustNum].classList.add("on");

  bestNext.classList.remove('on');
if(illustItem[0].classList.contains("on")){
  bestPrev.classList.add('on');
}else{
  bestNext.classList.remove('on');
}
  
});



// content8 -illust - 상세페이지
const originalWrap = document.querySelector('.original_img')
const originalAll = document.querySelectorAll('.original_img > div')
const resetBtn2 = document.querySelector('.resetBtn2');
const illustBtn = document.querySelectorAll("div.illust_all > ul > li > a");


const illust1 = document.querySelectorAll(".illust1");
const illust2 = document.querySelectorAll(".illust2");
const illust3 = document.querySelectorAll(".illust3");
const illust4 = document.querySelectorAll(".illust4");
const illust5 = document.querySelectorAll(".illust5");
const illust6 = document.querySelectorAll(".illust6");
const illust7 = document.querySelectorAll(".illust7");
const illust8 = document.querySelectorAll(".illust8");
const illust9 = document.querySelectorAll(".illust9");


for(var i=0; i < illustBtn.length; i++){
  illustBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();

    body.classList.add("on");
    mobBg.classList.add("on");
    originalWrap.classList.add("on");
    resetBtn2.classList.add("on");

    originalAll.forEach((item)=>{
      item.style.display = "none";
    });

    let className = e.currentTarget.getAttribute("class");
    console.log(className);

    function illustClass(Name){
      Name.forEach((item)=>{
        item.style.display = "block";
      });
    }

    switch(className){
      case "illust1":
        illustClass(illust1);
      break;

      case "illust2":
        illustClass(illust2);
      break;

      case "illust3":
        illustClass(illust3);
      break;

      case "illust4":
        illustClass(illust4);
      break;

      case "illust5":
        illustClass(illust5);
      break;

      case "illust6":
        illustClass(illust6);
      break;

      case "illust7":
        illustClass(illust7);
      break;

      case "illust8":
        illustClass(illust8);
      break;

      case "illust9":
        illustClass(illust9);
      break;
    }
  });
}

resetBtn2.addEventListener('click',(e)=>{
  e.preventDefault();

  body.classList.remove("on");
  mobBg.classList.remove("on");
  originalWrap.classList.remove("on");
  resetBtn2.classList.remove("on");
  scrollAni(7*devHeight);
  lisAni(lis, 7);
});
