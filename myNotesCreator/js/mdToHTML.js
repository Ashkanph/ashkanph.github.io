
var files       = null,
    direction   = 'rtl';

function onChange(event) {
    files = event.target.files;
    
    // More than one file has been selected
    if(files.length > 1){
        document.getElementById('manualContent').innerHTML = '<bdi>شما ' +
        files.length + ' فایل را انتخاب کرده‌اید. برای تبدیل همزمان همه آنها به فرمت HTML، دکمه ذخیره را بفشارید.</bdi>';
        return;
    }

    // One file is selected
    readTheFile();
    
}

function readTheFile() {
    if(files == null || files.length < 1){
        alert('فایلی را برای نمایش انتخاب نکرده‌اید');
        return;
    }

    let file = files[0],
        reader = new FileReader();

    reader.onload = function(event) {
        document.getElementById('manualContent').innerHTML = '';
        
        let manualContent = document.getElementById('manualContent'),
            content       = injectToHtml(event.target.result).string;       
            
        document.getElementById('manualContent').innerHTML = content;
        document.getElementById('manual').className = direction;
    };
    reader.readAsText(file);
}

function refresh() {
    if(files.length > 1)
        return; // There is no preview for more than one file
    
    readTheFile();
}

function injectToHtml(response) {
    response = marked(response, {highlight: function (code) {
                                        return hljs.highlightAuto(code).value;
                                    }
                                });
    
    let text = document.createElement('div');
    text.id = "manualContent";
    let manual = document.createElement('div');

    let listEl = '<div id="list-of-titles"></div>';

    manual.id = "manual";
    manual.className = direction;
    manual.innerHTML = listEl + response;
    
    let content = addLinkToTitle(manual),
        titles = content.getElementsByTagName('h3'),
        listOfTitles = document.createElement('ul'),
        listText = "";

    listOfTitles.classList.add("list-body");
    // Create list of content
    for (let i=0; i < titles.length; i++) {
        let li  = document.createElement('li'),
            a   = document.createElement('a');
        a.href  = "#" + titles[i].id;
        // ▴
        a.innerHTML = (i+1) + "- " + titles[i].innerText;
        li.appendChild(a);
        listOfTitles.appendChild(li)
    }
    let listTitle = document.createElement('div');
    listTitle.classList.add("list-title");
    listTitle.innerHTML = "فهرست یادداشت‌ها" + '<span class="plus-icon"></span>';
    // Add list to the #list-of-titles
    content.getElementsByTagName('div')[0].appendChild(listTitle);
    content.getElementsByTagName('div')[0].appendChild(listOfTitles);
    manual.getElementsByTagName('div')[0].appendChild(listTitle);
    manual.getElementsByTagName('div')[0].appendChild(listOfTitles);

    text.appendChild(manual);

    return {
              element: content,
              string: text.innerHTML
           };
}

function addLinkToTitle(text) {
    var x = text.getElementsByTagName('h3');
    for (var i = 0; i < x.length; i++){
        let a = document.createElement('a');
        a.href = "#notes-desc";
        a.title = "برگشت به بالای صفحه";
        x[i].id = "part"+ i;
        x[i].classList.add('manual-anchor');
        x[i].innerHTML = x[i].innerHTML + " ";
        if(i != 0) // Don't add return button to the first title
            x[i].appendChild(a);
    }

    return text;
}

function changeDirection() {
    direction = 
        (document.getElementById('ltr-checkbox').checked) ? 'ltr' : 'rtl';

    document.getElementById('manual').className = direction;
}

function saveTheFile(file) {
    let reader = new FileReader();
    reader.onloadend = function(event) {
        if (event.target.readyState == FileReader.DONE) {            
            let content = injectToHtml(event.target.result).string;
            
            if(content == '' || content == null){
                alert('خطایی روی داد');
                return;
            }
            

            let theName = file.name.slice(0, -3), // fileName.slice(0, -3) removes last 3 chars ('.md')
                str     = content.replace(/\n/g, ''),
                blob    = new Blob([str], {type: "text/plain;charset=utf-8"});

            saveAs(blob, theName+".html");
        }
    };
  
    reader.readAsText(file);
}


function saveAsHTML() {

    if(files == null || files.length == null || files.length < 1){
        alert('فایلی را انتخاب نکرده‌اید.');
        return;
    }

    for (let file of files) {
        saveTheFile(file);
    }
    
}