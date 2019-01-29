var isBook = document.querySelector("#booksTitle #productTitle");

if (isBook) {
  var title = isBook.innerText;
  var doubanURL = "https://api.douban.com/v2/book/search\?q\=" + encodeURI(title);

  fetch(doubanURL)
    .then((data) => {
      console.log("book data: " + data.books);
      if (data.books.length !== 0) {
        // there could be multiple books match query
        // only use the first book rating for now
        var book = data.books[0];
        var numRaters = book.numRaters;
        var average = book.average;
        var bookLink = book.alt;
        var doubanContent = "<a href=>" + bookLink + ">" + average + " " + numRaters + " reviews </a>";

        var amazonRating = document.getElementById('averageCustomerReviews');
        amazonRating.append(doubanContent);
      }
    });
}

