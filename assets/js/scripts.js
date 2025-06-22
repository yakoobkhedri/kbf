// menu


let tabsMenu = Array.from(document.querySelectorAll('.tabs'));
let tabsMenu2 = Array.from(document.querySelectorAll('.tabs2'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let tabContent2 = Array.from(document.querySelectorAll('.tabContent2 > div'));

tabsMenu.forEach((item) => {
    item.addEventListener('mouseenter', function () {
        tabsMenu.forEach((items) => { items.classList.remove('active') });
        tabContent2.forEach((items) => { items.classList.remove('active') });
        item.classList.add('active');
        let tabId = item.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.classList.add('active');
            } else {
              content.classList.remove('active');
            }
        })
    })
})
tabsMenu2.forEach((item) => {
  item.addEventListener('mouseenter', function () {
      tabsMenu2.forEach((items) => { items.classList.remove('active') });
      item.classList.add('active');
      let tabId = item.dataset.id;
      tabContent2.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
      })
  })
})


// input number

let increment = Array.from(document.getElementsByClassName('increment'));
let decrement = Array.from(document.getElementsByClassName('decrement'));

increment.forEach((item) => {
  item.addEventListener('click', function () {
    item.previousElementSibling.value++;
  })
});
decrement.forEach((item) => {
  item.addEventListener('click', function () {
    if (item.nextElementSibling.value > 1) {
      item.nextElementSibling.value--;
    }
  })
});
// accardion

let filterBtn=Array.from(document.getElementsByClassName('filterBtn'));
let filterContent=Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item)=>{
    item.addEventListener('click',function () {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
    })
})


// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));
let accordionBtn2 = Array.from(document.getElementsByClassName('accordionBtn2'));
let accordionBtn3 = Array.from(document.getElementsByClassName('accordionBtn3'));
let filterBox = Array.from(document.getElementsByClassName('filterBox'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg:last-child').classList.toggle('active');
  })
})
accordionBtn2.forEach((item)=>{
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg:last-child').classList.toggle('active');
  })
})
accordionBtn3.forEach((item)=>{
  item.addEventListener('click', function () {
    item.parentElement.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg:last-child').classList.toggle('active');
  })
})