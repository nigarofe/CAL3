declare const renderMathInElement: any;
let questions: any[] = [];
let metric_name: string;
let tableHead: HTMLTableSectionElement = document.createElement("thead");
let tableBody: HTMLTableSectionElement = document.createElement("tbody");
let commonTableRow: HTMLTableRowElement = document.createElement("tr");

const metricRadios = [
  { id: "pmg-x", order_by: "PMG-X" },
  { id: "pmg-d", order_by: "PMG-D" },
  { id: "last-attempt", order_by: "DSLA" },
  { id: "lami", order_by: "LaMI" },
  { id: "q-no", order_by: "number" },
];

let questionsTableMiniTh: HTMLTableCellElement;
let questionsTableMiniBody: HTMLTableSectionElement;
let questionsTableMini: HTMLTableElement;
let questionsTable: HTMLTableElement;

async function reloadPage() {
  questionsTableMiniTh = document.getElementById(
    "questionsTableMiniTh"
  ) as HTMLTableCellElement;
  questionsTableMiniBody = document.getElementById(
    "questionsTableMiniBody"
  ) as HTMLTableSectionElement;
  questionsTableMini = document.getElementById(
    "questionsTableMini"
  ) as HTMLTableElement;
  questionsTable = document.getElementById(
    "questionsTable"
  ) as HTMLTableElement;

  await loadQuestionsFromDB();
  let selectedRadio = document.querySelector(
    'input[name="metric"]:checked'
  ) as HTMLInputElement;
  if (!selectedRadio) {
    selectedRadio = document.getElementById("pmg-x") as HTMLInputElement;
    selectedRadio.checked = true;
  }
  let selectedRadioId = selectedRadio.id;

  let order_by =
    metricRadios.find((radio) => radio.id === selectedRadioId)?.order_by ??
    "PMG-X";

  let order;

  if (order_by === "number") {
    metric_name = "PMG-X";
    order = "asc";
  } else {
    order = "desc";
    metric_name = order_by;
  }

  reorderAndFilterQuestions(order, order_by, "");
  loadHTMLQuestionsTableMini(metric_name);
  loadHTMLQuestionsTable();
  (window as any).renderMath();
}

function loadQuestionsFromDB() {
  return fetch("/api/questions")
    .then((res) => res.json())
    .then((fetchedQuestions) => {
      questions = fetchedQuestions;
      return fetchedQuestions;
    });
}

function reorderAndFilterQuestions(
  order: string,
  order_by: string,
  filter: string
) {
  //   console.log(
  //     `reorderAndFilterQuestions(order_by: ${order_by}, filter: "${filter}", order: ${order})`
  //   );
  let filteredQuestions = questions;

  filteredQuestions.sort((a, b) => {
    let aVal, bVal;
    if (order_by === "number") {
      aVal = a[order_by];
      bVal = b[order_by];
    } else {
      aVal = a.spaced_repetition_variables[order_by];
      bVal = b.spaced_repetition_variables[order_by];
    }

    const numA = isNaN(Number(aVal)) ? aVal : Number(aVal);
    const numB = isNaN(Number(bVal)) ? bVal : Number(bVal);

    if (typeof numA === "string" && typeof numB !== "string") return 1;
    if (typeof numB === "string" && typeof numA !== "string") return -1;
    if (numA < numB) return order === "desc" ? 1 : -1;
    if (numA > numB) return order === "desc" ? -1 : 1;
    return 0;
  });

  questions = filteredQuestions;
  return questions;
}

