
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    filterTable('distribution-table', document.getElementById('search').value);
});

document.getElementById('confirmSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    filterTable('confirm-table', document.getElementById('confirmSearch').value);
});

function filterTable(tableId, searchTerm) {
    var table, tr, td, i, j, txtValue;
    searchTerm = searchTerm.toLowerCase();
    table = document.getElementById(tableId);
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = 'none';
        td = tr[i].getElementsByTagName('td');
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toLowerCase().indexOf(searchTerm) > -1) {
                    tr[i].style.display = '';
                    break;
                }
            }
        }
    }
}

function submitRecord(button) {
    var row = button.closest('tr');
    var name = row.cells[0].innerText;
    var course = row.cells[1].innerText;
    var issueDate = row.cells[2].getElementsByTagName('input')[0].value;

    if (issueDate) {
        var confirmTable = document.getElementById('confirm-table');
        var newRow = confirmTable.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerText = name;
        cell2.innerText = course;
        cell3.innerText = issueDate;

        row.remove();
    } else {
        alert('Please select an issue date.');
    }
}