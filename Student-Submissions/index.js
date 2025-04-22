const submissions = [
    {name: "Jane", score: 96, passed: true},
    {name: "Joe", score: 77, passed: true},
    {name: "Jack", score: 59, passed: false},
    {name: "Jill", score: 88, passed: true},   
]

const addSubmission = (array, name, score) => { // calling the function
    const passed = score >= 60; // Determine passed
    const newSubmission = { name, score, passed }; // Create the new submission object
    array.push(newSubmission); // Add it to the array
};

addSubmission(submissions, "Vonte", 88)
addSubmission(submissions, "Zae", 96)
addSubmission(submissions, "Finess", 59)
console.log(submissions);

const deleteSubmissionsByIndex = (array, index) => {

}