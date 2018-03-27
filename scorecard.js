class Student{
    constructor(firstname, lastname, subject){
        this.firstname= firstname;
        this.lastname = lastname;
        this.subject = ['English', 'Mathematics', 'Literature'];
    }

    getStudent(){
        return `Hello ${this.firstname} ${this.lastname}` ;
    }
   
}

class ScoreCard extends Student{
    constructor(firstname, lastname, englishScore, mathsScore, literatureScore){
        super(firstname, lastname);
        this.englishScore = englishScore;
        this.mathsScore = mathsScore;
        this.literatureScore = literatureScore;
        this.score = 0;
    }
    AverageScore(){
        return this. score = (this.englishScore + this.mathsScore + this.literatureScore)/3
    }

    getStudent(){

       return `Hello ${this.firstname} ${this.lastname},  Your scores are  English: ${this.englishScore} Mathematics: ${this.mathsScore} Literature: ${this.literatureScore} Average Score:  ${this.AverageScore()}`;
    }

   
}

const getScore = new ScoreCard('Annmary', 'Agunanna', 50, 60, 70);
const getName = new Student('Okafor', 'Njideka');
 console.log(getScore.getStudent());
 console.log(getName.getStudent());
