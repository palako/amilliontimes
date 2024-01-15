const zero = "\
┌-┐\
|┬|\
|||\
|||\
|┴|\
└-┘";

const one = "\
/┌┐\
/||\
/||\
/||\
/||\
/└┘";

const two = "\
┌-┐\
└┐|\
┌┘|\
|┌┘\
|└┐\
└-┘";

const three = "\
┌-┐\
└┐|\
┌┘|\
└┐|\
┌┘|\
└-┘";

const four = "\
┌┐┐\
|||\
|└|\
└┐|\
/||\
/└┘";

const five = "\
┌-┐\
|┌┘\
|└┐\
└┐|\
┌┘|\
└-┘";

const six = "\
┌-┐\
|┌┘\
|└┐\
|┬|\
|┴|\
└-┘";

const seven = "\
┌-┐\
└┐|\
/||\
/||\
/||\
/└┘";

const eight = "\
┌-┐\
|┬|\
|┴|\
|┬|\
|┴|\
└-┘";

const nine = "\
┌-┐\
|┬|\
|┴|\
└┐|\
┌┘|\
└-┘";

const shapes = [zero, one, two, three, four, five, six, seven, eight, nine];

const m = new Map();
m['┌'] = "--h: 0deg; --m: -90deg";//9484
m['-'] = "--h: 90deg; --m: -90deg";//45
m['┐'] = "--h: 90deg; --m: 0deg";//9488
m['└'] = "--h: 180deg; --m: -90deg";//9492
m['|'] = "--h: 0deg; --m: 180deg";//124
m['┘'] = "--h: 90deg; --m: 180deg"//9496
m['┬'] = "--h: 0deg; --m: 0deg"//9516
m['┴'] = "--h: 180deg; --m: -180deg"//9524
m['/'] = "--h: 45deg; --m: 45deg"// 47

var timer = null;

function handPositions(c) {    
    return(m[c]);
}

function digits() {
    const clocks = document.querySelectorAll(".clock");
    clocks.forEach((clock) => {
        if(clock.dataset.pos) {
            const digit = clock.parentElement.dataset.digit;
            clock.style = handPositions(shapes[digit][clock.dataset.pos]);//.charCodeAt(clock.dataset.pos));
        } else {
            clock.style = handPositions('/');
        }
    });
}

function random() {
    clearInterval(timer);
    const clocks = document.querySelectorAll(".clock");
    clocks.forEach((clock) => {
        const h = Math.random() * 360;
        const m = Math.random() * 360;
        clock.style = "--h: "+h+"deg; --m: "+m+"deg";
    });
}

function time() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    document.getElementById("h0").dataset.digit = Math.floor(h/10);
    document.getElementById("h1").dataset.digit = h % 10;
    document.getElementById("m0").dataset.digit = Math.floor(m/10);
    document.getElementById("m1").dataset.digit = m % 10;
    document.getElementById("s0").dataset.digit = Math.floor(s/10)
    document.getElementById("s1").dataset.digit = s % 10;
    digits();
}

function addDigit(digitId, value) {
    const digits = document.getElementById('digits');
    const digit = document.createElement('div');
    digit.id = digitId;
    digit.className="digit";
    digit.dataset.digit = value;
    digits.appendChild(digit);
    for (i=0; i < two.length; i++) {
        const clock = document.createElement('div');
        clock.className="clock";
        clock.style = handPositions(shapes[value][i]);//.charCodeAt(i)
        clock.dataset.pos = i;
        const hourHand = document.createElement('div');
        hourHand.className = "hand hour-hand";
        const minuteHand = document.createElement('div');
        minuteHand.className = "hand minute-hand";
        clock.appendChild(hourHand);
        clock.appendChild(minuteHand);
        digit.appendChild(clock);
    }
}

function addSeparator(sepId) {
    const digits = document.getElementById('digits');
    const sep = document.createElement('div');
    sep.id = sepId;
    sep.className="separator";
    digits.appendChild(sep);
    for (i=0; i < 6; i++) {
        const clock = document.createElement('div');
        clock.className="clock";
        clock.style = handPositions('/');
        const hourHand = document.createElement('div');
        hourHand.className = "hand hour-hand";
        const minuteHand = document.createElement('div');
        minuteHand.className = "hand minute-hand";
        clock.appendChild(hourHand);
        clock.appendChild(minuteHand);
        sep.appendChild(clock);
    }
}

function main() {
    addDigit("h0", 0);
    addDigit("h1", 1);
    addSeparator("sep0");
    addDigit("m0", 2);
    addDigit("m1", 3);
    addSeparator("sep1");
    addDigit("s0", 4);
    addDigit("s1", 5);
    timer = setInterval(time, 1000);
}

window.onload = main;