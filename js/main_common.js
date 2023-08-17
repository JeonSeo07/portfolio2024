window.addEventListener('load',()=>{
//main_common.js

const contents = document.querySelectorAll('#container > div');
const sections = document.querySelectorAll('#container > div > section');
const lis = document.querySelectorAll('aside > .quick > li:not(:last-of-type)');
const lisLast = document.querySelector('aside > .quick > li:last-of-type');

// 윈도우 높이값을 가져와서 
// #container > div 높이값으로 지정
// 윈도우 resize가 되도 동일하게 적용

let devHeight = window.innerHeight;


window.addEventListener('resize',()=>{
  devHeight = window.innerHeight;
});

for(var i=0; i<contents.length; i++){
  contents[i].style.height = `${devHeight}px`;
}


// .quick > li를 클릭할때 스크롤이 content 높이 값만큼 움직이게 li.on 붙여라

for(let i=0; i<lis.length; i++){
  lis[i].addEventListener('click',(e)=>{
    e.preventDefault();

    lisAni(lis, i);
    scrollAni(i*devHeight);
  });
}

//마우스휠을 움직일 때 한 페이지씩 움직임

for(let i=0; i<contents.length; i++){
  contents[i].addEventListener('wheel',(e)=>{
    if(e.deltaY < 0){
      //scroll up

      let prev = e.currentTarget.previousElementSibling.offsetTop;

      scrollAni(prev);
      lisAni(lis, i-1);

    }else if(e.deltaY > 0){
      //scroll down

      let next = e.currentTarget.nextElementSibling.offsetTop;

      scrollAni(next);
      lisAni(lis, i+1);
    }
  });

}

// btn_down
const btnDown = document.querySelector('.btn_down');

function downWhite(Number){
  if(sections[Number].classList.contains('white')){
    btnDown.classList.add('on');
  }else{
    btnDown.classList.remove('on');
  }
}

btnDown.addEventListener('click',(e)=>{
  e.preventDefault();

  window.scroll({
    top: sectionsLast*devHeight,
    left: 0,
    behavior : 'smooth'
   });

   sections[sectionsLast].classList.add('on');
   quickMenuAll.classList.add('close');

   if(sections[sectionsLast].classList.contains('on')){
    btnDown.classList.add('ab');
   }else{
    btnDown.classList.remove('ab');
   }
});

// sections mouseover
for(let i=0; i<sections.length; i++){
  sections[i].addEventListener('mouseover',()=>{

      sections.forEach(item=>{
        item.classList.remove('on');
      });

      sections[i].classList.add('on');

      downWhite(i);
      lisAni(lis, i);
      lisLastNum(i);


      if(sections[0].classList.contains('on')){
        headerTop.classList.remove('on');
        quickMenuAll.classList.remove('close');
        btnDown.classList.remove('ab');
      }else if(sections[sectionsLast].classList.contains('on')){
        headerTop.classList.add('on');
        quickMenuAll.classList.add('close');
        btnDown.classList.add('ab');
      }else{
        headerTop.classList.add('on');
        quickMenuAll.classList.remove('close');
        btnDown.classList.remove('ab');
      }

      if(sections[i].classList.contains('white')){
        headerBottomWhite.classList.add('white');
        headerTopWhite.classList.add('white');
        quickMenuAll.classList.add('white');
        document.querySelector('.header_top > .header_inner > h1 > a > img').src='./images/logo_black.png';
        mobBtn.classList.add('white');
      }else{
        headerBottomWhite.classList.remove('white');
        headerTopWhite.classList.remove('white');
        quickMenuAll.classList.remove('white');
        document.querySelector('.header_top > .header_inner > h1 > a > img').src='./images/logo_white.png';
        mobBtn.classList.remove('white');
      }
    
  
  });
}

// scrollAni
const headerTop = document.querySelector('.header_top');
const quickMenuAll = document.querySelector('.quickMenu');
const menuAll = document.querySelectorAll('.menuBtn > li');
const produce = document.querySelectorAll('section.produce');
const intro = document.querySelectorAll('section > div.intro');


let sectionsLast = sections.length -1

function scrollAni(location){
  window.scroll({
    top: location,
    left: 0,
    behavior: 'smooth'
  });
  

  for(let i=0; i<sections.length; i++){
    if(location >= i*devHeight && location < (i+1)*devHeight){
      sections.forEach(item=>{
        item.classList.remove('on');
      });

      sections[i].classList.add('on');

      downWhite(i);

      
      lisLastNum(i);


      if(sections[0].classList.contains('on')){
        headerTop.classList.remove('on');
        quickMenuAll.classList.remove('close');
        btnDown.classList.remove('ab');
      }else if(sections[sectionsLast].classList.contains('on')){
        headerTop.classList.add('on');
        quickMenuAll.classList.add('close');
        btnDown.classList.add('ab');
      }else{
        headerTop.classList.add('on');
        quickMenuAll.classList.remove('close');
        btnDown.classList.remove('ab');
      }

      if(sections[i].classList.contains('white')){
        headerBottomWhite.classList.add('white');
        headerTopWhite.classList.add('white');
        quickMenuAll.classList.add('white');
        document.querySelector('.header_top > .header_inner > h1 > a > img').src='./images/logo_black.png';
        mobBtn.classList.add('white');
      }else{
        headerBottomWhite.classList.remove('white');
        headerTopWhite.classList.remove('white');
        quickMenuAll.classList.remove('white');
        document.querySelector('.header_top > .header_inner > h1 > a > img').src='./images/logo_white.png';
        mobBtn.classList.remove('white');
      }
    }


  }
}


// lisAni
function lisAni(className, value){
  className.forEach(item=>{
    item.classList.remove('on');
  });

  className[value].classList.add('on');

  if(sections[value].classList.contains('white')){
    className.forEach(item=>{
      item.classList.remove('white');
    });
  
    className[value].classList.add('white');
  }else{
    className.forEach(item=>{
      item.classList.remove('white');
    });
  }
}


//content1 > section은 0.5초 후에 .on이 붙어라

let firstSection = setTimeout(()=>{sections[0].classList.add('on');}, 500);



// header
const headerBtn = document.querySelectorAll('ul.menuBtn > li')
const headerBottomWhite = document.querySelector('.header_bottom');
const headerTopWhite = document.querySelector('.header_top');

const content2Btn = document.querySelector(".content2Btn");
const content3Btn = document.querySelector(".content3Btn");
const content6Btn = document.querySelector(".content6Btn");
const content7Btn = document.querySelector(".content7Btn");
const content9Btn = document.querySelector(".content9Btn");
const content10Btn = document.querySelector(".content10Btn");



for(var i=0; i<headerBtn.length; i++){
  headerBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();

    let className = e.currentTarget.getAttribute("class");
    console.log(className);

    function contentClass(location,Name){

      window.scroll({
        top: location,
        left: 0,
        behavior: 'smooth'
      });
    
      if(location >= Name*devHeight && location < (Name+1)*devHeight){
        sections.forEach(item=>{
                item.classList.remove('on');
              });
        
        sections[Name].classList.add('on');
    
        if(sections[0].classList.contains('on')){
          headerTop.classList.remove('on');
          quickMenuAll.classList.remove('close');
          btnDown.classList.remove('ab');
        }else if(sections[sectionsLast].classList.contains('on')){
          headerTop.classList.add('on');
          quickMenuAll.classList.add('close');
          btnDown.classList.add('ab');
        }else{
          headerTop.classList.add('on');
          quickMenuAll.classList.remove('close');
          btnDown.classList.remove('ab');
        }
      }
    }

    switch(className){
      case "content2Btn":
        contentClass(1*devHeight,1);
        lisAni(lis, 1);
        lisLastNum(1);
      break;

      case "content3Btn":
        contentClass(2*devHeight,2);
        lisAni(lis, 2);
        lisLastNum(2);
      break;

      case "content6Btn":
        contentClass(5*devHeight,5);
        lisAni(lis, 5);
        lisLastNum(5);
      break;

      case "content7Btn":
        contentClass(6*devHeight,6);
        lisAni(lis, 6);
        lisLastNum(6);
      break;

      case "content9Btn":
        contentClass(8*devHeight,8);
        lisAni(lis, 8);
        lisLastNum(8);
      break;

      case "content10Btn":
        contentClass(9*devHeight,9);
        lisAni(lis, 9);
        lisLastNum(9);
      break;
    }

  });
}

