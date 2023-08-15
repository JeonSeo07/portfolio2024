// sub2 mob_content3
const con3Btn = document.querySelectorAll('.content3 > section > div > ul > li > h4');


for(var i=0; i<con3Btn.length; i++){
  con3Btn[i].addEventListener('click',(e)=>{
    
    con3Btn.forEach(item=>{
      item.classList.remove('on');
    });

    e.currentTarget.classList.add('on');


    concept.classList.remove('on');
    icon.classList.remove('on');
    color.forEach(item=>{
        item.classList.remove('on');
    });
    typography.classList.remove('on');

    if(con3Btn[0].classList.contains('on')){
        concept.classList.add('on');
        
      }else if(con3Btn[1].classList.contains('on')){
        icon.classList.add('on');
    
      }else if(con3Btn[2].classList.contains('on')){
        color.forEach(item=>{
            item.classList.add('on');
        });
    
      }else if(con3Btn[3].classList.contains('on')){
        typography.classList.add('on');
    
      }
   
  });
}

const concept = document.querySelector('.content3 > section > div > ul > li:first-child > p');
const icon = document.querySelector('.content3 > section > div > ul > li:nth-child(2)');
const color = document.querySelectorAll('.content3 > section > div > ul > li:nth-child(3) > ul > li');
const typography = document.querySelector('.content3 > section > div > ul > li:last-child > dl');

