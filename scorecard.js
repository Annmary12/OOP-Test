class Student{
    constructor(firstname, lastname){
        this.firstname= firstname;
        this.lastname = lastname;
    }

    getName(){
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

    Result(){
        super.getName();
       return `Your scores are \n English: ${this.englishScore}\n Mathematics: ${this.mathsScore} \n Literature: ${this.literatureScore} \n Average Score:  ${this.AverageScore()}`;
    }
}

const getScore = new ScoreCard('Annmary', 'Agunanna', 50, 60, 70);
getScore.Result();