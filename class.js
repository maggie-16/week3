class User{
    constructor(username,email,password)
    {
        this.username=username;
        this.email=email;
        this.password=password;
    }
    countuser()
    {
        document.writeln("No.of users:15");
    }
    register()
    {
        document.writeln("username:"+this.username);
    }

}
var x1=new User("sathvika","sath@gmail.com","abc09");
x1.countuser();
document.writeln();
x1.register();