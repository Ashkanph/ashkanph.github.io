
/**
 * A self-invoking function to draw skills object on the page
 */
(() => {
    let listOfTitles = document.getElementById("list-of-titles");
    listOfTitles.addEventListener("click", function (e) {
        console.log('salam');
        let listBody = document.getElementsByClassName("list-body");
        
        if(listBody.length == 0)
            return;
        else listBody = listBody[0];

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
    // window.currentPageName = 'skills';

    // let mySkills = Object.keys(skills),
    //     parent = document.getElementById('skills');

    // mySkills.forEach((skill) =>{
    //     let el = document.createElement("div"),
    //         subs = returnFormattedSubs(skill),
    //         stars = returnFormattedStars(skill);

    //     el.className = "skill";
    //     subs = (subs === "") ? "" : "<div class='skill-body'>" + subs +"</div>"; 
    //     let plusIcon = (subs === "") ? "" : "<span class='plus-icon'></span>";
    //     el.innerHTML = "\
    //             <div class='skill-title' id='" + 
    //              removeAdditionalChars(skill) + "'>\
    //             " + plusIcon + "<i class='icon-check-square'></i>" + skill + stars + "</div>" + subs;

    //     parent.appendChild(el); 
    // });
    // initSkillTitleEvents();
})();

// /**
//  * Returns an unordered sublist of a given skill
//  * 
//  * @param  {String} skill 
//  * @return {String} 
//  */
// function returnFormattedSubs(skill) {
//     let subs = "<ul>";
//     if(skills[skill].subs !== undefined){
//         let allSubs = (skills[skill].subs).map((sub) => { 
//             return "<li>" + sub + "</li>";
//         });
//         allSubs = allSubs.join('');
//         subs = subs + allSubs + "</ul>";
//     }else
//         subs = '';

//     return subs;
// }

// /**
//  * Returns an span contains star icons of a given skill
//  * 
//  * @param  {String} skill 
//  * @return {String} 
//  */
// function returnFormattedStars(skill) {
//     let stars = "<span class='stars'>",
//         star = skills[skill].stars,
//         emptyStars = Math.floor(5 - star);
//     if(star !== undefined){
//         while(--star >= 0)
//             stars += "<i class='icon-star'></i>"
        
//         if(!Number.isInteger(star))
//             stars += "<i class='icon-star-half-o'></i>"
       
//         while(--emptyStars >= 0)
//             stars += "<i class='icon-star-o'></i>"

//         stars += "</span>";
//     }else
//         stars = '';

//     return stars;
// }


// /**
//  * Initialize skill title events
//  * 
//  */
// function initSkillTitleEvents() {
//     let skillTitles = document.getElementsByClassName('skill-title');
//     for(let skill of skillTitles) {
//         skill.onclick = function (e) {
//             if(e.currentTarget.nextSibling === null)
//                 return;

//             skill.focus();

//             let visible = e.currentTarget.nextSibling.style.display,
//                 clicked = false;
//             e.currentTarget.nextSibling.style.display = 
//                     (visible === 'none' || visible === '') ? 
//                     'block' : 'none';
//             if(visible === 'none' || visible === ''){
//                 document.styleSheets[0].addRule('#' + e.currentTarget.id + ' .plus-icon::before','transform: rotate(90deg)');
//                 document.styleSheets[0].addRule('#' + e.currentTarget.id + ' .plus-icon::after','transform: rotate(180deg)');
//             }
//             else{
//                 document.styleSheets[0].addRule('#' + e.currentTarget.id + ' .plus-icon::before','transform: rotate(0deg)');
//                 document.styleSheets[0].addRule('#' + e.currentTarget.id + ' .plus-icon::after','transform: rotate(0deg)');
//             }
//         };
//     }
// }


// /**
//  * Remove these characters from the given string: [, ,(,),+,-,[,]
//  * 
//  * @param {string} str 
//  */
// function removeAdditionalChars(str) {
//     return str.replace(/[| |(|)|+|-|\[|\]]/gi, '');
// }
