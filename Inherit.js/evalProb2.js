/* 
You need to create a Constructor function which will create object for Student details of the following properties:

name: It will store student name
roll_no: Stores the roll number
class: Stores the class
section: Stores the section
marks_of_5_subjects: It will store marks of science, maths, social science, english & hindi. You can store marks in this format:
*/


function Student(name, roll_no, studentClass, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = studentClass;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    
    this.printTop3Subjects = function () {
        
        const subjects = Object.keys(this.marks_of_5_subjects);
        const marks = Object.values(this.marks_of_5_subjects);

    
        const sortedSubjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);

        
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]} - ${this.marks_of_5_subjects[sortedSubjects[i]]}`);
        }
    };

    
    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}`);
        console.log(`| Roll no. - ${this.roll_no}`);
        console.log(`| Class    - ${this.class}`);
        console.log(`| Section  - ${this.section}`);
        
        
        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${this.marks_of_5_subjects[subject]}`);
        }

        
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, mark) => acc + mark, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
        console.log(`| Percentage - ${percentage.toFixed(1)} %`);
        console.log("+--------------------+");
    };
}


const student = new Student("Rahib", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});


student.printTop3Subjects();
student.printReportCard();