function lisLastNum(num){

  if(num >= 10){
    lisLast.innerHTML = `<p><span>${num+1} /</span><span>${sections.length}</span></p>`;
  }else{
    lisLast.innerHTML = `<p><span>0${num+1} /</span><span>${sections.length}</span></p>`;
  }
}


// footer 
const siteMapBtn = document.querySelector('#footer > .footer_inner > ul > li > a');

siteMapBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  e.currentTarget.parentElement.classList.toggle('on');

  window.addEventListener('wheel',()=>{
    siteMapBtn.parentElement.classList.remove('on'); 
    btnDown.style.display = 'block';
  });

  if(siteMapBtn.parentElement.classList.contains('on')){
    btnDown.style.display = 'none';
   }else{
    btnDown.style.display = 'block';
   }
});

const siteMapMenu = document.querySelectorAll('ul.sitemap > li > ul a');

for(let i=0; i<siteMapMenu.length; i++){
  siteMapMenu[i].addEventListener('click',(e)=>{
    e.preventDefault();


    lisAni(lis, i);
    scrollAni(i*devHeight);

  });
}



// mob_header

const mobBtn = document.querySelector('.mobBtn');
const mobHeader = document.querySelector('.mob_header');


mobBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  e.currentTarget.classList.toggle('on');
  mobHeader.classList.toggle('on');

});




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
  let orbitImg = document.querySelector(".orbit_svg");

  cloudImg1.style.left = + posX + 'px';
  cloudImg2.style.left = - posX + 'px';

  starImg1.style.left = + posX + 'px';
  starImg1.style.bottom = - posY + 'px';
  starImg2.style.left = + posX + 'px';
  starImg2.style.bottom = + posY + 'px';
  starImg3.style.left = - posX + 'px';
  starImg3.style.bottom = - posY + 'px';

  personImg1.style.left = -20 - posX + 'px';

  orbitImg.style.left = -20 - posX*3 + 'px';
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

let shouldStopPropagation = true;

const parentScrollHandler = (e) => {
  if (shouldStopPropagation) {
    e.stopPropagation();
  }
};

const childScrollHandlers = [];

for(var i=0; i < illustBtn.length; i++){
  illustBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();

    body.classList.add("on");
    mobBg.classList.add("on");
    originalWrap.classList.add("on");
    resetBtn2.classList.add("on");

    shouldStopPropagation = true;

    originalWrap.parentElement.addEventListener('wheel', parentScrollHandler);
    
    
    for (let j = 0; j < originalAll.length; j++) {
        shouldStopPropagation = true;

        const childScrollHandler = (e) => {
          if (shouldStopPropagation) {
            e.stopPropagation();
          }
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

  shouldStopPropagation = false;


  originalWrap.parentElement.removeEventListener('wheel', parentScrollHandler);

  for (let j = 0; j < originalAll.length; j++) {
    const childScrollHandler = (e) => {
      e.stopPropagation();
    };
      originalAll[j].removeEventListener('wheel', childScrollHandler[j]);
  }
    

});















});