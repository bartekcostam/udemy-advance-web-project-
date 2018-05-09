document.getElementById('get-btn').addEventListener('click', getAjax);

function getAjax() {

const xhr = new XMLHttpRequest();


xhr.onload = () => {

if (xhr.status === 200){

    document.getElementById('response').textContent = xhr.responseText;
}

}

xhr.open('GET', 'text.txt', true);

}