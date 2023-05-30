// ENCRYPTING THE MESSAGE

const encryptButton = document.getElementById('encBtn');
encryptButton.addEventListener('click', () => {
    let message = document.getElementById('message').value;
    encrypt(message.toLowerCase());
})
function encrypt(txt) {
    const chars = {
        'a' : 'ai',
        'e' : 'enter',
        'i' : 'imes',
        'o' : 'ober',
        'u' : 'ufat',
    }    
    document.getElementById('finalMessage').value = txt.replaceAll(/[aeiou]/gi, m => chars[m]);
    hide();
    display();
    
}

function display() {
    const ans = document.getElementById('finalMessage');
    ans.style.display = 'block';
}

function hide() {
    const content = document.getElementById('rContent');
    content.style.display = 'none';
}

