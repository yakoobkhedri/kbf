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