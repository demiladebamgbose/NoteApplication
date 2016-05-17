function NotesApplication(author){
	this.author=author;
	this.note = [];
	this.create= function(note_content){
		this.note.push(note_content);
	}
	this.listNotes = function(){
		var string;
		for(var i =0; i < this.note.length; i++){
			string='';
			string += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author' + this.author;
			console.log(string);
		}
	}

}