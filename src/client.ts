let questions: any[] = [];
let metric_name: string;
let tableHead: HTMLTableSectionElement = document.createElement("thead");
let tableBody: HTMLTableSectionElement = document.createElement("tbody");
let commonTableRow: HTMLTableRowElement = document.createElement("tr");

const metricRadios = [
  { id: "pmg-x", order_by: "potential_memory_gain_multiplier" },
  { id: "pmg-d", order_by: "potential_memory_gain_in_days" },
  { id: "last-attempt", order_by: "days_since_last_attempt" },
  { id: "lami", order_by: "latest_memory_interval" },
  { id: "q-no", order_by: "question_number" },
];

const questionsTableMiniTh = document.getElementById(
  "questions-table-mini-th"
) as HTMLTableCellElement;
const questionsTableMiniBody = document.getElementById(
  "questions-table-mini-body"
) as HTMLTableSectionElement;
const questionsTableMini = document.getElementById(
  "questions-table-mini"
) as HTMLTableElement;
const questionsTable = document.getElementById(
  "questions-table"
) as HTMLTableElement;

window.addEventListener("DOMContentLoaded", async () => {
  reloadPage();
});

async function reloadPage() {
  await loadQuestionsFromDB();
  let selectedRadio = document.querySelector(
    'input[name="metric"]:checked'
  ) as HTMLInputElement;
  if (!selectedRadio) {
    selectedRadio = document.getElementById("pmg-x") as HTMLInputElement;
    selectedRadio.checked = true;
  }
  let selectedRadioId = selectedRadio.id;
  console.log(selectedRadioId);

  let order_by =
    metricRadios.find((radio) => radio.id === selectedRadioId)?.order_by ??
    "potential_memory_gain_multiplier";
  console.log(order_by);

  let order;

  if (order_by === "question_number") {
    metric_name = "potential_memory_gain_multiplier";
    order = "asc";
  } else {
    order = "desc";
    metric_name = order_by;
  }

  reorderAndFilterQuestions(order, order_by, "");
  loadHTMLQuestionsTableMini(metric_name);
  loadHTMLQuestionsTable();
}

const JSON_LOADER_1 = document.getElementById("JSON_LOADER_1");

function loadQuestionsFromDB() {
  return fetch("/api/questions")
    .then((res) => res.json())
    .then((fetchedQuestions) => {
      if (JSON_LOADER_1) {
        JSON_LOADER_1.innerHTML = "";
        fetchedQuestions.forEach((item: any) => {
          const pre = document.createElement("pre");
          pre.textContent = JSON.stringify(item, null, 2);
          JSON_LOADER_1.appendChild(pre);
        });
      }
      questions = fetchedQuestions;
      return fetchedQuestions;
    });
}

function reorderAndFilterQuestions(
  order: string,
  order_by: string,
  filter: string
) {
  console.log(
    `reorderAndFilterQuestions(order_by: ${order_by}, filter: "${filter}", order: ${order})`
  );
  let filteredQuestions = questions;

  filteredQuestions.sort((a, b) => {
    const aVal = isNaN(Number(a[order_by])) ? a[order_by] : Number(a[order_by]);
    const bVal = isNaN(Number(b[order_by])) ? b[order_by] : Number(b[order_by]);

    if (typeof aVal === "string" && typeof bVal !== "string") return 1;
    if (typeof bVal === "string" && typeof aVal !== "string") return -1;
    if (aVal < bVal) return order === "desc" ? 1 : -1;
    if (aVal > bVal) return order === "desc" ? -1 : 1;
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
        cellData.innerHTML =
          "q" +
          questions[cell_index]["question_number"] +
          "<br>" +
          questions[cell_index][metric_name];
        cellData.style.border = "none";

        if (metric_name == "potential_memory_gain_multiplier") {
          cellData.style.backgroundColor = `rgba(${questions[cell_index]["PMG-X Cell Color"]})`;
          if (questions[cell_index]["potential_memory_gain_multiplier"] <= 1) {
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
      "question_number",
      "discipline",
      "source",
      "description",
      "attempts_summary",
      "days_since_last_attempt",
      "latest_memory_interval",
      "potential_memory_gain_in_days",
      "potential_memory_gain_multiplier",
      // 'Action buttons' will be handled separately
    ];

    columns.forEach((col) => {
      const td = document.createElement("td");
      td.textContent = questions[i][col] !== undefined ? questions[i][col] : "";
      td.classList.add("align-middle");
      commonTableRow.appendChild(td);

      if (col == "potential_memory_gain_multiplier") {
        td.style.backgroundColor = `rgba(${questions[i]["PMG-X Cell Color"]})`;
        if (questions[i]["potential_memory_gain_multiplier"] <= 1) {
          td.style.color = "rgba(0, 0, 0, 0.2)"; // 20 %-opaque black
        }
      }
    });

    const actionTd = document.createElement("td");

    addActionButtonsToCellData(actionTd, questions[i]["question_number"]);
    commonTableRow.appendChild(actionTd);

    tableBody.appendChild(commonTableRow);
  }
  questionsTable.appendChild(tableBody);
}

function postQuestion(discipline: string, source: string, description: string) {
  fetch("/api/questions/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ discipline, source, description }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert(`Question created with ID: ${data.question_number}`);
        loadQuestionsFromDB();
      }
    })
    .catch((err) => console.error("Error:", err));
}

function postAttempt(question_number: number, code: number) {
  fetch("/api/questions/attempt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question_number, code }),
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
  question_number: number
) {
  const buttonContainer = document.createElement("div");
  buttonContainer.className =
    "d-flex justify-content-evenly align-items-center w-100 gap-2";

  const button0 = document.createElement("button");
  button0.className = "btn btn-outline-warning";
  button0.textContent = "0";
  button0.onclick = function () {
    postAttempt(question_number, 0);
  };
  buttonContainer.appendChild(button0);

  const button1 = document.createElement("button");
  button1.className = "btn btn-outline-success";
  button1.textContent = "1";
  button1.onclick = function () {
    postAttempt(question_number, 1);
  };
  buttonContainer.appendChild(button1);

  cellData.appendChild(buttonContainer);
}

(window as any).reloadPage = reloadPage;
(window as any).postQuestion = postQuestion;
