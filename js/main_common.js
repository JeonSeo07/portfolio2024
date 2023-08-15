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

      
      lisLastNum(i)


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



