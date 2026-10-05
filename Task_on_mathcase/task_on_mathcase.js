const problemGrid = document.getElementById("problemGrid");
let bankBalance = 3000;

function createProblemCard(index, title, category, description) {
  const card = document.createElement("article");
  card.className = "problem-card";

  const top = document.createElement("div");
  top.className = "problem-card__top";

  const number = document.createElement("span");
  number.className = "problem-card__index";
  number.textContent = String(index);

  const type = document.createElement("span");
  type.className = "problem-card__type";
  type.textContent = category;

  const heading = document.createElement("h3");
  heading.textContent = title;

  const summary = document.createElement("p");
  summary.textContent = description;

  const controls = document.createElement("div");
  controls.className = "problem-card__controls";

  const answer = document.createElement("p");
  answer.className = "problem-card__answer";
  answer.setAttribute("aria-live", "polite");

  top.append(number, type);
  card.append(top, heading, summary, controls, answer);
  return { card, controls, answer };
}

function createLabeledSelect(id, labelText, options) {
  const wrapper = document.createElement("div");
  wrapper.className = "form-field";

  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = labelText;

  const select = document.createElement("select");
  select.id = id;

  options.forEach(({ value, text }) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  });

  wrapper.append(label, select);
  return { wrapper, select };
}

function createLabeledNumberInput(id, labelText, placeholder) {
  const wrapper = document.createElement("div");
  wrapper.className = "form-field";

  const label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = labelText;

  const input = document.createElement("input");
  input.id = id;
  input.type = "number";
  input.placeholder = placeholder;
  input.min = "0";
  input.step = "1";

  wrapper.append(label, input);
  return { wrapper, input };
}

function createActionButton(text) {
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = text;
  return button;
}

function showMessage(answer, message) {
  answer.textContent = message;
  answer.classList.add("visible");
}

function createMenuCard() {
  const { card, controls, answer } = createProblemCard(
    1,
    "Restaurant menu",
    "Match selection",
    "Choose a menu item to see its price and description."
  );
  const form = document.createElement("form");
  const menuChoice = createLabeledSelect("menuChoice", "Choose a dish", [
    { value: "1", text: "1. Biryani" },
    { value: "2", text: "2. Chicken 65" },
    { value: "3", text: "3. Veg Pulao" },
    { value: "4", text: "4. Butter Chicken" },
    { value: "5", text: "5. Paneer Tikka" }
  ]);
  const button = createActionButton("Show Menu Item");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const menuItems = {
      1: "Biryani — ₹150 per piece. Spicy chicken pieces served with biryani rice.",
      2: "Chicken 65 — ₹180. Crispy, spicy deep-fried chicken pieces.",
      3: "Veg Pulao — ₹120. Spicy and tasty rice.",
      4: "Butter Chicken — ₹250. Juicy, tasty butter chicken.",
      5: "Paneer Tikka — ₹280. Tasty paneer tikka."
    };

    showMessage(answer, menuItems[menuChoice.select.value]);
  });

  form.append(menuChoice.wrapper, button);
  controls.appendChild(form);
  problemGrid.appendChild(card);
}

function createBankCard() {
  const { card, controls, answer } = createProblemCard(
    2,
    "Bank account",
    "Match selection",
    "Check your balance, deposit money, withdraw money, or exit. Starting balance: ₹3,000."
  );
  const form = document.createElement("form");
  const bankChoice = createLabeledSelect("bankChoice", "Choose an action", [
    { value: "1", text: "1. Check Balance" },
    { value: "2", text: "2. Deposit" },
    { value: "3", text: "3. Withdraw" },
    { value: "4", text: "4. Exit" }
  ]);
  const transactionAmount = createLabeledNumberInput(
    "transactionAmount",
    "Amount (for deposit or withdrawal)",
    "Enter amount"
  );
  const button = createActionButton("Submit");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = transactionAmount.input.valueAsNumber;

    switch (bankChoice.select.value) {
      case "1":
        showMessage(answer, `Current balance: ₹${bankBalance}`);
        break;
      case "2":
        if (!Number.isFinite(amount) || amount <= 0) {
          showMessage(answer, "Enter a deposit amount greater than zero.");
          break;
        }
        bankBalance += amount;
        showMessage(answer, `Deposit successful. Current balance: ₹${bankBalance}`);
        break;
      case "3":
        if (!Number.isFinite(amount) || amount <= 0) {
          showMessage(answer, "Enter a withdrawal amount greater than zero.");
          break;
        }
        if (amount > bankBalance) {
          showMessage(answer, "Withdrawal declined: insufficient balance.");
          break;
        }
        bankBalance -= amount;
        showMessage(answer, `Withdrawal successful. Current balance: ₹${bankBalance}`);
        break;
      case "4":
        showMessage(answer, "Banking session ended.");
        break;
      default:
        showMessage(answer, "Choose a valid banking action.");
    }
  });

  form.append(bankChoice.wrapper, transactionAmount.wrapper, button);
  controls.appendChild(form);
  problemGrid.appendChild(card);
}

function createElectricityBillCard() {
  const { card, controls, answer } = createProblemCard(
    3,
    "Electricity bill",
    "If / else if",
    "Calculate the bill using the original flat rate for the matching usage range."
  );
  const form = document.createElement("form");
  const unitsInput = createLabeledNumberInput(
    "electricityUnits",
    "Units consumed",
    "Enter whole units"
  );
  const button = createActionButton("Calculate Bill");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const units = unitsInput.input.valueAsNumber;

    if (!Number.isInteger(units) || units < 0) {
      showMessage(answer, "Enter a whole number of units that is zero or greater.");
      return;
    }

    let rate;
    if (units <= 100) {
      rate = 2;
    } else if (units <= 200) {
      rate = 4;
    } else if (units <= 300) {
      rate = 6;
    } else if (units <= 400) {
      rate = 8;
    } else {
      showMessage(answer, "No rate is defined for usage above 400 units.");
      return;
    }

    showMessage(answer, `Total bill: ₹${units * rate} (${units} units × ₹${rate} per unit)`);
  });

  form.append(unitsInput.wrapper, button);
  controls.appendChild(form);
  problemGrid.appendChild(card);
}

createMenuCard();
createBankCard();
createElectricityBillCard();
