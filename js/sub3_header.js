// header
const headerBtn = document.querySelectorAll('.header_bottom > .header_inner > nav > ul > li')
const headerWhite = document.querySelector('.header_bottom');

const content2Btn = document.querySelectorAll(".content2Btn");
const content3Btn = document.querySelectorAll(".content3Btn");
const content6Btn = document.querySelectorAll(".content6Btn");
const content7Btn = document.querySelectorAll(".content7Btn");
const content8Btn = document.querySelectorAll(".content8Btn");
const content9Btn = document.querySelectorAll(".content9Btn");


for(var i=0; i<headerBtn.length; i++){
  headerBtn[i].addEventListener('click',(e)=>{
    e.preventDefault();

    let className = e.currentTarget.getAttribute("class");
    console.log(className);


    switch(className){
      case "content2Btn":
        location.href='index.html#content2';
      break;

      case "content3Btn":
        location.href='index.html#content3';
      break;

      case "content6Btn":
        location.href='index.html#content6';
      break;

      case "content7Btn":
        location.href='index.html#content7';
      break;

      case "content8Btn":
        location.href='index.html#content9';
      break;

      case "content9Btn":
        location.href='index.html#content10';
      break;
    }

  });
}


const lis = document.querySelectorAll('aside > .quick > li:not(:last-of-type)');
const lisLast = document.querySelector('aside > .quick > li:last-of-type');

lis.forEach(item=>{
  item.style.display = 'none';
});

lisLast.style.display = 'none';


//btn_down

const btnDown = document.querySelector('.btn_down');
const sections = document.querySelectorAll('#container > div > section');
const headerTop = document.querySelector('.header_top');
let sectionsLast = sections.length -1

let devHeight = window.innerHeight;
let secHeight = document.querySelector('#container > div.content1').clientHeight;

function downWhite(Number){
  if(sections[Number].classList.contains('white')){
    btnDown.classList.add('on');
  }else{
    btnDown.classList.remove('on');
  }
}


btnDown.addEventListener('click',(e)=>{
  e.preventDefault();

    bodyWidth = document.body.clientWidth;
  
    if(bodyWidth < 769){
      window.scroll({
        top: (sections.length-2)*secHeight,
        left: 0,
        behavior : 'smooth'
      });

      window.addEventListener('scroll',()=>{
        let scrollHt = window.scrollY;
        console.log(scrollHt);
      
          if(scrollHt <= 0){
            headerTop.classList.remove('on');
            btnDown.style.bottom = '63px';
          }else if(scrollHt > (sections.length-3)*secHeight){
            
            headerTop.classList.add('on');
            btnDown.style.bottom = '130px';
          }else{
            headerTop.classList.add('on');
            btnDown.style.bottom = '63px';
          }
        
      });
  
    }else{
      
      window.scroll({
        top: (sectionsLast*2)*devHeight,
        left: 0,
        behavior : 'smooth'
      });

      window.addEventListener('scroll',()=>{
        let scrollHt = window.scrollY;
        console.log(scrollHt);
      
          if(scrollHt <= 0){
            headerTop.classList.remove('on');
            btnDown.style.bottom = '63px';
          }else if(scrollHt >= sectionsLast*devHeight){
            
            headerTop.classList.add('on');
            btnDown.style.bottom = '130px';
          }else{
            headerTop.classList.add('on');
            btnDown.style.bottom = '63px';
          }
        
      
      
      });
    }

});





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

      location.href=`index.html#content${i+1}`;

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