window.addEventListener('load', () => {
    console.log("LOAD COMPLETE")
})



// ENCRYPTING THE MESSAGE
const encryptButton = document.getElementById('encBtn');
encryptButton.addEventListener('click', () => {
    let message = document.getElementById('message').value;
    encrypt(message.toLowerCase());
})

function encrypt(txt) {
    const chars = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    }
    document.getElementById('finalMessage').value = txt.replaceAll(/[aeiou]/gi, m => chars[m]);
    updateTitle()
    hide();
    display();

}

function updateTitle() {
    const title = document.getElementById('mainTitle');
    title.style.marginLeft = '250px';
    title.innerHTML = "Text Encrypted";
}

function updateTitleDec() {
    const title2 = document.getElementById('mainTitle')
    title2.style.marginLeft = '250px';
    title2.innerHTML = "Text decrypted";
}


function display() {
    const ans = document.getElementById('finalMessage');
    ans.style.display = 'block';

    setInterval(() => {
        document.location.reload();
    }, 10000);
}

function hide() {
    const content = document.getElementById('rContent');
    content.style.display = 'none';
}

// DECRYPT 

const decBtn = document.getElementById('decBtn');
decBtn.addEventListener('click', () => {
    let decMsg = document.getElementById('message').value;
    decrypt(decMsg.toLowerCase());
})

function decrypt(txt) {
    document.getElementById('finalMessage').value = txt.replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    updateTitleDec()
    hide();
    display();
};

// COPY 

const copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', () => {
    const copyText = document.getElementById('finalMessage');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    copyText.value = "";
}
    
)

// PAGE INIT
