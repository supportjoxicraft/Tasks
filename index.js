function submit() {
    const name = document.getElementById('name');
    const email = document.getElementById('pass');

    fetch('http://localhost:3000/?name='+ name + '&email=' + email)
    .then(res => res.json())
    .then(res => console.log(res))
}