document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("loadBooksBtn");
  const booksData = document.getElementById("booksData");

  button.addEventListener("click", async () => {
    try {
      const response = await fetch('/api/data');  // ← this must match the Express route!
      const books = await response.json();

      // Clear old data
      booksData.innerHTML = '';

      // Display books
      books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-item');
        bookDiv.innerHTML = `
          <h3>${book.name}</h3>
          <p>${book.description}</p>
        `;
        booksData.appendChild(bookDiv);
      });
    } catch (error) {
      console.error('Error fetching books:', error);
      booksData.innerHTML = '<p style="color:red;">Failed to load book data.</p>';
    }
  });
});