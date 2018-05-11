document.getElementById('btn-get').addEventListener('click', getAjax);

function getAjax() {

const xhr = new XMLHttpRequest();

console.log(xhr);

xhr.onload = () => {

if (xhr.status === 200){

    document.getElementById('response').textContent = xhr.responseText;
}

}

xhr.open('GET','text.txt',true);

xhr.send();

}

document.getElementById('btn-json').addEventListener('click',getJson);

function getJson() {

const xhr = new XMLHttpRequest();

xhr.onload = function(){


    if(this.status === 200){

const res = JSON.parse(this.responseText);

console.log(res);

       // document.querySelector('.response').textContent = res;
    }
}
}