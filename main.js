// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
// Main script for transliterator for Serbian. Copyright (C) 2019 MIT License

const cyrillic = [
    'а','б','в','г','д','ђ','е','ж','з','и','ј','к','л','љ','м','н','њ','о','п','р','с','т','ћ','у','ф','х','ц','ч','џ','ш',
    
    'Љ','Њ','Е','Р','Т','З','У','И','О','П','Ш','Ђ','Ж','А','С','Д','Ф','Г','Х','Ј','К','Л','Ч','Ћ','Ж','Џ','Ц','В','Б','Н','М'
]

const latin = [
    'a','b','v','g','d','đ','e','ž','z','i','j','k','l','ǉ','m','n','ǌ','o','p','r','s','t','ć','u','f','h','c','č','ǆ','š',

    'Ǉ','Ǌ','E','R','T','Z','U','I','O','P','Š','Đ','Ž','A','S','D','F','G','H','J','K','L','Č','Ć','Ž','Ǆ','C','V','B','N','M',
]

const loadConverter = function () {
    let textEl = document.getElementById('text')
    let text = textEl.value
    let type = ''

    // Checks if text uses more cyrillic or latin characters
    let cyrillicNum = 0
    let latinNum = 0

    text = text.split('')

    // Finds amount of cyrillic characters
    for (let i = 0; i < text.length; i++) {
        const letter = text[i]

        for (let index = 0; index < cyrillic.length; index++) {
            const element = cyrillic[index];
            if (element == letter) {
                cyrillicNum++
            }
        }
    }

    // Finds amount of latin characters
    for (let i = 0; i < text.length; i++) {
        const letter = text[i]

        for (let index = 0; index < latin.length; index++) {
            const element = latin[index];
            if (element == letter) {
                latinNum++
            }
        }
    }

    text = text.join('')

    let result = ''
    if (latinNum > cyrillicNum) {
        result = toCyrillic(text)
    } else {
        result = toLatin(text)
    }

    document.getElementById('output').innerText = result
    
    if (result == '') {
        document.getElementById('output').innerHTML = '<em>Converted text will appear here</em>';
    }

    return result
}

const toCyrillic = function (text) {
    text = text.split('')
    let result = []
    for (let i = 0; i < text.length; i++) {
        const letter = text[i]
        let need = true
        for (let index = 0; index < latin.length; index++) {
            const element = latin[index]
            if (element == letter) {
                result.push(cyrillic[index])
                need = false
            }
        }

        if (need) {
            result.push(text[i])
        }
    }

    result = result.join('')

    return result
}

const toLatin = function (text) {
    text = text.split('')
    let result = []
    for (let i = 0; i < text.length; i++) {
        const letter = text[i]
        let need = true
        for (let index = 0; index < cyrillic.length; index++) {
            const element = cyrillic[index]
            if (element == letter) {
                result.push(latin[index])
                need = false
            }
        }

        if (need) {
            result.push(text[i])
        }
    }

    result = result.join('')

    return result
}

// @license-end
