class School{
    constructor(name,level,numberOfStudents){
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
  
    }
   get name(){
    return this._name;
   }
   get level(){
    return this._level;
   }
   get numberOfStudents(){
    return this._numberOfStudents;
   }
   set numberOfStudents(input){
    if (typeof input==="number"){
    return this._numberOfStudents;
   }else{console.log('Invalid input: numberOfStudents must be set to a Number.')}
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    const index= Math.floor(Math.random()*(substituteTeachers.length-1))
    return substituteTeachers[index];
  
  }
  }
  
  class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,"Primary",numberOfStudents);
      this._level='primary';
      this._pickupPolicy=pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
   
  }
  const lorraineHansbury= new PrimarySchool('Lorraine Hansbury',514,"Students must be picked up by a parent, guardian, or a family member over the age of 13.")
  lorraineHansbury.quickFacts()
  PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']
  );
  
  class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams){
      super(name,"high",numberOfStudents);
      this._sportsTeams=sportsTeams;
    }
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  const alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);