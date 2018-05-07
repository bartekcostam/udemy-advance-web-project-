


var btn = document.querySelector('.btn');

function onBtnClick(event) {

alert('przycisk klikniety');

console.log('dziala');
btn.removeEventListener('click', onBtnClick);

}

  btn.addEventListener('click', onBtnClick);
  





