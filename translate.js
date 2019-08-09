// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat

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

// @license-end
