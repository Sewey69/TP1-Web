notes = [{'titre': 'moday', 'contenu': 'faire du sport'}];

function appendNewNote(element){
    const left = document.getElementById('left');

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.id = notes.length - 1;

    const noteTitle = document.createElement('h2');
    noteTitle.textContent = element.titre;

    const noteContent = document.createElement('p');
    noteContent.textContent = element.contenu;

    const deleteButton = document.createElement('button');
    deleteButton.id = 'del';

    const deleteImage = document.createElement('img');
    deleteImage.src = './assets/trash.svg' 

    deleteButton.appendChild(deleteImage);

    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);
    noteDiv.appendChild(deleteButton);
    
    left.appendChild(noteDiv);
    return;
}

appendNewNote(notes[0]);

const addButton = document.getElementById('add');
addButton.addEventListener('click', ()=> {
    let Titre = document.getElementById('day').value;
    let contenu = document.getElementById('contenu').value;
    if(!Titre || !contenu){
        return;
    }
    let element = {'titre': Titre, 'contenu':contenu}
    notes.push(element);
    appendNewNote(element);
});

document.addEventListener('click', (event) => {
    if (event.target.closest('button#del')) {
        const noteDiv = event.target.closest('.note');
        const noteId = parseInt(noteDiv.id); 
        notes.splice(noteId, 1); 
        noteDiv.remove();
    }
});
