
// adding home link to logo
document.querySelector('.navbar').addEventListener('click', () => window.location.href = 'index.html')

// topsection image slide
let imgArr = [
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/jose-bolanos.webp',
        imga_name: 'Antoine Louiset,CTO  Yousign',
        paratext: 'The subscription management platform that enabled Slidebean to slide into 30+ countries.'
    },
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/antoine-louiset.webp',
        imga_name: 'Antoine Louiset,CTO  Yousign',
        paratext: 'The revenue engine that powered MakeSpace to launch a B2B model overnight.'
    },
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/debbie-barrafato.webp',
        imga_name: 'Rahul Gadndhi,CEO marketplace',
        paratext: 'The infrastructure that allows Rise Vision to ask "What Does This Make Possible?"'
    },
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/paul-kapsner.webp',
        imga_name: 'debbie barfellow,CEO marketplace',
        paratext: 'The infrastructure that allows Rise Vision to ask "What Does This Make Possible?"'
    },
    {
        image: 'https://webstatic.chargebee.com/assets/web/535/images/home/coc/customers/rahul-gandhi.webp',
        imga_name: 'debbie barfellow,CEO sales',
        paratext: 'The billing platform that gives Superfoods the freedom to test, iterate, and roll-back.'
    },
]

let carouselArr = [
 
    "https://webstatic.chargebee.com/assets/web/535/images/footer/calendly.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/okta.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
    "https://webstatic.chargebee.com/assets/web/535/images/footer/calendly.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/okta.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
    "https://webstatic.chargebee.com/assets/web/535/images/footer/calendly.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/okta.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
    "https://webstatic.chargebee.com/assets/web/535/images/footer/calendly.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/okta.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
    "https://webstatic.chargebee.com/assets/web/535/images/footer/calendly.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/okta.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",
"https://webstatic.chargebee.com/assets/web/535/images/footer/getaccept.svg",

]
let j =0;
let carousel = document.querySelector('#testimonial-brands')
let imgnew = document.createElement('img')
    imgnew.setAttribute('src',carouselArr[0])
    let imgnew2 = document.createElement('img')
    imgnew2.setAttribute('src',carouselArr[3])
    let imgnew3 = document.createElement('img')
    imgnew3.setAttribute('src',carouselArr[2])
    carousel.append(imgnew,imgnew2,imgnew3)

    setInterval(()=>{
        if(j===carouselArr.length) j=0;
        let carousel = document.querySelector('#testimonial-brands')
        let imgggtransition =document.querySelector('#testimonial-brands>img')
        let imgnew = document.createElement('img')
        imgnew.className = 'brandcarousoltimedealay';
    imgnew.setAttribute('src',carouselArr[j])
    carousel.append(imgnew)
    
        // carousel.setAttribute('src',carouselArr[j])
      
            j++

},600)

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
    let x = 'labelcustom'+i
    let slidebtn = document.getElementById(x)
    slidebtn.classList.add('sliderlabel')
    setTimeout(()=>{
        slidebtn.classList.remove('sliderlabel')
    },2000)

    i++;

    if (i == 4) i = 0;
}, 2000)


