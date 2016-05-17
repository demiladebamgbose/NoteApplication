function NotesApplication(author){
	this.author=author;
	this.note = [];
	this.create= function(note_content){
		this.note.push(note_content);
	}

}