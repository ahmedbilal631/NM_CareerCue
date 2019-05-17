//Script to generate report here

//Needed variables...
var success;
//Retrieved values
var userName = localStorage.getItem("userName");
var potential = Number(localStorage.getItem("potential"));
var institute = Number(localStorage.getItem("institute"));
var discipline = localStorage.getItem("discipline");
var personality = Number(localStorage.getItem("personality"));
var totalIncome = Number(localStorage.getItem("totalIncome"));
//Display some static information
document.getElementById("userNameId").innerHTML = userName;

//Display discipline and potential and personality
// discipline
if (discipline == "engg") {
  document.getElementById("disciplineId").innerHTML = "PRE-Engineering";
} else if (discipline == "med") {
  document.getElementById("disciplineId").innerHTML = "PRE-Medical";
} else if (discipline == "cs") {
  document.getElementById("disciplineId").innerHTML = "PRE-Computer Sciences";
} else if (discipline == "med") {
  document.getElementById("disciplineId").innerHTML = "PRE-Bussiness studies";
} else {
  alert("error in report discipline");
}
// potential
if (potential >= 75) {
  document.getElementById("potentialId").innerHTML = "Excellent!!";
} else if (potential >= 65) {
  document.getElementById("potentialId").innerHTML = "GOOD!!";
} else if (potential == 50) {
  document.getElementById("potentialId").innerHTML = "Not Bad!";
} else if (potential < 55) {
  document.getElementById("potentialId").innerHTML =
    "Needs hardwork and imprivements!";
} else {
  alert("error in report potential");
}

// personality
if (personality >= 80) {
  document.getElementById("personalityId").innerHTML = "Excellent!!";
} else if (personality >= 60) {
  document.getElementById("personalityId").innerHTML = "GOOD!!";
} else if (personality >= 45) {
  document.getElementById("personalityId").innerHTML = "Not Bad!";
} else if (personality < 45) {
  document.getElementById("personalityId").innerHTML =
    "Needs hardwork and imprivements!";
} else {
  alert("error in report personality");
}

//Desired analysis
//desired degree on the basis of income, potential, institute
success = Math.round(((potential + personality) / 200) * 100);
// alert(success);
if (success >= 80 && totalIncome >= 70 && institute <= 15) {
  document.getElementById("instituteId").innerHTML = "99% - Yes you can go!";
} else if (
  (success <= 80 || success >= 70) &&
  (totalIncome <= 70 || totalIncome >= 60) &&
  (institute <= 20 || institute >= 15)
) {
  document.getElementById("instituteId").innerHTML = "80% - Yes you can go!";
} else if (
  (success <= 70 || success >= 60) &&
  (totalIncome <= 60 || totalIncome >= 50) &&
  (institute <= 25 || institute >= 20)
) {
  document.getElementById("instituteId").innerHTML = "65% - Yes you can go!";
} else if (
  (success <= 60 || success >= 50) &&
  (totalIncome <= 60 || totalIncome >= 50) &&
  (institute <= 30 || institute >= 25)
) {
  document.getElementById("instituteId").innerHTML = "50% - Yes you can go!";
} else if (
  (success <= 50 || success >= 30) &&
  (totalIncome <= 50 || totalIncome >= 30) &&
  (institute <= 40 || institute >= 20)
) {
  document.getElementById("instituteId").innerHTML = "35% - Yes you can go!";
} else {
  document.getElementById("instituteId").innerHTML = "No chance";
}

//Desired institute analysis
if (success >= 80) {
  document.getElementById("wantId").innerHTML = "99% - Yes you can go!";
} else if (success <= 80 || success >= 70) {
  document.getElementById("wantId").innerHTML = "80% - Yes you can go!";
} else if (success <= 70 || success >= 60) {
  document.getElementById("wantId").innerHTML = "70% - Yes you can go!";
} else if (success <= 60 || success >= 50) {
  document.getElementById("wantId").innerHTML = "60% - Yes you can go!";
} else if (success <= 50 || success >= 40) {
  document.getElementById("wantId").innerHTML = "50% - Yes you can go!";
} else if (success <= 40 || success >= 30) {
  document.getElementById("wantId").innerHTML = "40% - Yes you can go!";
} else {
  document.getElementById("wantId").innerHTML = "No chance";
}

