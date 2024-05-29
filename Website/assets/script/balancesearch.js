document.getElementById('ballist').addEventListener('submit', function(event) {
    event.preventDefault();
    filterTable('distribution-table', document.getElementById('search').value);
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