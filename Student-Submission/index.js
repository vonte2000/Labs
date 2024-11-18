const submissions = [
    {name: "Jane", score: 95, passed: true},
    {name: "Joe", score: 77, passed: true},
    {name: "Jack", score: 59, passed: false},
    {name: "Jill", score: 88, passed: true}
];

const addSubmission = (array, newName, newScore) => {
    const submission = {name: newName, score: newScore}
    if (newScore >= 60) {
        submission.passed = true 
    } else {
        submission.passed = false
    }
    array.push(submission);
}
addSubmission(submissions, "Vonte", 90)
console.log(submissions)

const deleteSubmissionByIndex = (array, index) => {
    return submissions.splice(array, index)
}
deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
    //finds index of object with given name
    const index = array.findIndex(obj => obj.name === name);

    //if object is found, remove it
    if (index !== -1) {
        submissions.splice(index, 1);
    }
}
deleteSubmissionByName(submissions, "Jack")
console.log(submissions);

const editSubmission = (array, index, score) => {
    const indexToUpdate = [];
    const newScore = 0;
    submissions.score == newScore;
   
}
console.log(editSubmission(submissions, 2, 88));
