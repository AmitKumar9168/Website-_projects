document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value.toLowerCase();
    let email = document.getElementById('email').value.toLowerCase();
    let course = document.getElementById('course').value.toLowerCase();
    
    let table = document.getElementById('contentTable').getElementsByTagName('tbody')[0];
    let rows = table.getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        let rowName = cells[1].textContent.toLowerCase();
        let rowEmail = cells[2].textContent.toLowerCase();
        let rowCourse = cells[4].textContent.toLowerCase();
        
        if (rowName.includes(name) && rowEmail.includes(email) && rowCourse.includes(course)) {
            rows[i].classList.remove('hidden');
        } else {
            rows[i].classList.add('hidden');
        }
    }
});