function log() {
    window.open("logIn.html", "", "top=500,left=500,width=920px,height=800px");
}

function sing() {
    window.open("SingUp.html", "", "top=500,left=500,width=920px,height=800px")
}
let a = true;

function show_hide() {
    if (a) {
        document.getElementById("maps").style.display = "inline"
        return a = false
    }
    if (!a) {
        document.getElementById("maps").style.display = "none"
        return a = true
    }
}


/*********************************** */
let mode = window.localStorage.getItem('mode')
let myModeDark = document.getElementById('dark')
let myModeLight = document.getElementById('light')
let myModeAuto = document.getElementById('auto')
let myStyle = document.getElementsByTagName('link')[1]

if (mode == 'dark') {
    funcModeDark()
} else if (mode == 'light') {
    funcModeLight()
} else {
    funcModeAuto()
}

function funcModeDark() {
    myStyle.setAttribute('href', '../css/pageStyleDark.css')
    window.localStorage.setItem('mode', 'dark')

}

function funcModeLight() {
    myStyle.setAttribute('href', '../css/pageStyle.css')
    window.localStorage.setItem('mode', 'light')
}

function funcModeAuto() {
    const time = new Date();
    if (time.getHours() >= 6 && time.getHours() <= 20) {
        funcModeLight()
    } else {
        funcModeDark()
    }
    window.localStorage.setItem('mode', 'auto')
}


myModeAuto.onclick = () => funcModeAuto()
myModeDark.onclick = () => funcModeDark()
myModeLight.onclick = () => funcModeLight()
/************************************* */

/***********lang******************** */
var lang = window.localStorage.getItem('lang')
var langFR = document.getElementById('fr');
var langEN = document.getElementById('en');
var langAR = document.getElementById('ar');


function fr() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let msgContact = document.querySelector('.p1')
    let mydSectionDiv = document.getElementById('divcontainner')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')

    myNavBar[1].textContent = 'Produit';
    myNavBar[2].textContent = 'Contact';
    myNavBar[3].textContent = 'Support';
    myNavBar[4].textContent = 'Propos';
    document.querySelector('.dropbtn').textContent = 'La langue ???';
    langFR.textContent = 'Fran??ais';
    langEN.textContent = 'L\'Anglais';
    langAR.textContent = 'Arabe';
    myMode.textContent = 'Mode ???'
    myModeDark.textContent = 'Mode nuit'
    myModeLight.textContent = 'Mode normal'
    myModeAuto.textContent = 'Mode automatique'

    let myAddToCart = document.querySelectorAll('section button')
    let myVM = document.querySelectorAll('.article .border a')
    let contLick = document.querySelector('.h2center h2')

    contLick.textContent = 'Contenu susceptible de vous plaire'
    document.getElementById('cart').textContent = 'Panier'
    for (i of myAddToCart) {
        i.textContent = 'Ajouter au panier'
    }
    for (y of myVM) {
        y.textContent = 'Voir plus'
    }


    msgContact.textContent = 'Pour plus d\'informations, contactez nous'
    /*********content********* */

    /***************** */

    window.localStorage.setItem('lang', 'fr') // change lang
    lang = window.localStorage.getItem('lang') // update variable lang
}

function en() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let msgContact = document.querySelector('.p1')
    let mydSectionDiv = document.getElementById('divcontainner')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')

    myNavBar[1].textContent = 'Products';
    myNavBar[2].textContent = 'Contacts';
    myNavBar[3].textContent = 'Support';
    myNavBar[4].textContent = 'About';
    document.querySelector('.dropbtn').textContent = 'Language ???';
    langFR.textContent = 'French';
    langEN.textContent = 'English';
    langAR.textContent = 'Arabic';
    myMode.textContent = 'Mode ???';
    myModeDark.textContent = 'Night mode';
    myModeLight.textContent = 'Normal mode';
    myModeAuto.textContent = 'Auto mode';

    let myAddToCart = document.querySelectorAll('section button')
    let myVM = document.querySelectorAll('.article .border a')
    let contLick = document.querySelector('.h2center h2')
    contLick.textContent = 'Content you may like'
    document.getElementById('cart').textContent = 'Cart'
    for (i of myAddToCart) {
        i.textContent = 'Add to cart'
    }
    for (y of myVM) {
        y.textContent = 'View more'
    }

    msgContact.textContent = 'For more information, please contact us'
    /*********content********* */

    /***************** */

    window.localStorage.setItem('lang', 'en') // change lang
    lang = window.localStorage.getItem('lang') // update variable lang
}

function ar() {
    let myNavBar = document.links
    let myDiv1 = document.getElementsByClassName('header')[0]
    let msgContact = document.querySelector('.p1')
    let mydSectionDiv = document.getElementById('divcontainner')
    let myMode = document.getElementsByClassName('dropbtn')[1]
    let myModeDark = document.getElementById('dark')
    let myModeLight = document.getElementById('light')
    let myModeAuto = document.getElementById('auto')

    myNavBar[1].textContent = '????????????????';
    myNavBar[2].textContent = '??????????????';
    myNavBar[3].textContent = '??????????';
    myNavBar[4].textContent = '??????';
    document.querySelector('.dropbtn').textContent = '?????????? ???';
    langFR.textContent = '????????????????';
    langEN.textContent = '????????????????????';
    langAR.textContent = '??????????????';
    myMode.textContent = '?????????? ???'
    myModeDark.textContent = '?????????? ????????????'
    myModeLight.textContent = '?????????? ????????????'
    myModeAuto.textContent = '?????????? ??????????????????'
    msgContact.textContent = '???????????? ???? ?????????????????? ???????? ?????????????? ?????? ?????????????? ??????????????';

    let myAddToCart = document.querySelectorAll('section button')
    let myVM = document.querySelectorAll('.article .border a')
    let contLick = document.querySelector('.h2center h2')
    contLick.textContent = '?????????? ???? ??????????'
    document.getElementById('cart').textContent = '??????????'
    for (i of myAddToCart) {
        i.textContent = '?????? ??????????'
    }
    for (y of myVM) {
        y.textContent = '???????? ????????????'
    }

    /*********content********* */

    /***************** */

    window.localStorage.setItem('lang', 'ar') // change lang
    lang = window.localStorage.getItem('lang') // update variable lang
}




if (lang == 'fr') {
    fr()
} else if (lang == 'ar') {
    ar()
} else {
    lang = window.localStorage.lang = 'en' // par defaut la lungage est English
}

langEN.onclick = () => {
    if (lang != 'en') {
        en()
    }
}
langFR.onclick = () => {
    if (lang != 'fr') {
        fr()
    }
}
langAR.onclick = () => {
    if (lang != 'ar') {
        ar()
    }
}
/**************************** */


function addToCart(prod, price) {
    if (localStorage.getItem('products') == null || localStorage.getItem('products') == "null") {
        localStorage.setItem('products', '{}')
    }
    let products = JSON.parse(localStorage.getItem('products'))
    if (Object.keys(products).indexOf(prod) != -1){
        products[prod]["quantity"] +=1
    } else {
        products[prod] = {"price": price, "quantity": 1}
    } 
    
    localStorage.setItem('products' ,JSON.stringify(products))
    alert('Product added successfully')
}


/***********cart********** */
if (localStorage.getItem('products') == null || localStorage.getItem('products') == "null") {
    localStorage.setItem('products', '{}')
}
/************************ */