function loadHTMLQuestionsTableMini(metric_name: string) {
  // make it UI responsive
  let numberOfColumns = 10;
  let numberOfQuestionsToBeDisplayed = questions.length;
  let numberOfRows = Math.ceil(
    numberOfQuestionsToBeDisplayed / numberOfColumns
  );

  questionsTableMiniTh.colSpan = numberOfColumns;
  questionsTableMiniBody.innerHTML = "";

  for (let i = 0; i < numberOfRows; i++) {
    let commonTableRow = document.createElement("tr");
    commonTableRow.classList.add("w-100");

    for (let j = 0; j < numberOfColumns; j++) {
      let cell_index = i * numberOfColumns + j;
      if (cell_index < numberOfQuestionsToBeDisplayed) {
        const cellData = document.createElement("td");
        cellData.classList.add("p-2", "text-center", "align-middle");
        cellData.innerText =
          "q" +
          questions[cell_index]["number"] +
          "\n" +
          questions[cell_index].spaced_repetition_variables[metric_name];
        cellData.style.border = "none";

        if (metric_name == "PMG-X") {
          cellData.style.backgroundColor = `rgba(${questions[cell_index].spaced_repetition_variables["PMG-X_cell_color"]})`;
          if (questions[cell_index].spaced_repetition_variables["PMG-X"] <= 1) {
            cellData.style.color = "rgba(0, 0, 0, 0.2)"; // 20 %-opaque black
          }
        }

        cellData.onclick = function () {};
        commonTableRow.appendChild(cellData);
      }
    }
    questionsTableMiniBody.appendChild(commonTableRow);
  }
  questionsTableMini.appendChild(questionsTableMiniBody);
  questionsTableMini.style.cursor = "pointer";
}

function loadHTMLQuestionsTable() {
  questionsTable.innerHTML = "";

  let tableHeaders = [
    "#",
    "Discipline",
    "Source",
    "Description",
    "Attempts Summary",
    "DSLA",
    "LaMI",
    "PMG-D",
    "PMG-X",
    "Action buttons",
  ];

  tableHead = document.createElement("thead");
  for (let i = 0; i < tableHeaders.length; i++) {
    const cellHeader = document.createElement("th");
    cellHeader.scope = "col";
    cellHeader.classList.add(
      "text-light",
      "p-2",
      "bg-success",
      "text-center",
      "align-middle"
    );

    cellHeader.textContent = tableHeaders[i];

    cellHeader.style.cursor = "help";
    cellHeader.style.borderBottom = "1px dotted #888";

    tableHead.appendChild(cellHeader);
  }
  questionsTable.appendChild(tableHead);

  tableBody = document.createElement("tbody");
  for (let i = 0; i < questions.length; i++) {
    commonTableRow = document.createElement("tr");
    const columns = [
      "number",
      "discipline",
      "source",
      "description",
      "spaced_repetition_variables.attempts_summary",
      "spaced_repetition_variables.DSLA",
      "spaced_repetition_variables.LaMI",
      "spaced_repetition_variables.PMG-D",
      "spaced_repetition_variables.PMG-X",
      // 'Action buttons' will be handled separately
    ];

    columns.forEach((col) => {
      const td = document.createElement("td");
      let value;
      if (col.includes(".")) {
        const parts = col.split(".");
        if (parts.length === 2) {
          value = questions[i][parts[0]][parts[1]];
        }
      } else {
        value = questions[i][col];
      }
      td.innerText = value !== undefined ? value : "";
      td.classList.add("align-middle");
      commonTableRow.appendChild(td);

      if (col == "spaced_repetition_variables.PMG-X") {
        td.style.backgroundColor = `rgba(${questions[i].spaced_repetition_variables["PMG-X_cell_color"]})`;
        if (questions[i].spaced_repetition_variables["PMG-X"] <= 1) {
          td.style.color = "rgba(0, 0, 0, 0.2)"; // 20 %-opaque black
        }
      }
    });

    const actionTd = document.createElement("td");

    addActionButtonsToCellData(actionTd, questions[i]["number"]);
    commonTableRow.appendChild(actionTd);

    tableBody.appendChild(commonTableRow);
  }
  questionsTable.appendChild(tableBody);
}

