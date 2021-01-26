// Shorten card title
var truncateCardTitle = function(){
    var cardList = document.getElementsByClassName("card-title")
    for (var i = 0; i < cardList.length; i++){
        var cardTitleText = cardList[i].innerHTML;
        var newTitle = truncateString(cardTitleText, 32)
        cardList[i].innerHTML = newTitle
    }
}

var truncateString = function(str, num){
    if (str.length > num){
        return str.slice(0, num - 1) + "...";
    }
    return str
}

// Dark Theme sidebar 
var openButton = document.querySelector('.sidebarMini__btn');
var sidebarDiv = document.getElementById('sidebarMini');

openButton.addEventListener('click', function(){  
    sidebarDiv.classList.toggle('is-open')
})

var modeSwitch = document.getElementById('checkbox');
var bodyTag = document.querySelector('body')

modeSwitch.addEventListener('change', function(){
    bodyTag.classList.toggle('darkMode')
})


window.addEventListener("load", truncateCardTitle());