
// adding home link to logo
document.querySelector('.navbar').addEventListener('click', () => window.location.href = 'index.html')
// document.querySelector('.sec-sign-btn').addEventListener('click', () => window.location.href = 'signup.html')


// login name change 
let userArr =  JSON.parse(localStorage.getItem('user-details'))
console.log(userArr);
let username = document.querySelector('.login-a').innerText ="Hey, " + userArr[2]
 