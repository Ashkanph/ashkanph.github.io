
/**
 * A self-invoking function to draw skills object on the page
 */
(() => {
    let listOfTitles = document.getElementById("list-of-titles");
    let listBody = document.getElementsByClassName("list-body");
    if(listBody.length == 0)
        return;
    else listBody = listBody[0];
    listBody.style.display = 'block';

    listOfTitles.addEventListener("click", function (e) {
        listOfTitles.focus();

        let visible = listBody.style.display,
            clicked = false;
        listBody.style.display = 
                (visible === 'none' || visible === '') ? 
                'block' : 'none';
        if(visible === 'none' || visible === ''){
            document.styleSheets[0].addRule('#' + e.currentTarget.id + ' .plus-icon::before','transform: rotate(90deg)');
            document.styleSheets[0].addRule('#' + e.currentTarget.id + ' .plus-icon::after','transform: rotate(180deg)');
        }else{
            document.styleSheets[0].addRule('#' + e.currentTarget.id + ' .plus-icon::before','transform: rotate(0deg)');
            document.styleSheets[0].addRule('#' + e.currentTarget.id + ' .plus-icon::after','transform: rotate(0deg)');
        }
    });
})();
