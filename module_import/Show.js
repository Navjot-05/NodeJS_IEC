class Show{
    constructor(name){
        this.name = name;
    }
    unravel(){
        return `Hello, ${this.name} 10`;
    }
}

let obj1 = new Show("qwerty");
// console.log(obj1.unravel());

const dt = ()=>{
    return new Date().toISOString();
}

let dte = dt();
console.log(dte);

module.exports = Show;