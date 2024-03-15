if (navigator.serviceWorker) {
    //console.log("si es compatible")
    navigator.serviceWorker.register('/sw.js')
}


const url = "https://jsonplaceholder.typicode.com/todos";
const jsonDataElement = document.querySelector('.card-text');

function displayData(dataToShow) {
    jsonDataElement.textContent = dataToShow;
}

//////////////////Lista de todos los pendientes (solo IDs)
function todos (){
    fetch(url)
        .then(response => response.json())
        .then(response =>{
            let dataToShow = "\nLista de todos los pendientes:\n";
            response.forEach(element => {
                dataToShow += "ID: " + element.id + "\n";
            });
            displayData(dataToShow);
        });
}

//////////////Lista de todos los pendientes (IDs y  titles)
function todosTitulos (){
    fetch(url)
        .then(response => response.json())
        .then(response =>{
            let dataToShow = "Lista de todos los pendientes con titulo (IDs + titles):\n";
            response.forEach(element => {
                dataToShow += "ID: " + element.id + "\nTitulo: " + element.title + "\n";
            });
            displayData(dataToShow);
        });
}

///////////Lista de todos los pendientes sin resolver (ID y titles)
function todosNoResuletos (){
    fetch(url)
        .then(response => response.json())
        .then(response =>{
            let dataToShow = "Lista de todos los pendientes sin resolver:\n";
            response.forEach(element => {
                if(element.completed == false ){
                    dataToShow += "ID: " + element.id + "\nTitulo: " + element.title + "\n";
                }
            });
            displayData(dataToShow);
        });
}

//////////////////Lista de todos los pendientes resueltos (ID y titles)
function todosResueltos (){
    fetch(url)
        .then(response => response.json())
        .then(response =>{
            let dataToShow = "Lista de todos los pendientes resueltos (ID y titles):\n";
            response.forEach(element => {
                if(element.completed == true ){
                    dataToShow += "ID: " + element.id + "\nTitulo: " + element.title + "\n";
                }
            });
            displayData(dataToShow);
        });
}

/////////////Lista de todos los pendientes (IDs y userID)
function todosUser(){
    fetch(url)
        .then(response => response.json())
        .then(response =>{
            let dataToShow = "Lista de todos los pendientes (IDs y userID):\n";
            response.forEach(element => {
                dataToShow += "ID: " + element.id + "\nUser ID: " + element.userId + "\n";
            });
            displayData(dataToShow);
        });
}

///////////////////////Lista de todos los pendientes resueltos(ID y userID)
function todosResueltosUser(){
    fetch(url)
        .then(response => response.json())
        .then(response =>{
            let dataToShow = "Lista de todos los pendientes resueltos(ID y userID):\n";
            response.forEach(element => {
                if(element.completed == true ){
                    dataToShow += "ID: " + element.id + "\nUser ID: " + element.userId + "\n";
                }
            });
            displayData(dataToShow);
        });
}

/////////////////////////Lista de todos los pendientes sin resolver(ID y userID)
function noResuelto () {
    fetch(url)
        .then(response => response.json())
        .then(response =>{
            let dataToShow = "Lista de todos los pendientes sin resolver(ID y userID):\n";
            response.forEach(element => {
                if(element.completed == false ){
                    dataToShow += "ID: " + element.id + "\nUser ID: " + element.userId + "\n";
                }
            });
            displayData(dataToShow);
        });
}

// Asigna las funciones a los botones
document.getElementById('IDpendientes').addEventListener('click', todos);
document.getElementById('IDtpendientes').addEventListener('click', todosTitulos);
document.getElementById('IDtsinresueltos').addEventListener('click', todosNoResuletos);
document.getElementById('IDtresueltos').addEventListener('click', todosResueltos);
document.getElementById('IDuseridpendientes').addEventListener('click', todosUser);
document.getElementById('IDuserressueltos').addEventListener('click', todosResueltosUser);
document.getElementById('IDusersinresueltos').addEventListener('click', noResuelto);
