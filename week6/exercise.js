// Write a function that assigns the task to the student based on user ID, return all the results in an array.

  
  // const newStudentAssignemnts = [
  //     {name: "jessika", uid: 1, taskName: "fix github issue 444", assignedTask: true},
  // ]

// const students = [
//     { name: "jessika", uid: 1 },
//     { name: "vinny", uid: 2 },
//     { name: "meg", uid: 3 },
//     { name: "jaye", uid: 4 },
//     { name: "corey", uid: 5 },
//     { name: "adam", uid: 6 },
//     { name: "rokhaya", uid: 7 },
//     { name: "peter", uid: 8 },
//     { name: "mauro", uid: 9 },
//   ];
  
//   const jobAssignments = [
//     { taskName: "fix github issue 1322", uid: 9 },
//     { taskName: "fix github issue 5666", uid: 8 },
//     { taskName: "fix frontend issue 123121", uid: 7 },
//     { taskName: "fix vscode issue 992223", uid: 6 },
//     { taskName: "fix html issue layout", uid: 5 },
//     { taskName: "fix dc issue 1323122", uid: 4 },
//     { taskName: "fix backend issue 2", uid: 3 },
//     { taskName: "fix github issue 130022", uid: 2 },
//     { taskName: "fix github issue 444", uid: 1 },
   
//   ];

// const newStudentAssignments = () => {
//     students.forEach(student => {
//         const task = jobAssignments.pop()
//         student.taskName = task.taskName
//         student.assignedTask = true
//     })
//     console.log(students)
// }

// newStudentAssignments()




// const newStudentAssignments = () => {
//     for (uid in students) {

//     }

// }

// newStudentAssignments()

// Joe's solution
// const formatData = (students, jobAssignments) => {
//     jobAssignments.sort((a, b) => a.uid - b.uid);
//     const formattedStudents = students.map((student, index) => {
//       if (student.uid === jobAssignments[index].uid) {
//         const formattedStudent = { ...student, ...jobAssignments[index] };
  
//         return formattedStudent;
//       }
//     });
//     return formattedStudents;
//   };

  // next issue, what if there are multiple tasks? use two for loops
  const students = [
    { name: "jessika", uid: 1 },
    { name: "vinny", uid: 2 },
    { name: "meg", uid: 3 },
    { name: "jaye", uid: 4 },
    { name: "corey", uid: 5 },
    { name: "adam", uid: 6 },
    { name: "rokhaya", uid: 7 },
    { name: "peter", uid: 8 },
    { name: "mauro", uid: 9 },
  ];
  
  const jobAssignments = [
    { taskName: "fix github issue 1322", uid: 9 },
    { taskName: "fix github issue 5666", uid: 8 },
    { taskName: "fix frontend issue 123121", uid: 7 },
    { taskName: "fix vscode issue 992223", uid: 6 },
    { taskName: "fix html issue layout", uid: 5 },
    { taskName: "fix dc issue 1323122", uid: 4 },
    { taskName: "fix backend issue 2", uid: 3 },
    { taskName: "fix github issue 130022", uid: 2 },
    { taskName: "fix github issue 444", uid: 1 },
    { taskName: "fix lunch", uid: 3 },
    { taskName: "fix breakfast", uid: 2 },
    { taskName: "fix dinner", uid: 1 },
  ];

  const formatData = (students, jobAssignments) => {
    jobAssignments.sort((a, b) => a.uid - b.uid);
    students.forEach(student => {
        student.tasks = [];
        student.assignedTask = true;
        jobAssignments.forEach(job => {
            if (job.uid == student.uid) {
                student.tasks.push(job.taskName)
            }
        })
    })
    console.log(students)
  }
  formatData(students, jobAssignments)

