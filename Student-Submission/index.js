//objects
const submissions = [
    {name: "Jane", score: 95, passed: true},
    {name: "Joe", score: 77, passed: true},
    {name: "Jack", score: 59, passed: false},
    {name: "Jill", score: 88, passed: true}
];

//create new objects with name and score
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

//delete object from <array> at [i]
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
deleteSubmissionByName(submissions, "Vonte")
console.log(submissions);

const editSubmission = (array, index, score) => {
    const edit = new Map()
   
    return submissions
}
;
