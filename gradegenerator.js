function calculateGrade(marks){
    //Get user to input marks
    let marks=prompt("Enter students marks(0-100)")
    if (mark >79){
        return "A";
    }
    else if (marks <79 && marks >=60){
        return "B";

    }
    else if (marks <60 && marks >=49){
        return "C";
    }
    else if (marks <49 && marks >=40){
        return "D";
    }
    else if (marks<40){
        return "E";
    }
}
console.log()