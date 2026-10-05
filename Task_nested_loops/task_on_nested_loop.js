const patternProblems = [
  {
    title: "Square pattern",
    description: "Print a 5 by 5 square of stars.",
    category: "Nested loops",
    createPattern: createSquarePattern
  },
  {
    title: "Right-angle triangle",
    description: "Print a growing right-angle triangle of stars.",
    category: "Nested loops",
    createPattern: createRightTrianglePattern
  },
  {
    title: "Inverted right-angle triangle",
    description: "Print a shrinking right-angle triangle of stars.",
    category: "Nested loops",
    createPattern: createInvertedTrianglePattern
  },
  {
    title: "Pyramid pattern",
    description: "Print a centered pyramid of stars.",
    category: "Nested loops",
    createPattern: createPyramidPattern
  },
  {
    title: "Number pyramid",
    description: "Print increasing numbers on each row.",
    category: "Nested loops",
    createPattern: createNumberPyramid
  },
  {
    title: "Diamond pattern",
    description: "Print a diamond made from stars.",
    category: "Nested loops",
    createPattern: createDiamondPattern
  },
  {
    title: "Floyd's triangle",
    description: "Print consecutive numbers in a triangle.",
    category: "Nested loops",
    createPattern: createFloydTriangle
  },
  {
    title: "Pascal's triangle",
    description: "Print the first five rows of Pascal's triangle.",
    category: "Nested loops",
    createPattern: createPascalTriangle
  }
];

function createSquarePattern() {
  const patternRows = [];
  const squareSize = 5;

  for (let squareRow = 0; squareRow < squareSize; squareRow++) {
    const starCells = [];
    for (let squareColumn = 0; squareColumn < squareSize; squareColumn++) {
      starCells.push("*");
    }
    patternRows.push(starCells.join(" "));
  }
  return patternRows.join("\n");
}

function createRightTrianglePattern() {
  const patternRows = [];
  const triangleHeight = 5;

  for (let triangleRow = 1; triangleRow <= triangleHeight; triangleRow++) {
    const starCells = [];
    for (let triangleColumn = 0; triangleColumn < triangleRow; triangleColumn++) {
      starCells.push("*");
    }
    patternRows.push(starCells.join(" "));
  }
  return patternRows.join("\n");
}

function createInvertedTrianglePattern() {
  const patternRows = [];
  const triangleHeight = 5;

  for (let triangleRow = triangleHeight; triangleRow > 0; triangleRow--) {
    const starCells = [];
    for (let triangleColumn = 0; triangleColumn < triangleRow; triangleColumn++) {
      starCells.push("*");
    }
    patternRows.push(starCells.join(" "));
  }
  return patternRows.join("\n");
}

function createPyramidPattern() {
  const patternRows = [];
  const pyramidHeight = 5;

  for (let pyramidRow = 1; pyramidRow <= pyramidHeight; pyramidRow++) {
    const leadingSpaces = " ".repeat(pyramidHeight - pyramidRow);
    const pyramidStars = "* ".repeat(pyramidRow);
    patternRows.push(leadingSpaces + pyramidStars);
  }
  return patternRows.join("\n");
}

function createNumberPyramid() {
  const patternRows = [];
  const numberPyramidHeight = 5;

  for (let numberRow = 1; numberRow <= numberPyramidHeight; numberRow++) {
    const numberCells = [];
    for (let numberColumn = 1; numberColumn <= numberRow; numberColumn++) {
      numberCells.push(numberColumn);
    }
    patternRows.push(numberCells.join(" "));
  }
  return patternRows.join("\n");
}

function createDiamondPattern() {
  const patternRows = [];
  const diamondHeight = 5;

  for (let upperDiamondRow = 1; upperDiamondRow <= diamondHeight; upperDiamondRow++) {
    const leadingSpaces = " ".repeat(diamondHeight - upperDiamondRow);
    const starLine = "*".repeat(2 * upperDiamondRow - 1);
    patternRows.push(leadingSpaces + starLine);
  }

  for (let lowerDiamondRow = diamondHeight - 1; lowerDiamondRow > 0; lowerDiamondRow--) {
    const leadingSpaces = " ".repeat(diamondHeight - lowerDiamondRow);
    const starLine = "*".repeat(2 * lowerDiamondRow - 1);
    patternRows.push(leadingSpaces + starLine);
  }
  return patternRows.join("\n");
}

function createFloydTriangle() {
  const patternRows = [];
  const floydHeight = 5;
  let nextFloydNumber = 1;

  for (let floydRow = 1; floydRow <= floydHeight; floydRow++) {
    const numberCells = [];
    for (let floydColumn = 0; floydColumn < floydRow; floydColumn++) {
      numberCells.push(nextFloydNumber);
      nextFloydNumber++;
    }
    patternRows.push(numberCells.join(" "));
  }
  return patternRows.join("\n");
}

function createPascalTriangle() {
  const patternRows = [];
  const pascalHeight = 5;

  for (let pascalRow = 0; pascalRow < pascalHeight; pascalRow++) {
    const numberCells = [];
    let pascalValue = 1;

    for (let pascalColumn = 0; pascalColumn <= pascalRow; pascalColumn++) {
      numberCells.push(pascalValue);
      pascalValue = Math.trunc(
        (pascalValue * (pascalRow - pascalColumn)) / (pascalColumn + 1)
      );
    }

    const leadingSpaces = " ".repeat(pascalHeight - pascalRow);
    patternRows.push(leadingSpaces + numberCells.join(" "));
  }
  return patternRows.join("\n");
}

function createProblemCard(problem, problemIndex) {
  const problemCard = document.createElement("article");
  problemCard.className = "problem-card";

  const cardTop = document.createElement("div");
  cardTop.className = "problem-card__top";

  const cardIndex = document.createElement("span");
  cardIndex.className = "problem-card__index";
  cardIndex.textContent = String(problemIndex + 1);

  const cardType = document.createElement("span");
  cardType.className = "problem-card__type";
  cardType.textContent = problem.category;

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = problem.title;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = problem.description;

  const resultButton = document.createElement("button");
  resultButton.type = "button";
  resultButton.textContent = "Show Result";

  const answer = document.createElement("pre");
  answer.className = "problem-card__answer";
  answer.setAttribute("aria-live", "polite");

  resultButton.addEventListener("click", () => {
    answer.textContent = problem.createPattern();
    answer.classList.toggle("visible");
    resultButton.textContent = answer.classList.contains("visible")
      ? "Hide Result"
      : "Show Result";
  });

  cardTop.append(cardIndex, cardType);
  problemCard.append(cardTop, cardTitle, cardDescription, resultButton, answer);
  return problemCard;
}

const problemGrid = document.getElementById("problemGrid");
patternProblems.forEach((problem, problemIndex) => {
  problemGrid.appendChild(createProblemCard(problem, problemIndex));
});
