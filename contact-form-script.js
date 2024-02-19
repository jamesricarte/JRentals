//INPUT 1

const input1 = document.querySelector('.input-container.no1 input');
const borderBottom1 = document.querySelector('.input-container.no1 .border-bottom');
const placeholder1 = document.querySelector('.input-container.no1 .placeholder');

//autofill detection

let autoFilled1 = false;

input1.addEventListener('animationstart', function(event) {
  if (event.animationName === 'onAutoFillStart') {
        autoFilled1 = true;
        handleAutofill1();
  } else if (event.animationName === 'onAutoFillCancel') {
        autoFilled1 = false;
        handleAutofill1();
  }
});

function handleAutofill1() {
  if (autoFilled1) {
    borderBottom1.style.height = '4px';
    borderBottom1.style.backgroundColor = 'rgb(110, 110, 110)';
    placeholder1.style.fontSize = '10px';
    placeholder1.style.top = '-11px';
  } else {
    borderBottom1.style.height = '1.5px';
    borderBottom1.style.backgroundColor = 'rgb(204, 204, 204)';
    placeholder1.style.fontSize = '16px';
    placeholder1.style.top = '0px';
  }
}

//Input detection

function input1Detect() {
    if (input1.value != '') {
        borderBottom1.style.height = '4px';
        borderBottom1.style.backgroundColor = 'rgb(110, 110, 110)';
        placeholder1.style.fontSize = '10px';
        placeholder1.style.top = '-11px';
    }
}   

function input1Deselected() {
        if (input1.value.trim() == '') {
            borderBottom1.style.height = '1.5px';
            borderBottom1.style.backgroundColor = 'rgb(204, 204, 204)';
            placeholder1.style.fontSize = '16px';
            placeholder1.style.top = '0px';
        }
}

input1.addEventListener('input', input1Detect)
input1.addEventListener('blur', input1Deselected)

//INPUT 2

const input2 = document.querySelector('.input-container.no2 input');
const borderBottom2 = document.querySelector('.input-container.no2 .border-bottom');
const placeholder2 = document.querySelector('.input-container.no2 .placeholder');

//autofill detection

let autoFilled2 = false;

input2.addEventListener('animationstart', function(event) {
  if (event.animationName === 'onAutoFillStart') {
        autoFilled2 = true;
        handleAutofill2();
  } else if (event.animationName === 'onAutoFillCancel') {
        autoFilled2 = false;
        handleAutofill2();
  }
});

function handleAutofill2() {
  if (autoFilled2) {
    borderBottom2.style.height = '4px';
    borderBottom2.style.backgroundColor = 'rgb(110, 110, 110)';
    placeholder2.style.fontSize = '10px';
    placeholder2.style.top = '-11px';
  } else {
    borderBottom2.style.height = '1.5px';
    borderBottom2.style.backgroundColor = 'rgb(204, 204, 204)';
    placeholder2.style.fontSize = '16px';
    placeholder2.style.top = '0px';
  }
}

//Input detection

function input2Detect() {
    if (input2.value != '') {
        borderBottom2.style.height = '4px';
        borderBottom2.style.backgroundColor = 'rgb(110, 110, 110)';
        placeholder2.style.fontSize = '10px';
        placeholder2.style.top = '-11px';
    }
}   

function input2Deselected() {
    if (input2.value.trim() == '') {
        borderBottom2.style.height = '1.5px';
        borderBottom2.style.backgroundColor = 'rgb(204, 204, 204)';
        placeholder2.style.fontSize = '16px';
        placeholder2.style.top = '0px';
    }
}

input2.addEventListener('input', input2Detect)
input2.addEventListener('blur', input2Deselected)

//INPUT 3

const input3 = document.querySelector('.input-container.no3 input');
const borderBottom3 = document.querySelector('.input-container.no3 .border-bottom');
const placeholder3 = document.querySelector('.input-container.no3 .placeholder');

//autofill detection

let autoFilled3 = false;

input3.addEventListener('animationstart', function(event) {
  if (event.animationName === 'onAutoFillStart') {
        autoFilled3 = true;
        handleAutofill3();
  } else if (event.animationName === 'onAutoFillCancel') {
        autoFilled3 = false;
        handleAutofill3();
  }
});

