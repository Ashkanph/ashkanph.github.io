const PAGE_NOT_FOUND = "404: Not Found";

const getTitle = path => {
    switch (path) {
        case "/":
        case "":
            return "Ashkan P. Personal Webpage"
        case "/skills":
        case "/skills/":
            return "Skills"
        case "/blog":
        case "/blog/":
            return "نوشته‌ها"
        case "/book-recommendation":
        case "/book-recommendation/":
            return "Book Recommendation"
        case "/notes":
        case "/notes/":
            return "Notes"
        case "/siri_rebellion":
        case "/siri_rebellion/":
            return "شورش سیری"
        default:
            if(path.indexOf("/blog/") > -1) {
                return "نوشته‌ها";
            }
            return PAGE_NOT_FOUND;
    }
}

export { PAGE_NOT_FOUND, getTitle };
