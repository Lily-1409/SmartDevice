document.addEventListener('DOMContentLoaded', function () {
  let phoneInputs = document.querySelectorAll('input[data-tel-input]');

  let getInputNumberValue = function (input) {
    return input.value.replace(/\D/g, '');
  };

  let onPhoneInput = function (e) {
    let input = e.target;
    let inputNumberValue = getInputNumberValue(input);
    let formatedInputValue = '';
    let selectionStart = input.selectionStart;

    if (!inputNumberValue) {
      input.value = '';
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumberValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumberValue[0]) > -1) {
      if (inputNumberValue[0] === '9') {
        inputNumberValue = '7' + inputNumberValue;
      }
      let firstSymbos = (inputNumberValue[0] === '8' ? '8' : '+7');
      formatedInputValue = firstSymbos + '';
      if (inputNumberValue.length > 1) {
        formatedInputValue += ' (' + inputNumberValue.substring(1, 4);
      }
      if (inputNumberValue.length >= 5) {
        formatedInputValue += ') ' + inputNumberValue.substring(4, 7);
      }
      if (inputNumberValue.length >= 8) {
        formatedInputValue += '-' + inputNumberValue.substring(7, 9);
      }
      if (inputNumberValue.length >= 10) {
        formatedInputValue += '-' + inputNumberValue.substring(9, 11);
      }
    } else {
      // not russian phone
      // formatedInputValue = '+' + inputNumberValue.substring(0, 16);
    }
    input.value = formatedInputValue;
  };

  let onPhoneKeyDown = function (e) {
    let input = e.target;
    if ((e.keyCode) === 8 && getInputNumberValue(input).length === 1) {
      input.value = '';
    }
  };

  let onPhonePaste = function (e) {
    let pasted = e.clipboard || window.clipboardData;
    let input = e.target;
    let inputNumberValue = getInputNumberValue(input);

    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (!/\D/g.test(pastedText)) {
        input.value = inputNumberValue;
      }
    }
  };

  for (let i = 0; i < phoneInputs.length; i++) {
    let input = phoneInputs[i];
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('keydown', onPhoneKeyDown);
    input.addEventListener('paste', onPhonePaste);
  }
});