function handleAutofill3() {
  if (autoFilled3) {
    borderBottom3.style.height = '4px';
    borderBottom3.style.backgroundColor = 'rgb(110, 110, 110)';
    placeholder3.style.fontSize = '10px';
    placeholder3.style.top = '-11px';
  } else {
    borderBottom3.style.height = '1.5px';
    borderBottom3.style.backgroundColor = 'rgb(204, 204, 204)';
    placeholder3.style.fontSize = '16px';
    placeholder3.style.top = '0px';
  }
}

//Input detection

function input3Detect() {
    if (input3.value != '') {
        borderBottom3.style.height = '4px';
        borderBottom3.style.backgroundColor = 'rgb(110, 110, 110)';
        placeholder3.style.fontSize = '10px';
        placeholder3.style.top = '-11px';
    }
}   

function input3Deselected() {
    if (input3.value.trim() == '') {
        borderBottom3.style.height = '1.5px';
        borderBottom3.style.backgroundColor = 'rgb(204, 204, 204)';
        placeholder3.style.fontSize = '16px';
        placeholder3.style.top = '0px';
    }
}

input3.addEventListener('input', input3Detect)
input3.addEventListener('blur', input3Deselected)

//INPUT 4

const input4 = document.querySelector('.input-container.no4 input');
const borderBottom4 = document.querySelector('.input-container.no4 .border-bottom');
const placeholder4 = document.querySelector('.input-container.no4 .placeholder');

//autofill detection

let autoFilled4 = false;

input4.addEventListener('animationstart', function(event) {
  if (event.animationName === 'onAutoFillStart') {
        autoFilled4 = true;
        handleAutofill4();
  } else if (event.animationName === 'onAutoFillCancel') {
        autoFilled4 = false;
        handleAutofill4();
  }
});

function handleAutofill4() {
  if (autoFilled4) {
    borderBottom4.style.height = '4px';
    borderBottom4.style.backgroundColor = 'rgb(110, 110, 110)';
    placeholder4.style.fontSize = '10px';
    placeholder4.style.top = '-11px';
  } else {
    borderBottom4.style.height = '1.5px';
    borderBottom4.style.backgroundColor = 'rgb(204, 204, 204)';
    placeholder4.style.fontSize = '16px';
    placeholder4.style.top = '0px';
  }
}

//Input detection

function input4Detect() {
    if (input4.value != '') {
        borderBottom4.style.height = '4px';
        borderBottom4.style.backgroundColor = 'rgb(110, 110, 110)';
        placeholder4.style.fontSize = '10px';
        placeholder4.style.top = '-11px';
    }
}   

function input4Deselected() {
    if (input4.value.trim() == '') {
        borderBottom4.style.height = '1.5px';
        borderBottom4.style.backgroundColor = 'rgb(204, 204, 204)';
        placeholder4.style.fontSize = '16px';
        placeholder4.style.top = '0px';
    }
}

input4.addEventListener('input', input4Detect)
input4.addEventListener('blur', input4Deselected)

//INPUT 5

const input5 = document.querySelector('.input-container.no5 input');
const borderBottom5 = document.querySelector('.input-container.no5 .border-bottom');
const placeholder5 = document.querySelector('.input-container.no5 .placeholder');

//autofill detection

let autoFilled5 = false;

input5.addEventListener('animationstart', function(event) {
  if (event.animationName === 'onAutoFillStart') {
        autoFilled5 = true;
        handleAutofill5();
  } else if (event.animationName === 'onAutoFillCancel') {
        autoFilled5 = false;
        handleAutofill5();
  }
});

function handleAutofill5() {
  if (autoFilled5) {
    borderBottom5.style.height = '4px';
    borderBottom5.style.backgroundColor = 'rgb(110, 110, 110)';
    placeholder5.style.fontSize = '10px';
    placeholder5.style.top = '-11px';
  } else {
    borderBottom5.style.height = '1.5px';
    borderBottom5.style.backgroundColor = 'rgb(204, 204, 204)';
    placeholder5.style.fontSize = '16px';
    placeholder5.style.top = '0px';
  }
}

//Input detection

