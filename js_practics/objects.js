//var student = {
//    'name' : 'Shamji',
//    'age' : 29,
//    'contact' : '8460443874',
//    'job' : 'Python Developer'
//}
//
//document.write('Object student------->',student.name);
//document.write('<br>nameeeeeeeeeeeeeeeeeeeeeeee',student['name'].length)


//function student(name,age, subject){
//    this.name = name,
//    this.age = age,
//    this.subject = subject
//}
//
//student[name] = 'Shamji';
//
//var s1 = new student('Shamji1', 25, 'Math');
//var s2 = new student('S2', 27, 'Gujarati');
//
//
//document.write(s1.name);



//function student_result(name, sub1, sub2, sub3){
//    this.name = name;
//    this.perce = 0.0
//    this.percentage = function(sub1, sub2, sub3){
//        this.perce = (sub1+sub2+sub3)/3;
//    }
//}
//
//var stud1 = new student_result('Shamji', 78, 90, 95);
//stud1.percentage(78, 90, 95);
//document.write('Name---------', stud1.name);
//document.write('resultttttt-----------',stud1.perce);


function age_calacultor(date_of_birth){
    return 18;
}

function person(name, date_of_birth){
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.age = age_calacultor(this.date_of_birth);
}

var per = new person('Shamji','11-03-1989');
document.write('-----------',per.age);