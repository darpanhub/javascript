var marks = 50 // integer literal
var temperature = 30.4 // float literal
var name = 'Mohammed' // string literal
var grade = 'A'  // character literal
var is_raining = true

console.log(marks)
console.log(name)
console.log(grade)
console.log (is_raining)

var first_name = 'Darpan'
var last_name ='singh'


console.log('My name is: ' +first_name +' '+ last_name)

var Name = 'darpan'
console.log('name is' , Name)

name = 'steve'
age = 29
console.log('name is :'+ name +' '+ 'and age = '+age)

var first_name = prompt('what is first name')
var last_name = prompt('what is last name')
alert('your nam is '+ first_name+ ' '+ last_name)
console.log('your name is ' +first_name+' '+ last_name)

var dob_darpan = 1999
var age_darpan = 2020 - dob_darpan
console.log(age_darpan)

var dob_steve = 2000
var age_steve = 2020 - dob_steve
console.log(age_steve)

var elder = age_darpan > age_steve
console.log(elder)

if (age_steve > age_darpan){
    console.log('steve is elder than darpan')
}
else{
    console.log('darpan is elder than steve')
}

age= 24
console.log(typeof (age))
name = 'darpan'
console.log(typeof (name))

//oprator precendence    'answer will be in true or false'
var present_year = 2020
var dob_darpan = 1999
var age_for_vote = 18
var eligible_or_not = present_year - dob_darpan >= age_for_vote 
console.log(eligible_or_not)

var a=5
a+=3
console.log(a)
// increment and decrement operators    ''// a++ // a= a+1''


var job = 'businees'
var name = 'rahul'

if (job == 'teacher'){
    console.log(name +' '+ 'is a '+' '+ job)
}
else if (job == 'engenier'){
    console.log(name + 'is a'+ job)
}
else {
    console.log('job not found')
}

var job = 'worker'

switch(job){
    case 'manager':
        console.log('salary : 20000')
        break

    case 'worker':
        console.log('salary : 15000')
        break
        
    default:
        console.log('no salary')    
}
 
var age = prompt('enter yourr age')

if (age > 12 && age <20){
    console.log('you are an teenager')

}
else if (age <12){
    console.log('you are a kid')
}
else{
    console.log('you are an adult')
}