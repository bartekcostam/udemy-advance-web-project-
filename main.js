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