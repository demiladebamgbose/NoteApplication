function NotesApplication(author){
if((typeof author == 'string') && ( author !== '')){
		this.author = author;
		this.note = [];
		this.create = function(note_content){
			if(note_content !== ''){
				this.note.push(note_content);
				return(note_content +" created" );
				
			}
			return 'Cannot create an empty note';
		};
		this.listNotes = function(){
			var output_string;
			if(this.note.length > 0){
				for(var i = 0; i < this.note.length; i++){
					output_string='';
					output_string += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author  ' + this.author+'\n';
					console.log(output_string);
					return true;
				}
			}
			else{
				return 'note list empty';
			}
		};

		this.getNote = function(note_id){
			if((typeof note_id == 'number') && ((note_id >= 0) && (note_id < this.note.length))){
				
				var output_string = this.note[note_id];
				console.log(output_string);
				return;
			}
			return 'Note Id Invalid.';
		};

		this.search = function(search_text){
			var output_string='';
			var found = true;
			output_string += 'Showing results for search  '+ search_text+ '\n';
			for(var i = 0; i < this.note.length; i++){
				if(this.note[i].toLowerCase().includes(search_text.toLowerCase())){
					output_string += 'Note ID: '+ i +'\n' + this.note[i] + '\n' + 'By Author  ' + this.author+ '\n';
					console.log(output_string);
					found = false;

				}
			}
			if(found){
				return ('No note matches '+ search_text );
			}
			return ('found '+search_text); 
		};

		this.delete = function(note_id){
			if(!(isNaN(note_id))  || (note_id >= this.note.length)){
				this.note.splice(note_id, 1);
				console.log( 'Note at ' +note_id+ ' deleted');
				return;
			}
			console.log('Note Id Invalid.');
		};

		this.edit = function(note_id, new_content){
			if(!(isNaN(note_id))  || (note_id >= this.note.length)){
				if(new_content !==''){
					this.note[note_id]=new_content;
					console.log(new_content +' saved');
					return;
				}
				else{
					console.log('Cannot update an empty note');
					return;
				}
			}
			console.log('Note Id Invalid.');
		};
	}
	else{
		return 'invalid author';
	}
}