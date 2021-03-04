let a=[1,2,3,4,5]
document.write(a[0]);
[a,b]=[25,30]
document.write(a);
document.write(b);
[a,b,...n]=[25,30,35,40,45,50];
document.write(n);
let person = {
    fName: 'John',
    lName: 'Doe'
    };
    let fName = person.fName;
    let lName = person.lName; 
    document.write(fName);
    document.write(lName);
    let {
        fName: fname, 
        lName: lname,
        middlename='Edward'
    } = person;
    document.write(middlename);
    let obj3 = {
        name:"mahesh",
        details:{
            salary:10000,
            age:25
        }
    }
    document.write(obj3.details.age);
