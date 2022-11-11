document.querySelector('.nav-logo').addEventListener('click', () => window.location.href = 'index.html')
// login and signup functionality
let loginbtn = document.querySelector('.formbtn')
loginbtn.addEventListener('click',()=>{
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    let cpass = document.querySelector('#cpass').value;
    if(pass !== cpass) alert('Password did not matched')
    if(pass == ''||email==''||name==''||cpass=='') alert('Fill details')
    else{
        let userArr =[]
        userArr.push(email,pass,name)
        localStorage.setItem('user-details',JSON.stringify(userArr))
        alert('Account Created redirecting to login page....')
        window.location.href='login.html';
    }
})