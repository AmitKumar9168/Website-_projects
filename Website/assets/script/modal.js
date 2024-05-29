document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "view"
    var printLinks = document.querySelectorAll(".view");

    // Add event listener to each "Print" link
    printLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the row data
            var rowData = [];
            var row = this.parentNode.parentNode;
            row.querySelectorAll("td").forEach(function(cell) {
                rowData.push(cell.textContent);
            });

            // Get the table headings
            var headings = [];
            var headingCells = row.parentNode.parentNode.querySelectorAll("th");
            headingCells.forEach(function(heading, index) {
                // Exclude the last heading (Print column)
                if (index !== headingCells.length - 1) {
                    headings.push(heading.textContent);
                }
            });

            // Construct printable HTML content with the specified format
            var printableContent = "<style>body { font-family: Arial, sans-serif; } .print-container { width: 100%; max-width: 800px; margin: auto; } .print-container h2 { text-align: center; margin-bottom: 20px; } .print-container div.row { display: flex;justify-content:space-between; margin-bottom: 10px;margin-left:60px;gap:110px;} .print-container div.label { font-weight: bold; width: 20%; } .print-container div.value { width: 30%; }</style>";
            printableContent += "<div class='print-container'><h2>Details</h2>";
            for (var i = 0; i < rowData.length-1; i++) {
                printableContent += "<div class='row'><div class='label'>" + headings[i] + ":</div><div class='value'>" + rowData[i] + "</div></div>";
            }
            printableContent += "</div>";

            // Create a hidden iframe to print the content
            var iframe = document.createElement('iframe');
            iframe.style.height = '0';
            iframe.style.width = '0';
            document.body.appendChild(iframe);
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.write('<html><head><title>Data-Flow Tech Academy</title></head><body>' + printableContent + '</body></html>');
            iframeDocument.close();

            // Print the content
            iframe.contentWindow.print();

            // Remove the iframe
            document.body.removeChild(iframe);
        });
    });
});
