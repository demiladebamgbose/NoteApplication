function NotesApplication(author){
	this.author = author;
	this.note = [];
	this.create = function(note_content){
		if(note_content !== ''){
			this.note.push(note_content);
			console.log( note_content +" created" );
		}
	};
	this.listNotes = function(){
		var output_string;
		for(var i = 0; i < this.note.length; i++){
			output_string='';
			output_string += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author  ' + this.author+'\n';
			console.log(output_string);
		}
	};

	this.getNote = function(note_id){
		if(!(isNaN(note_id))){
			
			var output_string = this.note[note_id];
			console.log(output_string);
		}
	};

	this.search = function(search_text){
		var output_string='';
		output_string += 'Showing results for search  '+ search_text+ '\n';
		for(var i = 0; i < this.note.length; i++){
			if(this.note[i].toLowerCase().includes(search_text.toLowerCase())){
				output_string += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author  ' + this.author+ '\n';
				console.log(output_string);
			}
		}
	};

	this.delete = function(note_id){
		if(!(isNaN(note_id))){
			this.note.splice(note_id, 1);
			console.log( 'Note at ' +note_id+ ' deleted');
		}
	};

	this.edit = function(note_id, new_content){
		if(!(isNaN(note_id))){
			if(new_content !==''){
				this.note[note_id]=new_content;
				console.log(new_content +' saved');
			}
		}
	};

}