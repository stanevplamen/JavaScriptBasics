define(["httpRequester"], function (httpRequester) {
	function getStudents() {		
		return httpRequester.getJSON("./scripts/data/students.js");
	}
	function getAnimals() {
	    return httpRequester.getJSON("./scripts/data/animals.js");
	}
	function getBooks() {
	    return httpRequester.getJSON("./scripts/data/books.js");
	}
	return {
	    getStudents: getStudents,
	    getAnimals: getAnimals,
	    getBooks: getBooks
	}
});