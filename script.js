function createTable() {
    //Write your code here
    const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear any existing table

    let rows = prompt("Input number of rows");
    let cols = prompt("Input number of columns");

    rows = parseInt(rows);
    cols = parseInt(cols);

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

  

