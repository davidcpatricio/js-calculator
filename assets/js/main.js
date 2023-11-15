function Calculator() {
  this.display = document.getElementById('display');

  this.start = () => {
    this.buttonClick();
    this.pressEnter();
    this.validInput();
  };

  this.pressEnter = () => {
    document.addEventListener('keypress', e => {
      if (e.key === "Enter") this.makeOperation();
    });
  };

  this.buttonClick = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.displayButtonInput(el);
      if (el.classList.contains('btn-clear')) this.clearDisplay();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.makeOperation();
    });
  };

  this.validInput = () => {
    document.addEventListener('keydown', e => {
      const validInputs = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',
        '+', '-', '*', '/', '(', ')', 'Backspace', 'Delete'
      ]
      if (!validInputs.includes(e.key)) e.preventDefault();
    });
  };

  this.displayButtonInput = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clearDisplay = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);

  this.makeOperation = () => {
    try {
      const operation = eval(this.display.value); // PERIGOSO

      if (!operation) {
        alert('Invalid operation');
        return;
      };

      this.display.value = String(operation);
    } catch (e) {
      alert('Invalid operation');
      return;
    };
  };
};

const calculator = new Calculator();
calculator.start();
