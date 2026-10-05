function showResult(exampleName, lines) {
  const result = document.getElementById(`result-${exampleName}`);
  result.textContent = lines.length > 0 ? lines.join("\n") : "No values found.";
}

function runForBreak() {
  const values = [];
  for (let forBreakIndex = 0; forBreakIndex < 10; forBreakIndex++) {
    if (forBreakIndex == 5) {
      break;
    }
    values.push(forBreakIndex);
  }
  showResult("forBreak", values);
}

function runWhileBreak() {
  const values = [];
  let whileBreakIndex = 1;
  while (whileBreakIndex <= 10) {
    values.push(whileBreakIndex);
    if (whileBreakIndex == 3) {
      break;
    }
    whileBreakIndex++;
  }
  showResult("whileBreak", values);
}

function runForMultiple() {
  const values = [];
  for (let multipleSearchIndex = 22; multipleSearchIndex < 30; multipleSearchIndex++) {
    if (multipleSearchIndex % 5 === 0) {
      values.push(multipleSearchIndex);
      break;
    }
  }
  showResult("forMultiple", values);
}

function runWhileMultiple() {
  const values = [];
  let whileMultipleSearchIndex = 22;
  while (whileMultipleSearchIndex <= 30) {
    if (whileMultipleSearchIndex % 5 === 0) {
      values.push(whileMultipleSearchIndex);
      break;
    }
    whileMultipleSearchIndex++;
  }
  showResult("whileMultiple", values);
}

function runBackwardMultiple() {
  const values = [];
  for (let descendingSearchIndex = 59; descendingSearchIndex > 50; descendingSearchIndex--) {
    if (descendingSearchIndex % 4 === 0) {
      values.push(descendingSearchIndex);
      break;
    }
  }
  showResult("backwardMultiple", values);
}

function runFirstThree() {
  const values = [];
  let ascendingStart = 10;
  const ascendingEnd = 20;
  let ascendingCount = 0;

  for (let ascendingValue = ascendingStart; ascendingValue <= ascendingEnd; ascendingValue++) {
    ascendingCount++;
    values.push(ascendingValue);
    if (ascendingCount == 3) {
      break;
    }
    ascendingStart++;
  }
  showResult("firstThree", values);
}

function runTwoEven() {
  const values = [];
  let descendingStart = 25;
  const descendingEnd = 13;
  let evenCount = 0;

  for (let descendingValue = descendingStart; descendingValue >= descendingEnd; descendingValue--) {
    if (descendingValue % 2 == 0) {
      values.push(descendingValue);
      evenCount++;
    }
    if (evenCount == 2) {
      break;
    }
    descendingStart++;
  }
  showResult("twoEven", values);
}

function runSkipFive() {
  const values = [];
  for (let continueIndexOne = 1; continueIndexOne <= 10; continueIndexOne++) {
    if (continueIndexOne == 5) {
      continue;
    }
    values.push(continueIndexOne);
  }
  showResult("skipFive", values);
}

function runSkipFifteen() {
  const values = [];
  for (let continueIndexTwo = 10; continueIndexTwo <= 20; continueIndexTwo++) {
    if (continueIndexTwo == 15) {
      continue;
    }
    values.push(continueIndexTwo);
  }
  showResult("skipFifteen", values);
}

function runSkipYear() {
  const values = [];
  for (let continueYear = 2000; continueYear <= 2026; continueYear++) {
    if (continueYear == 2022) {
      continue;
    }
    values.push(continueYear);
  }
  showResult("skipYear", values);
}

function runWhileSkipYear() {
  const values = [];
  let whileContinueYear = 2020;
  while (whileContinueYear <= 2026) {
    if (whileContinueYear == 2022) {
      whileContinueYear++;
      continue;
    }
    values.push(whileContinueYear);
    whileContinueYear++;
  }
  showResult("whileSkipYear", values);
}

function runAscendingDoWhile() {
  const values = [];
  let ascendingDoWhileIndex = 1;
  do {
    values.push(ascendingDoWhileIndex);
    ascendingDoWhileIndex++;
  } while (ascendingDoWhileIndex <= 10);
  showResult("ascendingDoWhile", values);
}

function runDescendingDoWhile() {
  const values = [];
  let descendingDoWhileIndex = 10;
  do {
    values.push(descendingDoWhileIndex);
    descendingDoWhileIndex--;
  } while (descendingDoWhileIndex >= 5);
  showResult("descendingDoWhile", values);
}

function checkEvenOdd() {
  const input = document.getElementById("userNumber");
  const number = input.valueAsNumber;

  if (input.value.trim() === "" || !Number.isInteger(number)) {
    showResult("checkEvenOdd", ["Please enter a whole number."]);
    return;
  }

  showResult("checkEvenOdd", [`${number} is ${number % 2 === 0 ? "even" : "odd"}.`]);
}

const exampleActions = {
  forBreak: runForBreak,
  whileBreak: runWhileBreak,
  forMultiple: runForMultiple,
  whileMultiple: runWhileMultiple,
  backwardMultiple: runBackwardMultiple,
  firstThree: runFirstThree,
  twoEven: runTwoEven,
  skipFive: runSkipFive,
  skipFifteen: runSkipFifteen,
  skipYear: runSkipYear,
  whileSkipYear: runWhileSkipYear,
  ascendingDoWhile: runAscendingDoWhile,
  descendingDoWhile: runDescendingDoWhile,
  checkEvenOdd
};

document.querySelectorAll("button[data-example]").forEach((button) => {
  button.addEventListener("click", () => {
    exampleActions[button.dataset.example]();
  });
});
