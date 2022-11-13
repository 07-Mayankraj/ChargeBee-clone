// login and signup functionality
let loginbtn = document.querySelector('.formbtn')
let userArr = JSON.parse(localStorage.getItem('user-details'))||[]
loginbtn.addEventListener('click',()=>{
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    if(email!==userArr[0]){
        alert('😟 User Not found')
    }
    else if(pass!==userArr[1]){
        alert('❌ Wrong password')
    }else {
        alert('✔ Logged In success 😊 ');
    window.location.href='index.html';
    }
    console.log(userArr);
})

document.querySelector('.nav-logo').addEventListener('click', () => window.location.href = 'index.html')