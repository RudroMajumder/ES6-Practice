class Parent{
    constructor (){
        this.fatherName = 'bokasoda';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return `${this.name} ${this.fatherName}`
    }
}
const baby = new Child('arnold');
console.log(baby);
console.log(baby.fullName());