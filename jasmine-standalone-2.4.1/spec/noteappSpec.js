// describe("NotesApplication",function(){
// 	it("should return 'invalid author' for an empty author", function(){
// 		newNote = new NotesApplication("");
// 		console.log( newNote);
// 		expect(newNote).toEqual({  });
// 	});
// });
var newNote;

// test for creating new objects

describe("NotesApplication", function(){
	beforeEach(function() {
		  newNote = new NotesApplication('Jude');
	});

	it("should initialize an empyt array, note", function(){
		expect(newNote.note).toEqual([]);
	});

	it("should have author Jude", function(){
		expect(newNote.author).toEqual("Jude");
	});

	
});

// test for create method 

describe("NotesApplication create function", function(){

	beforeEach(function() {
		 newNote = new NotesApplication('Jude');
		 newNote.create('First Note');
	});

	it("add First Note as the first item in note", function(){
		expect(newNote.note[0]).toEqual('First Note');
	});

	it('does not create an empty note', function(){
		expect(newNote.create('')).toEqual('Cannot create an empty note');
	});

	it('returns note created after creating note', function(){
		expect(newNote.create('a note')).toEqual('a note created');
	});

	it('sets  the last item in the note array to the note content', function(){
		newNote.create('Second Note');
		expect(newNote.note[newNote.note.length - 1]).toEqual('Second Note');
	});

});

// test for listNotes method
var anotherNote;
describe("NotesApplication listNotes function ", function(){
	beforeEach(function() {
		 newNote = new NotesApplication('Jude');
		 newNote.create('First Note');
		 newNote.listNotes();
		 anotherNote = new NotesApplication('Demi');
	});

	it('returns true after listing notes', function(){
		expect(newNote.listNotes()).toEqual(true);
	});

	it('returns note list empty if note is empty', function(){
		expect(anotherNote.listNotes()).toEqual('note list empty');
	});
}); 


// test for getNote method
describe("NotesApplication  getNote function", function(){
	beforeEach(function(){
		newNote = new NotesApplication('Jude');
		newNote.create('First Note');
		newNote.create('Second Note');
		newNote.create('Third Note');
	});

	it("should return invald note id  if note_id is not a number", function(){
		expect(newNote.getNote('a')).toEqual('Note Id Invalid.');
	});

	it("should return invald note id  if note_id is not an in dex in note ", function(){
		expect(newNote.getNote(6)).toEqual('Note Id Invalid.');
		expect(newNote.getNote(-5)).toEqual('Note Id Invalid.');
	});
});

// test for search method
describe("NotesApplication search function", function(){
	beforeEach(function(){
		newNote = new NotesApplication('Jude');
		newNote.create('First Note');
		newNote.create('Second Note');
		newNote.create('Third Note');
	});

	it("should return search_text not found if not found", function(){
		expect(newNote.search('ladies')).toEqual('No note matches ladies');
	});
	it("should return found search_text if found", function(){
		expect(newNote.search('Note')).toEqual('found Note');
	});

});


// test for edit method
describe("NotesApplication edit function", function(){
	beforeEach(function(){
		newNote = new NotesApplication('Jude');
		newNote.create('First Note');
		newNote.create('Second Note');
		newNote.create('Third Note');
	});
	it("should return note content saved for a valid note_id and a valid note content", function(){
		expect(newNote.edit(2,'I have been changed')).toEqual('I have been changed saved');
	});

	it("should return invalid note id  if note_id is not an index in note ", function(){
		expect(newNote.edit(6,"edit this")).toEqual('Note Id Invalid.');
		expect(newNote.edit(-5,"edit this")).toEqual('Note Id Invalid.');
	});

	it("should return Cannot update an empty note for an invalid note content ", function(){
		expect(newNote.edit(2,'')).toEqual('Cannot update an empty note');
	});

	it("should return invalid note id  if note_id is not an index in note and an invalid note content ", function(){
		expect(newNote.edit(6,"")).toEqual('Note Id Invalid.');
	});

	it("should return invald note id  if note_id is not a number", function(){
		expect(newNote.edit('a','change this')).toEqual('Note Id Invalid.');
	});

});

// test for delete method
describe("NotesApplication delete method", function(){
	beforeEach(function(){
		newNote = new NotesApplication('Jude');
		newNote.create('First Note');
		newNote.create('Second Note');
		newNote.create('Third Note');
		length = newNote.note.length;
	});

	it("should return invalid note id  if note_id is not an index in note ", function(){
		expect(newNote.delete(6)).toEqual('Note Id Invalid.');
		expect(newNote.delete(-5)).toEqual('Note Id Invalid.');
	});

	it("should return invald note id  if note_id is not a number", function(){
		expect(newNote.delete('a')).toEqual('Note Id Invalid.');
	});

	it("should reduce the lenth of note array by one", function(){
		newNote.delete(2);
		expect(newNote.note.length).toEqual(length - 1);
	});
});

