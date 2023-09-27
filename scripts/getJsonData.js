class Router {
    constructor(url = "https://jsonplaceholder.typicode.com/users", method = "GET") {
        this.url = url;
        this.method = method;
    }
    sendRequest (body = null) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            console.log(this.method)
            xhr.open(this.method, this.url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.responseType = 'json';
            xhr.onload = () => {
                if (xhr.status <= 400) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.response)
                }
            }
            xhr.send(JSON.stringify(body))
        })
    }
}

const person = {
    name: "Vladimir",
    age: 65
}

const get = new Router()
const post = new Router('https://jsonplaceholder.typicode.com/users', 'POST')

get.sendRequest().then((response) => {
    console.log(response)
})

post.sendRequest(person).then((response) => {
    console.log(response)
})



