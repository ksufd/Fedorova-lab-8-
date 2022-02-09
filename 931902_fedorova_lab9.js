function sign(s) {
    var inp = document.getElementById('gray').textContent.split(' ')
    if (inp[inp.length - 1][0]) {
        document.getElementById('gray').textContent += " " + s + " ";
        document.getElementById('black').textContent = " " + s + " ";
    }
    else {
        document.getElementById('gray').textContent = document.getElementById('gray').textContent.slice(0, -2) + s + " ";
        document.getElementById('black').textContent = document.getElementById('black').textContent.slice(0, -2) + s + " ";
    }
}

function numb(n) {
    var inp = document.getElementById('gray').textContent.split(' ');
    if (inp[inp.length - 1].length == 1 && inp[inp.length - 1][0] === '0') {
        document.getElementById('gray').textContent = document.getElementById('gray').textContent.slice(0, -1) + n;
        document.getElementById('black').textContent = document.getElementById('black').textContent.slice(0, -1) + n;
    }
    else {
        let t = document.getElementById('gray').textContent.split(' ');
        if (t[t.length-1] == '') {
            document.getElementById('black').textContent = document.getElementById('black').textContent.slice(2, -1);
        }
        document.getElementById('gray').textContent += n;
        document.getElementById('black').textContent += n;
    }
}

function point() {
    var inp = document.getElementById('gray').textContent.split(' ')
    if (inp[inp.length - 1].indexOf('.') == -1 && inp[inp.length - 1][0]) {
        document.getElementById('gray').textContent += '.';
        document.getElementById('black').textContent += '.';
    } 
}

function clearall(elem) {
    document.getElementById('gray').textContent = '0';
    document.getElementById('black').textContent = '0';
}

function remove() {
    let gra = document.getElementById('gray');
    let blk = document.getElementById('black');

    if (gra.textContent.length != 1) {
        if (gra.textContent[gra.textContent.length - 1] == ' ') {
            gra.textContent = gra.textContent.slice(0, -3);
            blk.textContent = blk.textContent.slice(0, -3);
        }
        else {
            gra.textContent = gra.textContent.slice(0, -1);
            blk.textContent = blk.textContent.slice(0, -1);
        }
    }
    else {
        gra.textContent = '0';
        blk.textContent = '0';
    }

    let t = gra.textContent.split(' ');
    if (blk.textContent == '') {
        blk.textContent = t[t.length - 1];
    }

    if (blk.textContent == '' && t[t.length - 1] == '') {
        blk.textContent = t[t.length - 2] + " ";
    }
}

function equal() {
    var inp = document.getElementById('gray').textContent.split(' ');
    if (inp[inp.length - 1] === '') {
        var result = eval(document.getElementById('gray').textContent.slice(0, -3)) 
    }
    else {
        var result = eval(document.getElementById('gray').textContent)
    }

    if (result != Infinity && result != -Infinity) {
        document.getElementById('gray').textContent = (parseInt(result * 10000)) / 10000;
        document.getElementById('black').textContent = (parseInt(result * 10000)) / 10000;
    }
    else {
        document.getElementById('gray').textContent = result;
        document.getElementById('black').textContent = result;
    }
}

rem.addEventListener('mousedown', event => {
    interval = setInterval(() => {
        remove();
    }, 150)
})

rem.addEventListener('mouseup', event => {
    clearInterval(interval);
})