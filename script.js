const notepad = document.getElementById('notepad');
const body = document.body;
//
function clearNote(){
    if(confirm('Are you sure you want to clear the note')){
        notepad.value = '';
    }
}
//save the note
function saveNote(){
    const text = notepad.value;
    const blob = new Blob([text],{type:'text/plain'});
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href=url;
    a.download = 'note.txt';
    a.click();
    URL.revokeObjectURL(url);
}
function changeTheme(){
    body.classList.toggle('dark-theme');
}
