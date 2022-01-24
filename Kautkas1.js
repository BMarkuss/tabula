async function LoadIntoTable(url, table) {
const tablehead = tale. querySelector ("thead");
const tablebody = tale. querySelector ("tbody");
const response = await fetch(url);
const { headers, rows } = await response.json();

tableHead.innerHTML = "<tr></tr>";
tableBody.innerHTML = "";

for (const headrText of headers) {
  const headerElement = document.createElement("th");

  headerElement.textContent = headerText;
  tableHead.querySelector("tr").appendChild
}

}

LoadIntoTable("./kautkas1.json", document. querySelector("table"));
