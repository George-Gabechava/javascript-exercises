const getTheTitles = function(books) {
    titleArray = [];
    bookAmount = books.length;
    i = 0;
    for (i; i < bookAmount; i++) {
        currentbook = books[i].title;

        titleArray.push(currentbook);
    }
    return titleArray;

    // should have used ' return array.map((book) => book.title); ' 

};

// Do not edit below this line
module.exports = getTheTitles;
