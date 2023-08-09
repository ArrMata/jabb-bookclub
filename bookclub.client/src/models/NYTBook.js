export class NYTBook {
  constructor(data) {
    this.bookImg = data.book_image
    this.title = data.title
    this.author = data.author
    this.description = data.description
    this.isbn10 = data.primary_isbn10
    this.isbn13 = data.primary_isbn13
  }
}