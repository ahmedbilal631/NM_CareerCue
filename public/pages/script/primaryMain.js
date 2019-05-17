//To get all the basic eductional information

//Defining Variables
var totalMarks, obtainedMarks, psTotalMarks, psObtainedMarks;
var want, discipline, particularSub, interest, hobby;
var potential = 0;
//Form validation manually here
validator = () => {
  //Collecting want value from user
  var e = document.getElementById("txtWant");
  want = e.options[e.selectedIndex].value; // getting values form array
  console.log(want);

  //Collecting discipline values from user
  var e = document.getElementById("txtDiscipline");
  discipline = e.options[e.selectedIndex].value; // getting values form array
  console.log(discipline);

  //validation for final exams marks result
  totalMarks = Number(document.getElementById("txtTotalMarks").value);
  obtainedMarks = Number(document.getElementById("txtObtainedMarks").value);

  //validation for particular subject marks result
  psTotalMarks = Number(document.getElementById("txtPSTotalMarks").value);
  psObtainedMarks = Number(document.getElementById("txtPSObtainedMarks").value);

  //validation
  if (totalMarks == 0 || obtainedMarks == 0) {
    alert("Please fill out the form carefully!.");
  } else if (psTotalMarks == 0 || psObtainedMarks == 0) {
    alert("Please fill out the PS form carefully!.");
  } else {
    particularSubFunc();
  }
  localStorage.setItem("discipline", discipline);
  localStorage.setItem("potential", potential);
  window.location.href = window.location.href =
    "https://firsttry-4edb6.firebaseapp.com/pages/personalityPage.html";
  // "F:/Ahmed_Bilal/Education/6th_Semester_2019/CS%23508_Artificialintelligence/finalProject05042019/pracXi05052019/pages/personalityPage.html";
};
//particular subject validation
function particularSubFunc() {
  var e = document.getElementById("txtParticularSub");
  particularSub = e.options[e.selectedIndex].value; // getting values form array
  console.log("particularSub", particularSub);
  if (discipline == "med" && particularSub == "math") {
    alert(
      "Please choose your particular subject according to your discipline!"
    );
  } else if (discipline != "med" && particularSub == "bio") {
    alert(
      "Please choose your particular subject according to your discipline!"
    );
  } else {
    Next();
  }
}

function Next() {
  //Matching want and discipline
  if (want == discipline) {
    potential = potential + 50;
    proceedX();
  } else if (want == "cs" && discipline == "engg") {
    potential = potential + 45;
    proceedX();
  } else if (want == "bss" && discipline == "engg") {
    potential = potential + 45;
    proceedX();
  } else if (want == "med" && discipline == "engg") {
    alert(
      "The profession you have choosen is not under scope of your study discipline. Please choose your want and subject accurately!"
    );
  } else if (want == "cs" && discipline == "med") {
    alert(
      "If you wanted go for computer sciences, You will have to pass Mathematics exam first in intermediate level.."
    );
  } else if (want == "cs" && discipline == "bss") {
    alert(
      "If you wanted go for computer sciences, You will have to pass inter in ICS (with Physics or Statistics) or F.Sc (Pre-Engineering).."
    );
  } else if (want == "bss" && discipline == "engg") {
    potential = potential + 45;
    proceedX();
  } else if (want == "bss" && discipline == "cs") {
    potential = potential + 40;
    proceedX();
  } else if (want == "bss" && discipline == "med") {
    alert(
      "If you wanted go for Business studies, You will have to pass inter with mathematics.."
    );
  } else if (want == "engg" && discipline == "med") {
    alert(
      "If you wanted go for Business studies, You will have to pass inter with biology.."
    );
  } else if (want == "engg" && discipline == "cs") {
    alert(
      "If you wanted go for Engineering studies, You will have to pass inter with Chemistry.."
    );
  } else if (want == "engg" && discipline == "bss") {
    alert(
      "If you wanted go for Engineering studies, You will have to pass intermediate in F.Sc(Pre-Engineering).."
    );
  } else {
    alert("Choose subject and want carefully...!!");
  }
  console.log("Discipline", potential);
}

//Proceed next to calculate marks
proceedX = () => {
  //total marks in final percentage
  var percentage = obtainedMarks / totalMarks;
  percentage = Math.round(percentage * 20);
  potential = potential + percentage;
  console.log("potential After TM", potential);

  //total marks in particular subject percentage
  var psPercentage = psObtainedMarks / psTotalMarks;
  psPercentage = Math.round(psPercentage * 10);
  potential = potential + psPercentage;
  //   console.log(psPercentage);
  console.log("potential after PS", potential);

  proceedForInterest();
};

//calculations for interested subjects
proceedForInterest = () => {
  //Interest data collection
  if (document.getElementById("txtMath").checked) {
    if (discipline == "med") {
      potential = potential + 0;
    } else {
      potential = potential + 3;
    }
  }
  if (document.getElementById("txtBio").checked) {
    if (discipline != "med") {
      potential = potential + 0;
    } else {
      potential = potential + 3;
    }
  }
  if (document.getElementById("txtComp").checked) {
    if (discipline == "cs") {
      potential = potential + 2;
    } else {
      potential = potential + 1;
    }
  }
  if (document.getElementById("txtChe").checked) {
    if (discipline == "cs" || discipline == "bss") {
      potential = potential + 0;
    } else {
      potential = potential + 1;
    }
  }
  if (document.getElementById("txtPhy").checked) {
    if (discipline == "bss") {
      potential = potential + 0;
    } else {
      potential = potential + 1;
    }
  }
  if (document.getElementById("txtBss").checked) {
    if (discipline == "bss") {
      potential = potential + 2;
    } else {
      potential = potential + 1;
    }
  }
  console.log("After interest potential", potential);
  proceedForHobby();
};

//Proceed for hobby now

proceedForHobby = () => {
  //Hobby data collection
  if (document.getElementById("txtSubPrac").checked) {
    potential = potential + 3;
  }
  if (document.getElementById("txtBookReading").checked) {
    potential = potential + 0.5;
  }
  if (document.getElementById("txtGardening").checked) {
    potential = potential + 1;
  }
  if (document.getElementById("txtTV").checked) {
    potential = potential + 0;
  }
  if (document.getElementById("txtNews").checked) {
    potential = potential + 0.5;
  }
  if (document.getElementById("txtGames").checked) {
    potential = potential + 1;
  }
  console.log("After Hobby potential", potential);
};
