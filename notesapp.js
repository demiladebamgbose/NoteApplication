function NotesApplication(author){
	this.author=author;
	this.note = [];
	this.create = function(note_content){
		this.note.push(note_content);
	}
	this.listNotes = function(){
		var string;
		for(var i =0; i < this.note.length; i++){
			string += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author' + this.author+'\n';
			return(string);
		}
	}

	this.getNote = function(note_id){
		var string;
		string = this.note[note_id];
		return string;
	}

	this.search = function(search_text){
		var string;
		string += 'Showing results for search'+ search_text;
		for(var i = 0; i < this.note.length; i++){
			if(this.note[i].includes(search_text)){
				string += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author' + this.author+ '\n';
				return(string);
			}
		}
	}

	this.delete = function(note_id){
		if(!(note_id.isNaN)){
			this.note.splice(note_id, 1);
			return true;
		}
	}

	this.edit = function(note_id, new_content){
		if(!(note_id.isNaN)){
			if(new_content != ''){
				this.note[note_id]=new_content;
				return true;
			}
		}
	}

}