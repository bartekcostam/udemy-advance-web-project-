document.querySelector('.btn-json').addEventListener('click',getJson);

function getJson() {

const abc = new XMLHttpRequest();

abc.onload = function(){


    if(this.status === 200){

const res = JSON.parse(this.responseText);

console.log(res);

       // document.querySelector('.response').textContent = res;
    }
}

abc.open('GET', 'users.json', true);
abc.send();
}


  





