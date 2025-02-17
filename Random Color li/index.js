const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'magenta'];
document.addEventListener('click', (event)=>{
    if(event.target.closest('li')){
        let randomInt = Math.floor(Math.random() * 10);
        const listItem = event.target.closest('li');
        listItem.style.color = colors[randomInt];
    }
});