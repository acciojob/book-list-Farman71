let bookForm = document.getElementById("book-form");
let bookList = document.getElementById("book-list");

bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let isbn = document.getElementById("isbn").value.trim();

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Log values to check if inputs are being captured correctly
    console.log("Title:", title);
    console.log("Author:", author);
    console.log("ISBN:", isbn);

    let trow = document.createElement("tr");

    trow.innerHTML = `
        <td>${title}</td> 
        <td>${author}</td> 
        <td>${isbn}</td>
        <td><button class="delete-btn">✖</button></td>
    `;

    bookList.appendChild(trow);

    // ✅ Corrected way to clear input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

    console.log("Cleared:", title, author, isbn);
});

// ✅ Corrected delete functionality - Move outside submit event
bookList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.parentElement.remove();
    }
});
