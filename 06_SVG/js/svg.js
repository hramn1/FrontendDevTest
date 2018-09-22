'use strict'
let svgMap = document.querySelectorAll('g .land');
for (let i =0;  i < svgMap.length; i++){
  svgMap[i].addEventListener('mouseover', function(){
    this.classList.add('land--focus')
  })
  svgMap[i].addEventListener('mouseout', function(){
    this.classList.remove('land--focus')
  })
  svgMap[i].addEventListener('click', function(){
    this.classList.add('land--active')
  })
}
