


const button = document.querySelector('#submit')

const addLoading = () => {
    button.innerHTML= '<img src="./images/loading.png" class="loading">'
}

const removeLoading = () => {
    button.innerHTML= 'Enviar'
}

const handleSubmit = (event) => {
    event.preventDefault()
    addLoading()

    const NOME = document.querySelector('#name').value
    const EMAIL = document.querySelector('#email').value 

    fetch('https://api.sheetmonkey.io/form/pup41dGLzs1hbkbbYqbpUT', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({NOME, EMAIL}),
    }).then(() => removeLoading())

}

document.querySelector('form').addEventListener('submit', handleSubmit)