function input5Detect() {
    if (input5.value != '') {
        borderBottom5.style.height = '4px';
        borderBottom5.style.backgroundColor = 'rgb(110, 110, 110)';
        placeholder5.style.fontSize = '10px';
        placeholder5.style.top = '-11px';
    }
}   

function input5Deselected() {
    if (input5.value.trim() == '') {
        borderBottom5.style.height = '1.5px';
        borderBottom5.style.backgroundColor = 'rgb(204, 204, 204)';
        placeholder5.style.fontSize = '16px';
        placeholder5.style.top = '0px';
    }
}

input5.addEventListener('input', input5Detect)
input5.addEventListener('blur', input5Deselected)

//INPUT 6

const input6 = document.querySelector('.input-container.no6 input');
const borderBottom6 = document.querySelector('.input-container.no6 .border-bottom');
const placeholder6 = document.querySelector('.input-container.no6 .placeholder');

//autofill detection

let autoFilled6 = false;

input6.addEventListener('animationstart', function(event) {
  if (event.animationName === 'onAutoFillStart') {
        autoFilled6 = true;
        handleAutofill6();
  } else if (event.animationName === 'onAutoFillCancel') {
        autoFilled6 = false;
        handleAutofill6();
  }
});

function handleAutofill6() {
  if (autoFilled6) {
    borderBottom6.style.height = '4px';
    borderBottom6.style.backgroundColor = 'rgb(110, 110, 110)';
    placeholder6.style.fontSize = '10px';
    placeholder6.style.top = '-11px';
  } else {
    borderBottom6.style.height = '1.5px';
    borderBottom6.style.backgroundColor = 'rgb(204, 204, 204)';
    placeholder6.style.fontSize = '16px';
    placeholder6.style.top = '0px';
  }
}

//Input detection

function input6Detect() {
    if (input6.value != '') {
        borderBottom6.style.height = '4px';
        borderBottom6.style.backgroundColor = 'rgb(110, 110, 110)';
        placeholder6.style.fontSize = '10px';
        placeholder6.style.top = '-11px';
    }
}   

function input6Deselected() {
    if (input6.value.trim() == '') {
        borderBottom6.style.height = '1.5px';
        borderBottom6.style.backgroundColor = 'rgb(204, 204, 204)';
        placeholder6.style.fontSize = '16px';
        placeholder6.style.top = '0px';
    }
}

input6.addEventListener('input', input6Detect)
input6.addEventListener('blur', input6Deselected)

//INPUT 7

const input7 = document.querySelector('.input-container.no7 textarea');
const borderBottom7 = document.querySelector('.input-container.no7 .border-bottom');
const placeholder7 = document.querySelector('.input-container.no7 .placeholder');

//autofill detection

let autoFilled7 = false;

input7.addEventListener('animationstart', function(event) {
  if (event.animationName === 'onAutoFillStart') {
        autoFilled7 = true;
        handleAutofill7();
  } else if (event.animationName === 'onAutoFillCancel') {
        autoFilled7 = false;
        handleAutofill7();
  }
});

function handleAutofill7() {
  if (autoFilled7) {
    borderBottom7.style.height = '4px';
    borderBottom7.style.backgroundColor = 'rgb(110, 110, 110)';
    placeholder7.style.fontSize = '10px';
    placeholder7.style.top = '-11px';
  } else {
    borderBottom7.style.height = '1.5px';
    borderBottom7.style.backgroundColor = 'rgb(204, 204, 204)';
    placeholder7.style.fontSize = '16px';
    placeholder7.style.top = '0px';
  }
}

//Input detection

function input7Detect() {
    if (input7.value != '') {
        borderBottom7.style.height = '4px';
        borderBottom7.style.backgroundColor = 'rgb(110, 110, 110)';
        placeholder7.style.fontSize = '10px';
        placeholder7.style.top = '-11px';
    }
}   

function input7Deselected() {
    if (input7.value.trim() == '') {
        borderBottom7.style.height = '1.5px';
        borderBottom7.style.backgroundColor = 'rgb(204, 204, 204)';
        placeholder7.style.fontSize = '16px';
        placeholder7.style.top = '0px';
    }
}

input7.addEventListener('input', input7Detect)
input7.addEventListener('blur', input7Deselected)