let response: string;
let test: string = 'Hello World';
console.log(test)
function hello(text: string): void {
    document.getElementsByTagName('body')[0].innerText = text;
}

function receiver():void {
    let json: JSON
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}