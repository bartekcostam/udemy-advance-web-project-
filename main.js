document.getElementById('btn-get').addEventListener('click', getAjax);

function getAjax() {

    const xhr = new XMLHttpRequest();

    console.log(xhr);

    xhr.onload = () => {

        if (xhr.status === 200) {

            document.getElementById('response').textContent = xhr.responseText;
        }

    }

    xhr.open('GET', 'text.txt', true);

    xhr.send();



}

document.getElementById('clearConsole').addEventListener('click', wykonaj);

function wykonaj() {

console.clear();

}

document.getElementById('addRandomNumbers').addEventListener('click', cos);

function cos() {

    console.log(Math.round(Math.random() *100  ));
}



