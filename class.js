class student{
    constructor( sId, sName ){
        this.id = sId;
        this.name = sName;
        this.college = 'hogamara college'
    }
}
const student1 = new student( 12, 'karim' );
const student2 = new student( 13, 'baset');
console.log( student1, student2 );