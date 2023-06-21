// Changing the value of the source attribute base on img tag

function turnOn(){
    document.getElementById('bulb--img').src = 'images/pic_bulbon.gif';
    document.getElementById('on-button').classList.add('green-background');
    document.getElementById('off-button').classList.remove('red-background');

}

function turnOff(){
    document.getElementById('bulb--img').src = 'images/pic_bulboff.gif';
    document.getElementById('off-button').classList.add('red-background');
    document.getElementById('on-button').classList.remove('green-background');
}