function postQuestion(
  discipline: string,
  source: string,
  description: string,
  proposition: string,
  step_by_step: string,
  answer: string,
  tags: string[]
) {
  fetch("/api/questions/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      discipline,
      source,
      description,
      proposition,
      step_by_step,
      answer,
      tags,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert(`Question created with ID: ${data.question_number}`);
        reloadPage();
      }
    })
    .catch((err) => console.error("Error:", err));
}

function updateQuestion(
  number: number,
  discipline: string,
  source: string,
  description: string,
  proposition: string,
  step_by_step: string,
  answer: string,
  tags: string[]
) {
  fetch(`/api/questions/update/${number}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      discipline,
      source,
      description,
      proposition,
      step_by_step,
      answer,
      tags,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert(data.message);
        reloadPage();
      }
    })
    .catch((err) => console.error("Error:", err));
}


function postAttempt(number: number, code: number) {
  fetch("/api/questions/attempt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number, code }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        console.log(`Attempt recorded with ID: ${data.id}`);
        reloadPage();
      }
    })
    .catch((err) => console.error("Error:", err));
}

function addActionButtonsToCellData(
  cellData: HTMLTableCellElement,
  number: number
) {
  const buttonContainer = document.createElement("div");
  buttonContainer.className =
    "d-flex justify-content-evenly align-items-center w-100 gap-2";

  const button0 = document.createElement("button");
  button0.className = "btn btn-outline-warning";
  button0.textContent = "0";
  button0.onclick = function () {
    postAttempt(number, 0);
  };
  buttonContainer.appendChild(button0);

  const button1 = document.createElement("button");
  button1.className = "btn btn-outline-success";
  button1.textContent = "1";
  button1.onclick = function () {
    postAttempt(number, 1);
  };
  buttonContainer.appendChild(button1);

  cellData.appendChild(buttonContainer);
}

export function initializeEditQuestionForm() {
  const questionSelector = document.getElementById(
    "question-selector"
  ) as HTMLSelectElement;
  const rawContentInput = document.getElementById(
    "raw-content-input"
  ) as HTMLTextAreaElement;
  const renderedContentOutput = document.getElementById(
    "rendered-content-output"
  ) as HTMLDivElement;
  const disciplineInput = document.getElementById(
    "question-discipline"
  ) as HTMLInputElement;
  const sourceInput = document.getElementById(
    "question-source"
  ) as HTMLInputElement;
  const descriptionInput = document.getElementById(
    "question-description"
  ) as HTMLInputElement;
  const tagsInput = document.getElementById(
    "question-tags"
  ) as HTMLInputElement;
  const editQuestionForm = document.getElementById(
    "edit-question-form"
  ) as HTMLFormElement;

  if (
    !questionSelector ||
    !editQuestionForm ||
    !rawContentInput ||
    !renderedContentOutput
  ) {
    return;
  }

  const populateSelector = () => {
    questionSelector.innerHTML =
      "<option selected disabled>Select a question...</option>";
    questions.forEach((q) => {
      const option = document.createElement("option");
      option.value = q.number;
      option.textContent = `Q${q.number}`;
      questionSelector.appendChild(option);
    });
  };

  if (questions.length > 0) {
    populateSelector();
  } else {
    loadQuestionsFromDB().then(() => {
      populateSelector();
    });
  }

  const renderContent = () => {
    const rawText = rawContentInput.value;
    // Simple replacement of tags for rendering. For security in a real app, this should be sanitized.
    const renderedHTML = rawText
      .replace(/<proposition>/g, "<h3>Proposition</h3>")
      .replace(/<\/proposition>/g, "<hr>")
      .replace(/<step-by-step>/g, "<h3>Step-by-step</h3>")
      .replace(/<\/step-by-step>/g, "<hr>")
      .replace(/<answer>/g, "<h3>Answer</h3>")
      .replace(/<\/answer>/g, "");

    renderedContentOutput.innerHTML = renderedHTML;
    (window as any).renderMath();
  };

  questionSelector.addEventListener("change", () => {
    const selectedQuestionNumber = parseInt(questionSelector.value, 10);
    const selectedQuestion = questions.find(
      (q) => q.number === selectedQuestionNumber
    );

    if (selectedQuestion) {
      disciplineInput.value = selectedQuestion.discipline || "";
      sourceInput.value = selectedQuestion.source || "";
      descriptionInput.value = selectedQuestion.description || "";
      const proposition = selectedQuestion.proposition || "";
      const stepByStep = selectedQuestion["step-by-step"] || "";
      const answer = selectedQuestion.answer || "";

      rawContentInput.value = `<proposition>
${proposition}
</proposition>

<step-by-step>
${stepByStep}
</step-by-step>

<answer>
${answer}
</answer>`;

      tagsInput.value = selectedQuestion.tags.join(", ");
      renderContent();
    }
  });

  rawContentInput.addEventListener("input", renderContent);

  editQuestionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedQuestionNumber = parseInt(questionSelector.value, 10);
    if (isNaN(selectedQuestionNumber)) {
      alert("Please select a question first.");
      return;
    }

    const rawText = rawContentInput.value;
    const propositionMatch = rawText.match(
      /<proposition>([\s\S]*?)<\/proposition>/
    );
    const stepByStepMatch = rawText.match(
      /<step-by-step>([\s\S]*?)<\/step-by-step>/
    );
    const answerMatch = rawText.match(/<answer>([\s\S]*?)<\/answer>/);

    const updatedQuestion = {
      number: selectedQuestionNumber,
      discipline: disciplineInput.value,
      source: sourceInput.value,
      description: descriptionInput.value,
      proposition: propositionMatch ? propositionMatch[1].trim() : "",
      "step-by-step": stepByStepMatch ? stepByStepMatch[1].trim() : "",
      answer: answerMatch ? answerMatch[1].trim() : "",
      tags: tagsInput.value.split(",").map((t) => t.trim()),
    };

    updateQuestion(
      updatedQuestion.number,
      updatedQuestion.discipline,
      updatedQuestion.source,
      updatedQuestion.description,
      updatedQuestion.proposition,
      updatedQuestion["step-by-step"],
      updatedQuestion.answer,
      updatedQuestion.tags
    );
  });
}

export function initializeAddQuestionForm() {
  const addQuestionForm = document.getElementById(
    "questionForm"
  ) as HTMLFormElement;
  if (addQuestionForm) {
    addQuestionForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const discipline = (
        document.getElementById("discipline") as HTMLInputElement
      ).value;
      const source = (document.getElementById("source") as HTMLInputElement)
        .value;
      const description = (
        document.getElementById("description") as HTMLTextAreaElement
      ).value;
      const proposition = (
        document.getElementById("proposition") as HTMLTextAreaElement
      ).value;
      const step_by_step = (
        document.getElementById("step-by-step") as HTMLTextAreaElement
      ).value;
      const answer = (document.getElementById("answer") as HTMLTextAreaElement)
        .value;
      const tags = (document.getElementById("tags") as HTMLInputElement).value
        .split(",")
        .map((t) => t.trim());

      postQuestion(
        discipline,
        source,
        description,
        proposition,
        step_by_step,
        answer,
        tags
      );
    });
  }
}


export function initializeEditForm() {
  const rawInput = document.getElementById(
    "raw-code-input"
  ) as HTMLTextAreaElement;
  const renderedOutput = document.getElementById(
    "rendered-output"
  ) as HTMLDivElement;

  if (rawInput && renderedOutput) {
    const renderContent = () => {
      renderedOutput.innerText = rawInput.value;
      (window as any).renderMath();
    };

    rawInput.addEventListener("input", renderContent);

    // Initial render in case there's pre-filled content
    renderContent();
  }
}

(window as any).reloadPage = reloadPage;
(window as any).postQuestion = postQuestion;

(window as any).renderMath = () => {
  renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    // • rendering keys, e.g.:
    throwOnError: false,
  });
};
