const inputs = document.querySelectorAll(".otp-card-inputs input");
const button = document.querySelector(".otp-card button");
const maxCodeLength = 8;
let finalResult = "";

inputs.forEach(input => {
  let lastInputStatus = 0;

  input.onkeyup = (event) => {
    const currentInput = event.target;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (prevInput && event.keyCode === 8) {
      if (lastInputStatus === 1) {
        prevInput.value = "";
        prevInput.focus();
      }

      button.setAttribute("disabled", true);
      lastInputStatus = 1;

    } else {
      const reg = /^[A-Za-z0-9]+$/;

      if (!reg.test(currentInput.value)) {

        currentInput.value = currentInput.value.replace(/[^A-Za-z0-9]/g, "");

      } else if (currentInput.value) {

        currentInput.value = currentInput.value.toUpperCase();

        if (nextInput) {
          nextInput.focus();
        } else {
          button.removeAttribute("disabled");
          lastInputStatus = 0;
        }

        if (finalResult.length <= maxCodeLength)
          finalResult += currentInput.value;
      }
    }

  };
})

function resetForm() {
  inputs.forEach(input => {
    input.value = "";
  });
  finalResult = "";
}

button.onclick = () => {
  alert(finalResult);
  resetForm();
};