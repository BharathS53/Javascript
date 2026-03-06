let myDate =new Date()  //date is object 
console.log(myDate.toString());
 

let myTimeStamp =Date.now()
console.log(Date.now()/1000);

let newDate=new Date()
console.log(newDate);
newDate.toLacaleString('default',{
    weekday:"long"
})