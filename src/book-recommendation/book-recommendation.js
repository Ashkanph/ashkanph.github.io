
// Adding books' recommendations to the page
fillBooks();

/**
 * A function to convert Latin numbers to Persian numbers
 *
 * @param {string} s - the given string
 *
 * @returns {string} An string with coverted latin numbers to Persian
 */
function latToPerNumbers(s) {
    if(s == null){
        console.log('The string you passed to LatToPerNumbers was undefined!');
        return '';
    }

    if (typeof s !== 'string')
        s = s.toString();

    var pNums = [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ];
    for (let j = 0; j < 10; j++)
        if (s.indexOf(j.toString()) > -1) {
            var regex = new RegExp(j, 'g');
            s = s.replace(regex, pNums[j]);
        }
    return s;
}


/**
 * A function to convert Array of books to html and wrtite it to the page
 *
 */
function fillBooks(){    
    let bookIndex   = 1,
        content = makeList(books);
    for (let book of books) {
        if(book['pname'] && book['type'] == 'book'){
            content += (bookIndex !== 1) ? '<hr>' : '';
            content += '<section class="book">\
                            <span class="book-title" id="' + book.oname + '">\
                                <em>' + latToPerNumbers(bookIndex++) + '. \
                                    <strong>' +  book['pname'] + 
                                            ' (' + book['oname'] + ')</strong>\
                                </em>\
                                <em>نویسنده: \
                                    <strong>' + book['creator'] + 
                                                        '</strong>&nbsp;&nbsp;\
                                    <a href="#notes-desc"\
                                       class="return-to-top" title="برگشت به بالای صفحه">\
                                    </a>\
                                </em>\
                            </span>';
            if(book.imageAddress)
                content += "<img src='http://www.ashkanph.ir/images/books/" + 
                            book['imageAddress'] +"'>";

            content     += '<p>' + book['description'] + '</p>\
                        </section>';
        }
    }

    document.getElementById('books').innerHTML = content;
}

/**
 * A function to make HTML list of the books
 *
 * @returns {string} The HTML list of the books
 */
function makeList() {
    let content = '',
        bookIndex = 1;

    content += '<div id="notes-desc">';
    content += " به مرور کتاب‌های بیشتری را در این صفحه معرفی می‌کنم (ترتیب معرفی‌ها مشخص‌کننده چیزی نیست).";
    content += '</div>\
            <div id="list-of-titles">\
                <div class="list-title">\
                    فهرست کتاب‌ها<span class="plus-icon"></span>\
                </div>\
            <ul class="list-body">';

    for (let book of books) {
        if(book.pname && book.type == 'book')
            content += '<li><a href="#' + book.oname + '">' + 
                        latToPerNumbers(bookIndex++) + '. ' + 
                        book.pname + '</a></li>';
    }
    content += '</ul></div>';
    return content;
}