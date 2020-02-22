function democlass(){
    
    //Public property
    this.fullName=undefined;

    //Private property
    let age=10;

    //Public method
    this.display=function(){
        //Access public property 
        //Exception Throw
        //console.log(fullName);//fullName is not defined
        console.log(this.fullName);

        //Access private property
        console.log(this.age);//undefined
        console.log(age);

        //Exception throw
        //this.setData is not a function
        //this.setData();
        
        setData();


    }

    //Private Methods 
    let setData=function({
        this.fullName="Asra Ansari";
        age=42;

        console.log(age);
    })

}

//Create an Instance of DemoClass
let demoClassObj=new demoClass();
    demoClassObj.fullName="Nahid";//property set
    console.log(demoClassObj.fullName);//property geyt`

    //demoClassObj.age=10;//So here we can access private property with the help of window object but when then value is assign
    //console.log1(demoClassObj.age);


     demoClassObj.display();

     //Exception Throw
     //You cant Access Private Method 
     //demoClassObj.setData();
     demoClassObj=null;

     demoClassObj.setData();
 
    //Exception Throw
    //Cannot read property display of null
     demoClassObj.display();