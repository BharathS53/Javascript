//Object.literals-
const  MySym=Symbol("key1")
const JsUser={
    name:"bharath",
    "full name":"bharath Siddesh",
    [MySym]:"key1",
    age:23,
    location:"bnglore",
    email:"bharaths9743@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[MySym]);

JsUser.email = "bharaths@gmail.com"
// Object.freeze(JsUser)
JsUser.email="bharathsfghjk@gmail.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo=function(){
    console.log(`hello JS user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
