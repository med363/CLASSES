class Human {
    name;
    job;
    skills;
    constructor(name, job, skills) {
        this.name = name;
        this.job = job;
        this.skills = skills;
    }
}

class Student extends Human {
    constructor(name, job, skills) {
        super(name, job, skills);
    }
    getJob(newJob) {
        this.job = newJob;
    }
    leaveJob() {
        this.job = 'unemployed';
    }
    learnNewSkill(newSkills) {
        this.skills.push(newSkills)
    }
    forgetSkill(skill) {
        this.skills = this.skills.filter((item) => {
            return item !== skill;
        })
    }
}

const person = new Student('med amine', 'developer', ['React']);

console.log(person.name)
console.log(person.job)
console.log(person.skills)

person.getJob('data analyst');
console.log(person.job)

person.leaveJob()
console.log(person.job)

console.log(person.skills)
person.learnNewSkill('Java')
person.learnNewSkill('Node.js')
console.log(person.skills)

person.forgetSkill('Java')
console.log(person.skills)


const arr = [1, 2, 3, 4, 5, 6];
console.log(arr)

const arr2 = arr.filter((item) => {
    return item > 2;
})

console.log(arr2)










// class Human{
//     name;
//     job;
//     skills = [];
//     constructor(){
//         this.name="Mohamed_amine";
//         this.job="Etudiant";
//         tab=new skills["React"];
//     };
// };


// class Student extends Human{
//     name;
//     job;
//     Skills=[];
//     constructor(){
//       this.super();
//       this.name="Mohamed_amine";
//       this.job="Etudiant";
//       tab=new skills["React"];
//      skill ='';
//     }

//     getJob() {
//         return job;
//     };

//     getLearnNewSkill(){
//         return learnNewSkill;
//     }

//     getForgetSkills(){
//         return forgetSkills;
//     }

//     getLeaveJob(){
//         return leavejob;
//     }

//     learnNewSkill(skill) 
//   {
//     for(let i=0;i < tab.length;i++){
//       tab.unshift(skill);
//     };
//   };

//   getJob(){
//     alert('${this.job} is web developer');
//   };

//   forgetSkill(skill){
//     trouve = false;
//     for(let i=0;i < tab.length;i++){
//       if(tab.equals(skill) && !trouve){
//         tab[i] = null;
//       };
  
  
//   };

//   leaveJob()
//     alert('${this.job} is umployment');
  
  





  

//     // Finish this class
  
//   };
//   class test{
//       public static void main(String [] args){

//   const me = new Student();
  
//   me.getJob();
   
  
  
//   me.learnNewSkill(skill) ;

  
//   me.forgetSkill(skill);
    

//   me.leaveJob();
//       };
    
// };
