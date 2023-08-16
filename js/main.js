window.addEventListener('load',()=>{
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

  accessibility.addEventListener('wheel',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
});

stanBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  body.classList.add("on");
  mobBg.classList.add("on");
  standards.classList.add("on");

  standards.addEventListener('wheel',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
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


window.addEventListener('resize',(e)=>{

  e.preventDefault();

  bodyWidth = document.body.clientWidth;
  
  if(bodyWidth < 769){
    let illustNum = 0;
    let illustCount = illustItem.length;
    let illustLast = illustItem.length-1;
    
    let illustWrapWidth = 360;
    let illustWrapMargin = 40;
    
    illustWrap.style.width = (illustWrapWidth + illustWrapMargin)*illustCount - illustWrapMargin + 'px';
    
    function illustSlide(num){
      illustWrap.style.transform = `translateX(${(-num*380)+310}px)`;
      illustWrap.style.transition = 'transform 0.3s linear 0.1s';
      illustNum = num;
    }
    
    
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
        bestNext.classList.remove('on');
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

  }else{
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
  }

  

});


bodyWidth = document.body.clientWidth;
  
  if(bodyWidth < 769){
    let illustNum = 0;
    let illustCount = illustItem.length;
    let illustLast = illustItem.length-1;
    
    let illustWrapWidth = 360;
    let illustWrapMargin = 40;
    
    illustWrap.style.width = (illustWrapWidth + illustWrapMargin)*illustCount - illustWrapMargin + 'px';
    
    function illustSlide(num){
      illustWrap.style.transform = `translateX(${(-num*380)+310}px)`;
      illustWrap.style.transition = 'transform 0.3s linear 0.1s';
      illustNum = num;
    }
    
    
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
        bestNext.classList.remove('on');
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

  }else{
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
  }




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
const illust10 = document.querySelectorAll(".illust10");
const illust11 = document.querySelectorAll(".illust11");
const illust12 = document.querySelectorAll(".illust12");

const parentScrollHandler = (e) => {
  e.stopPropagation();
};

const childScrollHandlers = [];

for(var i=0; i < illustBtn.length; i++){
  illustBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();

    body.classList.add("on");
    mobBg.classList.add("on");
    originalWrap.classList.add("on");
    resetBtn2.classList.add("on");
    
    originalWrap.parentElement.addEventListener('wheel', parentScrollHandler);
    
    
    for (let j = 0; j < originalAll.length; j++) {
        const childScrollHandler = (e) => {
            e.stopPropagation();
        };
        originalAll[j].addEventListener('wheel', childScrollHandler);
        childScrollHandlers.push(childScrollHandler);
    }

    
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

      case "illust10":
        illustClass(illust10);
      break;

      case "illust11":
        illustClass(illust11);
      break;

      case "illust12":
        illustClass(illust12);
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
  scrollAni(8*devHeight);
  lisAni(lis, 8);

  originalWrap.parentElement.removeEventListener('wheel', parentScrollHandler);

  for (let j = 0; j < originalAll.length; j++) {
      originalAll[j].removeEventListener('wheel', childScrollHandlers[j]);
  }
});


});