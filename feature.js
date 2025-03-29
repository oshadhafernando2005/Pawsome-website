let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

function toggleText(button) {
    let textDiv = button.nextElementSibling;
    if (textDiv.style.display === "none" || textDiv.style.display === "") {
        textDiv.style.display = "block";
        button.textContent = "See less";
    } else {
        textDiv.style.display = "none";
        button.textContent = "See more";
    }
}