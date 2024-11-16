const imageUpload = document.getElementById('imageUpload');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
let image = new Image();

imageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        image.src = reader.result;
        image.onload = () => {
            drawMeme();
        };
    };
    reader.readAsDataURL(file);
});

function drawMeme() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = '30px Impact';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.textAlign = 'center';

    const topText = topTextInput.value.toUpperCase();
    ctx.fillText(topText, canvas.width / 2, 50);
    ctx.strokeText(topText, canvas.width / 2, 50);

    const bottomText = bottomTextInput.value.toUpperCase();
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
}

function generateMeme() {
    drawMeme();
}

const downloadBtn = document.getElementById('download');
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'my_meme.png';
    link.click();
});