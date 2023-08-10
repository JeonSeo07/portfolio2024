// document.addEventListener("DOMContentLoaded", function(){

//   sections.forEach(item=>{
//     item.classList.remove('on');
//   });

//   lis.forEach(item=>{
//     item.classList.remove('on');
//   });


//   var winY = window.scrollY;
//   const sec1 = document.querySelector('#content2').getBoundingClientRect().y;
//   const sec2 = document.querySelector('#content3').getBoundingClientRect().y;
//   const sec5 = document.querySelector('#content6').getBoundingClientRect().y;
//   const sec6 = document.querySelector('#content7').getBoundingClientRect().y;
//   const sec7 = document.querySelector('#content8').getBoundingClientRect().y;
//   const sec8 = document.querySelector('#content9').getBoundingClientRect().y;

//   console.log(sec6);

//   // let sec6Y = sec6


//   if(winY >= sec1 && winY <= sec2){
//     sections[1].classList.add('on');
//     lisLastNum(1)
//     lisAni(lis, 1);
//   }else if(winY >= sec2){
//     sections[2].classList.add('on');
//     lisLastNum(2)
//     lisAni(lis, 2);
//   }else if(winY >= sec5){
//     sections[5].classList.add('on');
//     lisLastNum(5)
//     lisAni(lis, 5);
//   }else if(winY <= sec6){
//     sections[6].classList.add('on');
//     lisLastNum(6)
//     lisAni(lis, 6);
//   }else if(winY <= sec7){
//     sections[7].classList.add('on');
//     lisLastNum(7)
//     lisAni(lis, 7);
//   }else if(winY <= sec8){
//     sections[8].classList.add('on');
//     lisLastNum(8)
//     lisAni(lis, 8);
//   }

//   headerTop.classList.add('on');
//   quickMenuAll.classList.remove('close');
//   btnDown.classList.remove('ab');

//   function lisLastNum(num){
//     lisLast.innerHTML = `<p><span>0${num+1} /</span><span>0${sections.length}</span></p>`;
//   }
// });



document.addEventListener("unload", function(){

  sections.forEach(item=>{
    item.classList.add('on');
  });

  lis.forEach(item=>{
    item.classList.remove('on');
  });

  headerTop.classList.add('on');
  quickMenuAll.classList.remove('close');
  btnDown.classList.remove('ab');

  // function lisLastNum(num){
  //   lisLast.innerHTML = `<p><span>0${num+1} /</span><span>0${sections.length}</span></p>`;
  // }




});