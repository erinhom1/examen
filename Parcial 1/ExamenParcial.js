const url = "https://jsonplaceholder.typicode.com/todos"
const readline = require('readline');


//////////////////////////input
function getInput() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Selecciona una opcion: ', (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

//////////////////////Menu
function menu () {
    console.log("\nNFL ToDo's\n")
    console.log("(1) Lista de todos los pendientes (solo IDs)\n")
    console.log("(2) Lista de todos los pendientes (IDs y titles)\n")
    console.log("(3) Lista de todos los pendientes sin resolver (ID y title)\n")
    console.log("(4) Lista de todos los pendientes resueltos (ID y titles)\n")
    console.log("(5) Lista de todos los pendientes (IDs y userID)\n")
    console.log("(6) Lista de todos los pendientes resuletos (IDs y userID)\n")
    console.log("(7) Lista de todos los pendientes sin resolver (IDs y userID)\n")
}

//////////////////Lista de todos los pendientes (solo IDs)
function todos (){
    fetch(url).then(response => response.json())
        .then(response =>{
            console.log("\nLista de todos los pendientes:\n")
            response.forEach(element => {
                console.log("ID: " + element.id+ "\n")
            });
        })
}



//////////////Lista de todos los pendientes (IDs y  titles)

function todosTitulos (){
    fetch(url).then(response => response.json())
        .then(response =>{
        console.log("Lista de todos los pendientes con titulo (IDs + titles):\n")
        response.forEach(element => {
            console.log("ID: " + element.id+ "\nTitulo: " + element.title +"\n")
        });
    })
}


///////////Lista de todos los pendientes sin resolver (ID y titles)

function todosNoResuletos (){
    fetch(url).then(response => response.json())
        .then(response =>{
            console.log("Lista de todos los pendientes sin resolver:\n")
            response.forEach(element => {
            if(element.completed == false ){
                console.log("ID: " + element.id+ "\nTitulo: " + element.title +"\n")
            }
        });
    })
}


//////////////////Lista de todos los pendientes resuletos (ID y titles)
function todosResueltos (){
    fetch(url).then(response => response.json())
        .then(response =>{
            console.log("Lista de todos los pendientes resueltos (ID y titles):\n")
            response.forEach(element => {
            if(element.completed == true ){
                console.log("ID: " + element.id+ "\nTitulo: " + element.title +"\n")
            }
        });
    })

}


/////////////Lista de todos los pendientes (IDs y userID)

function todosUser(){
    fetch(url).then(response => response.json())
        .then(response =>{
            console.log("Lista de todos los pendientes (IDs y userID):\n")
            response.forEach(element => {
                console.log("ID: " + element.id+ "\nUser ID: " + element.userId +"\n")
        });
    })
}


///////////////////////Lista de todos los pendientes resueltos(ID y userID)

function todosResueltosUser(){
    fetch(url).then(response => response.json())
        .then(response =>{
            console.log("Lista de todos los pendientes resueltos(ID y userID):\n")
            response.forEach(element => {
            if(element.completed == true ){
                console.log("ID: " + element.id+ "\nUser ID: " + element.userId +"\n")
            }
        });
    })
}



/////////////////////////Lista de todos los pendientes sin resolver(ID y userID)
 function noResuelto () {
    fetch(url).then(response => response.json())
        .then(response =>{
            console.log("Lista de todos los pendientes sin resolver(ID y userID):\n")
            response.forEach(element => {
            if(element.completed == false ){
                console.log("ID: " + element.id+ "\nUser ID: " + element.userId +"\n")
            }
        });
    })
}

var boot = false

async function main (){
    do{

        menu()

        const resp = parseInt(await getInput());
    
        switch(parseInt(resp)){
    
            case 1:
                todos()
                boot = true
                break;
            
            case 2:
                todosTitulos()
                boot = true
                break;
            case 3:
                todosNoResuletos()
                boot = true
                break;
            case 4:
                todosResueltos()
                boot = true
                break;            
            case 5:
                todosUser()
                boot = true
                break;
            case 6:
                todosResueltosUser()
                boot = true
                break;
            case 7:
                noResuelto()
                boot = true
                break;

            default:
                console.log("\x1b[31m" + "\nRespuesta no valida" + "\x1b[0m" )
                boot = true
                break;
        }
        
    }while(boot)
}

main()