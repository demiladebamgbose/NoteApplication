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


