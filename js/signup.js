// login and signup functionality
let loginbtn = document.querySelector('.formbtn')
loginbtn.addEventListener('click',()=>{
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#pass').value;
    let cpass = document.querySelector('#cpass').value;
    if(pass !== cpass) alert('Password did not matched')
    let userArr =[]
    userArr.push(email,pass)
    localStorage.setItem('user-details',JSON.stringify(userArr))
    console.log(userArr);
})