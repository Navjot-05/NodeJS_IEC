// function fetchData(callback){
//     setTimeout(() => callback("data is recalled"),1000);
// }
// const fetchDatapromise=(resolve)=> {
//     return new Promise();
// };


class Test{
    constructor(name){
        this.name=name;
    }
    show()
    {
        console.log(this.name);
    }
}
let s1 = new Test("Navjot");