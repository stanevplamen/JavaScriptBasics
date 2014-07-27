define(["httpRequester"], function (httpRequester) {
    function getStudentsFromFile() {
        return httpRequester.getJSON("./scripts/data/students.js");
    }
	function getStudents() {		
	    return httpRequester.getJSON("http://localhost:3000/students");
	}
	function postStudent(newStudent) {
	    return httpRequester.postJSON("http://localhost:3000/students", newStudent);
	}
	function deleteStudent(id) {
	    return httpRequester.deleteJSON("http://localhost:3000/students/" + id);
	}
	return {
	    getStudents: getStudents,
	    postStudent: postStudent,
	    deleteStudent: deleteStudent,
	    getStudentsFromFile: getStudentsFromFile
	}
});