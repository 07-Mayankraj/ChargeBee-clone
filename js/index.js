
// adding home link to logo
document.querySelector('.navbar').addEventListener('click', () => window.location.href = 'index.html')
document.querySelector('.sec-buttons').addEventListener('click', () => window.location.href = 'https://www.chargebee.com/schedule-a-demo/?ref=heroCTA')
// document.querySelector('.sec-sign-btn').addEventListener('click', () => window.location.href = 'signup.html')


// topsection image slide
let imgArr = [
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/jose-bolanos.webp',
        imga_name: 'José Bolaños CTO - Slidebean',
        paratext: 'The subscription management platform that enabled Slidebean to slide into 30+ countries.'
    },
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/antoine-louiset.webp',
        imga_name: 'Louiset,CFO Yousign',
        paratext: 'The revenue engine that powered MakeSpace to launch a B2B model overnight.'
    },

    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/paul-kapsner.webp',
        imga_name: 'debbie barfellow,CEO marketplace',
        paratext: 'The infrastructure that allows Rise Vision to ask "What Does This Make Possible?"'
    },
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/debbie-barrafato.webp',
        imga_name: 'ebbie bndhi,CTO Cloud services',
        paratext: 'The infrastructure that allows Rise Vision to ask "What Does This Make Possible?"'
    },
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/rahul-gandhi.webp',
        imga_name: 'debbie,CEO sales',
        paratext: 'The billing platform that gives Superfoods the freedom to test, iterate, and roll-back.'
    },
]


let i = 0
setInterval(() => {


    let imgtag = document.querySelector('.image-slider>img')
    let ptag = document.querySelector('.namesofslider')
    let txt = document.querySelector('.section-1-heading>h1')
    txt.innerText = imgArr[i].paratext
    imgtag.setAttribute('src', imgArr[i].image)
    ptag.innerText = imgArr[i].imga_name;
    // console.log(imgArr[i].image);
    // console.log(imgArr[i].paratext);
    let x = 'labelcustom' + i
    let slidebtn = document.getElementById(x)
    slidebtn.classList.add('sliderlabel')
    setTimeout(() => {
        slidebtn.classList.remove('sliderlabel')
    }, 2000)

    i++;

    if (i == 4) i = 0;
}, 2000)


// login name change 
let userArr =  JSON.parse(localStorage.getItem('user-details'))
console.log(userArr);
let username = document.querySelector('.login-a').innerText = userArr[2]
 