var dropbtn = document.querySelector('#button1');
var dropdownContent = document.querySelector('#myDropdown');
// Get the first dropdown items
var elements = dropdownContent.querySelectorAll('.dropdown-item');

// Add click event to the first dropdown button
dropbtn.addEventListener("click", function() {
    // toggle the display of the first dropdown content
    dropdownContent.classList.toggle("show");
    dropbtn.classList.toggle("dropbtn-opened");
});

// Add click event to the first dropdown items
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
        let link = this.getAttribute("data-link");
        // Update the text and link of the first button
        document.getElementById("button2").innerHTML = "Підписатися";
        document.getElementById("button2").setAttribute("data-link", link);
        document.getElementById("button2").disabled = false;
        // Hide the first dropdown content
        dropdownContent.classList.remove("show");
        dropbtn.classList.remove("dropbtn-opened");
    });
}

// Add click event to the first button
document.getElementById("button2").addEventListener("click", function() {
    let link = this.getAttribute("data-link");
    window.location.href = link;
});
// Get the second dropdown button
var dropbtn2 = document.querySelector('#button1_2');
// Get the second dropdown content
var dropdownContent2 = document.querySelector('#myDropdown_2');
// Get the second dropdown items
var elements2 = dropdownContent2.querySelectorAll('.dropdown-item');

// Add click event to the second dropdown button
dropbtn2.addEventListener("click", function() {
// toggle the display of the second dropdown content
dropdownContent2.classList.toggle("show");
dropbtn2.classList.toggle("dropbtn-opened");
});

// Add click event to the second dropdown items
for (var i = 0; i < elements2.length; i++) {
elements2[i].addEventListener("click", function() {
    let link = this.getAttribute("data-link");
    // Update the text and link of the second button
    document.getElementById("button2_2").innerHTML = "Підписатися";
    document.getElementById("button2_2").setAttribute("data-link", link);
    document.getElementById("button2_2").disabled = false;
    // Hide the second dropdown content
    dropdownContent2.classList.remove("show");
    dropbtn2.classList.remove("dropbtn-opened");
});
}

// Add click event to the second button
document.getElementById("button2_2").addEventListener("click", function() {
let link = this.getAttribute("data-link");
window.location.href = link;
});
