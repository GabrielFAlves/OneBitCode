class User {
    constructor (fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login (email, password) {
        if (email === this.email && password === this.password) {
            console.log("Login bem sucedido!")
        } else {
            console.log("Falha ao logar!")
        }
    }
}

const gabriel = new User("Gabriel Firmamento", "gabrielfir@jojo.todinho.com", "5487000")

gabriel.login("gabrielfir@jojo.todinho.com", "5487000")