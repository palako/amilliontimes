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

function handPositions(c) {

    m = new Map();
    m['9484'] = "--h: 0deg; --m: -90deg";//┌
    m['45'] = "--h: 90deg; --m: -90deg";//-
    m['9488'] = "--h: 90deg; --m: 0deg";//┐
    m['9492'] = "--h: 180deg; --m: -90deg";//└
    m['124'] = "--h: 0deg; --m: 180deg";//|
    m['9496'] = "--h: 90deg; --m: 180deg"//┘
    m['9516'] = "--h: 0deg; --m: 0deg"//┬
    m['9524'] = "--h: 180deg; --m: -180deg"//┴
    m['47'] = "--h: 45deg; --m: 45deg"// /

    
    return(m[c]);
}

function time() {
    // const handPositions = [];
    // handPositions[0] = "--h: 0deg; --m: -90deg";
    // handPositions[1] = "--h: 90deg; --m: -90deg";
    // handPositions[2] = "--h: 90deg; --m: 0deg";
    // handPositions[3] = "--h: 180deg; --m: -90deg";
    // handPositions[4] = "--h: 90deg; --m: 0deg";
    // handPositions[5] = "--h: 0deg; --m: 180deg";
    // handPositions[6] = "--h: 0deg; --m: -90deg";
    // handPositions[7] = "--h: 90deg; --m: 180deg";
    // handPositions[8] = "--h: 0deg; --m: 180deg";
    // handPositions[9] = "--h: 0deg; --m: 180deg";
    // handPositions[10] = "--h: 0deg; --m: -90deg";
    // handPositions[11] = "--h: 90deg; --m: 180deg";
    // handPositions[12] = "--h: 180deg; --m: 0deg";
    // handPositions[13] = "--h: 180deg; --m: -90deg";
    // handPositions[14] = "--h: 90deg; --m: 0deg";
    // handPositions[15] = "--h: 180deg; --m: -90deg";
    // handPositions[16] = "--h: 90deg; --m: -90deg";
    // handPositions[17] = "--h: 90deg; --m: 180deg";

    const clocks = document.querySelectorAll(".clock");
    clocks.forEach((clock) => {
        if(clock.dataset.pos) {
            const digit = clock.parentElement.dataset.digit;
            clock.style = handPositions(shapes[digit].charCodeAt(clock.dataset.pos));
        }
    });
}

function random() {
    
    const clocks = document.querySelectorAll(".clock");
    clocks.forEach((clock) => {
        const h = Math.random() * 360;
        const m = Math.random() * 360;
        clock.style = "--h: "+h+"deg; --m: "+m+"deg";
        
    });
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
        clock.style = handPositions(shapes[value].charCodeAt(i));
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

function main() {
    addDigit("digit0", 0);
    addDigit("digit1", 1);
    addDigit("digit2", 2);
    addDigit("digit3", 3);
    addDigit("digit4", 4);
    addDigit("digit5", 5);
    addDigit("digit6", 6);
    addDigit("digit7", 7);
    addDigit("digit8", 8);
    addDigit("digit9", 9);
}

window.onload = main;