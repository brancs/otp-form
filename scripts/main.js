const inputs = document.querySelectorAll(".otp-card-inputs input");
const button = document.querySelector(".otp-card button");

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
      const reg = /^[0-9]+$/;

      if (!reg.test(currentInput.value)) {

        currentInput.value = currentInput.value.replace(/\D/g, "");

      } else if (currentInput.value) {

        if (nextInput) {
          nextInput.focus();
        } else {
          button.removeAttribute("disabled");
          lastInputStatus = 0;
        }

      }
    }

  };
})