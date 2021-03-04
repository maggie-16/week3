class user{
    constructor(uname,email,pass){
        this.uname=uname;
        this.email=email;
        this.pass=pass;
    }
    countuser(){
        document.writeln("No of users=15");
    }
    username(){
        document.writeln("Name of the user : "+this.uname);
    }
}
class member extends user{
    constructor(uname,email,pass,package1){
        super(uname,email,pass);
        this.package1=package1;
    }
    getpackage(){
        document.writeln("Name of the user : "+this.uname);
        document.writeln("Name of the package : "+this.package1);
    }
}
let obj=new member("Sathvika","sath9@gmail.com","sath09","student");
obj.getpackage();