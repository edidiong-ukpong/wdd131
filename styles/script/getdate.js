document.addEventListener("DOMContentLoaded", function() {
    // Get the footer paragraphs
    var copyrightParagraph = document.querySelector('footer p:first-child');
    var lastModifiedParagraph = document.querySelector('footer p:nth-child(2)');
    
    // Get the current year
    var currentYear = new Date().getFullYear();
    
    // Set the copyright year
    copyrightParagraph.textContent = "Copyright © " + 2024 + "WDD 131 - Dynamic Web Fundamentals - Edidiong-ukpong";
    
    // Get the last modified date of the document
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toLocaleDateString("en-US", {
        year: "2024",
        month: "may",
        day: "6th"
    });
    
    // Set the last modified date
    lastModifiedParagraph.textContent = "Last modified: " + formattedDate;
});