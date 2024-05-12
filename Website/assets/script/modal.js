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
            row.querySelectorAll("th, td").forEach(function(cell, index) {
                // Exclude the last column
                if (index !== row.querySelectorAll("th, td").length - 1) {
                    rowData.push(cell.textContent);
                }
            });

            // Get the table headings
            var headings = [];
            row.parentNode.querySelectorAll("th").forEach(function(heading, index) {
                // Exclude the last heading
                if (index !== row.parentNode.querySelectorAll("th").length - 1) {
                    headings.push(heading.textContent);
                }
            });

            // Construct printable HTML content with colspan 2 for each row, font size 23px, and box table styling
            var printableContent = "<style>table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid black; padding: 8px; } th { text-align: left; }</style><table>";
            for (var i = 0; i < rowData.length; i++) {
                printableContent += "<tr><th>" + headings[i] + "</th><td colspan='2'>" + rowData[i] + "</td></tr>";
            }
            printableContent += "</table>";

            // Create a hidden iframe to print the content
            var iframe = document.createElement('iframe');
            iframe.style.height = '0';
            iframe.style.width = '0';
            document.body.appendChild(iframe);
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.write('<html><head><title>Namaste Data-G</title></head><body>' + printableContent + '</body></html>');

            iframeDocument.close();

            // Print the content
            iframe.contentWindow.print();

            // Remove the iframe
            document.body.removeChild(iframe);
           
        });
    });
});