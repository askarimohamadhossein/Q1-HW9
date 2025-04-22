const tableBody = document.getElementById("tableBody");
const inputs = document.getElementsByClassName("signup");
const signupBtn = document.getElementById("signupBtn");
const nameHeader = document.getElementById("nameHeader");
const rateHeader = document.getElementById("rateHeader");

signupBtn.style.cursor = "pointer";

signupBtn.addEventListener("click", () => {
  const row = document.createElement("tr");

  for (const input of inputs) {
    const cell = document.createElement("td");
    cell.textContent = input.value;
    row.appendChild(cell);
  }

  const actionCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.textContent = "Delete";
  deleteButton.style.cursor = "pointer";

  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  actionCell.appendChild(deleteButton);
  row.appendChild(actionCell);
  tableBody.appendChild(row);
});

function sortTable(columnIndex) {
  const rows = Array.from(tableBody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const aText = a.cells[columnIndex].textContent.trim();
    const bText = b.cells[columnIndex].textContent.trim();

    return isNaN(aText) ? aText.localeCompare(bText) : aText - bText;
  });

  tableBody.innerHTML = "";
  rows.forEach((row) => tableBody.appendChild(row));
}
