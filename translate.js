const translate = function () {
    console.log('gonna have to translate');
    
    for (let i = 0; i < translation.length; i++) {
        const element = translation[i];
        document.getElementById(translation[i][0]).innerText = translation[i][1];
    }
}

window.onload = function () {
    let userLang = navigator.language || navigator.userLanguage; 
    
    if (userLang == 'sr') {
        translate();
    }
}