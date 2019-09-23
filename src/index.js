const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let resultAlpha = '';
    let alphaStr = '';
    for(let i = 0; i < expr.length; i += 10){
        alphaStr  = expr.substring(i,i+10);
        resultAlpha = '';
        
        for(let j = 0; j < alphaStr.length; j += 2){
            let alpha = alphaStr.substring(j,j+2);
            
            if(alpha === '10'){
                resultAlpha += '.';
            }
            if(alpha === '11'){
                resultAlpha += '-'; 
            }
            if(alpha.indexOf('*') !== -1){
                resultAlpha = 'space';
                break;
            }
        }
        if(resultAlpha === 'space'){
            result += ' ';
        }else{
            result += MORSE_TABLE[resultAlpha];
        }
    }
    return result;
}

module.exports = {
    decode
}