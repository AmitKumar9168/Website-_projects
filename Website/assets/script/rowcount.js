function updateTotalCounts() {
    // Get all h5 elements that contain the text "Total :"
    const totalElements = document.querySelectorAll('h5');

    // Loop through each h5 element
    totalElements.forEach((totalElement, index) => {
        // Find the next table element
        const table = totalElement.nextElementSibling;

        if (table && table.tagName.toLowerCase() === 'table') {
            // Get the tbody of the table
            const tbody = table.querySelector('tbody');

            if (tbody) {
                // Get all the rows within the tbody
                const rows = tbody.getElementsByTagName('tr');

                // Count the number of rows
                const rowCount = rows.length;

                // Update the text content of the h5 element
                totalElement.textContent = 'Total : ' + rowCount;
            }
        }
    });
}

// Call the function to update the total counts
updateTotalCounts();