// income situation
if (totalIncome >= 80) {
  document.getElementById("incomeId").innerHTML = "100% -OK";
} else if (totalIncome <= 80 || totalIncome >= 70) {
  document.getElementById("incomeId").innerHTML = "80% -OK";
} else if (totalIncome <= 70 || totalIncome >= 60) {
  document.getElementById("incomeId").innerHTML = "70% - OK";
} else if (totalIncome <= 60 || totalIncome >= 50) {
  document.getElementById("incomeId").innerHTML = "60% - OK";
} else if (totalIncome <= 50 || totalIncome >= 40) {
  document.getElementById("incomeId").innerHTML = "50% - OK";
} else if (totalIncome <= 40 || totalIncome >= 30) {
  document.getElementById("incomeId").innerHTML = "40% - OK";
} else {
  document.getElementById("incomeId").innerHTML = "No chance";
}

//suggestions

//degree suggestions
if (discipline == "engg") {
  if (potential > 80) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for any engineering degree, You can go for computer sciences and business degrees also!";
  } else if (potential > 70 && potential <= 80) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for any engineering degree which has merit less than 70%, You can go for computer sciences and business degrees also!";
  } else if (potential > 60 && potential <= 70) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for any engineering degree which has merit less than 60%, You can go for computer sciences and business degrees also!";
  } else if (potential > 50 && potential <= 60) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for engineering by working hard and at your own risk, But you should go for computer sciences and business degrees also!";
  } else if (potential > 40 && potential <= 50) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for BS degree program.";
  } else if (potential > 30 && potential <= 40) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for any BS degree program or arts degree!";
  } else if (potential > 20 && potential <= 30) {
    document.getElementById("degreeSugId").innerHTML =
      "You need hard work to adjust yourself in the system to continiue your education!";
  } else {
    document.getElementById("degreeSugId").innerHTML = "No chance";
  }
} else if (discipline == "med") {
  if (potential > 80) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for MBBS, You can go for DVM or Pharmacy degrees also!";
  } else if (potential > 70 && potential <= 80) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for MBBS or BDS or DVM, You can go for Agriculture sciences!";
  } else if (potential > 60 && potential <= 70) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for agriculture sciences, You can go for Botany Zoology!";
  } else if (potential > 50 && potential <= 60) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for agriculture diplomas, But you should go for Botany and zoology!";
  } else if (potential > 40 && potential <= 50) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for BS Botany Zoology or Chemistry program.";
  } else if (potential > 30 && potential <= 40) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for any BS degree program or arts degree!";
  } else if (potential > 20 && potential <= 30) {
    document.getElementById("degreeSugId").innerHTML =
      "You need hard work to adjust yourself in the system to continiue your education!";
  } else {
    document.getElementById("degreeSugId").innerHTML = "No chance";
  }
} else if (discipline == "bss") {
  if (potential > 65) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for BBA, CA, ACCA!";
  } else if (potential <= 65 && potential > 45) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for Commerce, ACCA, BBA !";
  } else if (potential > 20 && potential <= 45) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for Arts degrees or commerce degrees!";
  } else {
    document.getElementById("degreeSugId").innerHTML = "No chance";
  }
} else if (discipline == "cs") {
  if (potential > 65) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for Software engineering, CS, IT,  BBA, CA!";
  } else if (potential <= 65 && potential > 45) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for CS, IT, Commerce, ACCA, BBA !";
  } else if (potential > 20 && potential <= 45) {
    document.getElementById("degreeSugId").innerHTML =
      "You can apply for Arts degrees or commerce degrees!";
  } else {
    document.getElementById("degreeSugId").innerHTML = "No chance";
  }
}

//institute essments
if (totalIncome >= institute) {
  document.getElementById("insttId").innerHTML =
    "The institute , you are thinking about is fine for you!";
} else if (totalIncome < institute) {
  document.getElementById("insttId").innerHTML =
    "The institute , you are thinking about is not fine for you, Please choose another institute where fee is less and fully funded scholarships are available, and Part time job opportunity is available to you!";
} else {
  document.getElementById("insttId").innerHTML = "No chance";
}
