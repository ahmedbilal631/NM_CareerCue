//Script for institute information

var institute = 0; //taken as decison variable
var instituteType, lastMerit, fee, scholarship, partTimeJob;
//lets play
proceed = () => {
  //collecting personality values
  var e = document.getElementById("txtInstituteType");
  instituteType = e.options[e.selectedIndex].value; // getting values form array
  console.log("instituteType", instituteType);
  FuncInstType();
  //collecting personality values
  var e = document.getElementById("txtLastMerit");
  lastMerit = e.options[e.selectedIndex].value; // getting values form array
  console.log("lastMerit", lastMerit);
  FuncLastMerit();
  //collecting personality values
  var e = document.getElementById("txtFee");
  fee = e.options[e.selectedIndex].value; // getting values form array
  console.log("fee", fee);
  FuncFee();
  //collecting personality values
  var e = document.getElementById("txtScholarship");
  scholarship = e.options[e.selectedIndex].value; // getting values form array
  console.log("scholarship", scholarship);
  FuncScholarship();
  //collecting personality values
  var e = document.getElementById("txtPartTimeJob");
  partTimeJob = e.options[e.selectedIndex].value; // getting values form array
  console.log("partTimeJob", partTimeJob);
  FuncPartTimeJob();
  console.log("institute", institute);
  localStorage.setItem("institute", institute);
  window.location.href = window.location.href =
    "https://firsttry-4edb6.firebaseapp.com/pages/reportPage.html";
  // "F:/Ahmed_Bilal/Education/6th_Semester_2019/CS%23508_Artificialintelligence/finalProject05042019/pracXi05052019/pages/reportPage.html";
};

//retrieving totalIncome here to take correct decision
var income = Number(localStorage.getItem("totalIncome"));
FuncInstType = () => {
  if (instituteType == "public") {
    institute = institute + 20;
  } else if (instituteType == "private") {
    if (income >= 70) {
      institute = institute + 20;
    } else if (income >= 60) {
      institute = institute + 30;
    } else if (income >= 40) {
      institute = institute + 40;
    } else if (income < 40) {
      institute = institute + 50;
    } else {
      alert(
        "An error occuured in institute type sub-condition in private section function."
      );
    }
  } else if (instituteType == "semiGovernment") {
    if (income >= 70) {
      institute = institute + 15;
    } else if (income >= 60) {
      institute = institute + 20;
    } else if (income >= 40) {
      institute = institute + 30;
    } else if (income < 40) {
      institute = institute + 40;
    } else {
      alert(
        "An error occuured in institute type sub-condition in semi-Govt section function."
      );
    }
  } else {
    alert("An error occuured in institute type function.");
  }
};

//retrieving potential here to take correct decision
var potential = Number(localStorage.getItem("potential"));
FuncLastMerit = () => {
  if (lastMerit == "80") {
    //estimate by potential
    if (potential >= 70) {
      institute = institute + 7;
    } else if (potential >= 60) {
      institute = institute + 16;
    } else if (potential >= 40) {
      institute = institute + 22;
    } else if (potential < 40) {
      institute = institute + 25;
    } else {
      alert(
        "An error occuured in merit sub-condition in 80% merit section function."
      );
    }
  } else if (lastMerit == "75") {
    //estimate by potential
    if (potential >= 70) {
      institute = institute + 6;
    } else if (potential >= 60) {
      institute = institute + 12;
    } else if (potential >= 40) {
      institute = institute + 18;
    } else if (potential < 40) {
      institute = institute + 25;
    } else {
      alert(
        "An error occuured in merit sub-condition in 75% merit section function."
      );
    }
  } else if (lastMerit == "70") {
    //estimate by potential
    if (potential >= 70) {
      institute = institute + 4;
    } else if (potential >= 60) {
      institute = institute + 8;
    } else if (potential >= 40) {
      institute = institute + 14;
    } else if (potential < 40) {
      institute = institute + 25;
    } else {
      alert(
        "An error occuured in merit sub-condition in 70% merit section function."
      );
    }
  } else if (lastMerit == "60") {
    //estimate by potential
    if (potential >= 70) {
      institute = institute + 0;
    } else if (potential >= 60) {
      institute = institute + 5;
    } else if (potential >= 40) {
      institute = institute + 15;
    } else if (potential < 40) {
      institute = institute + 25;
    } else {
      alert(
        "An error occuured in merit sub-condition in 60% merit section function."
      );
    }
  } else {
    alert("An error occuured in last merit function.");
  }
};

FuncFee = () => {
  if (fee == "higher") {
    //estimate of income
    if (income >= 70) {
      institute = institute + 10;
    } else if (income >= 60) {
      institute = institute + 16;
    } else if (income >= 40) {
      institute = institute + 20;
    } else if (income < 40) {
      institute = institute + 25;
    } else {
      alert(
        "An error occuured in fee sub-condition in higher section function."
      );
    }
  } else if (fee == "high") {
    //estimate of income
    if (income >= 70) {
      institute = institute + 7;
    } else if (income >= 60) {
      institute = institute + 12;
    } else if (income >= 40) {
      institute = institute + 17;
    } else if (income < 40) {
      institute = institute + 25;
    } else {
      alert("An error occuured in fee sub-condition in high section function.");
    }
  } else if (fee == "avg") {
    //estimate of income
    if (income >= 70) {
      institute = institute + 4;
    } else if (income >= 60) {
      institute = institute + 8;
    } else if (income >= 40) {
      institute = institute + 14;
    } else if (income < 40) {
      institute = institute + 25;
    } else {
      alert("An error occuured in fee sub-condition in avg section function.");
    }
  } else if (fee == "normal") {
    //estimate of income
    if (income >= 70) {
      institute = institute + 2;
    } else if (income >= 60) {
      institute = institute + 5;
    } else if (income >= 40) {
      institute = institute + 10;
    } else if (income < 40) {
      institute = institute + 20;
    } else {
      alert(
        "An error occuured in fee sub-condition in normal section function."
      );
    }
  } else {
    alert("An error occuured in fee function.");
  }
};
FuncScholarship = () => {
  if (scholarship == "yes") {
    //estimate of income
    //estimate of potential
    if (income < 40 || potential >= 70) {
      institute = institute - 22;
    } else if (income >= 40 || potential >= 60) {
      institute = institute - 18;
    } else if (income >= 60 || potential >= 40) {
      institute = institute - 14;
    } else if (income >= 70 || potential < 40) {
      institute = institute - 8;
    } else {
      alert(
        "An error occuured in fee sub-condition in scholarship yes section function."
      );
    }
  } else if (scholarship == "no") {
    //if(Income)
    institute = institute + 0;
  } else if (scholarship == "maybe") {
    //estimate of income
    //estimate of potential
    if (income < 40 || potential >= 70) {
      institute = institute - 20;
    } else if (income >= 40 || potential >= 60) {
      institute = institute - 15;
    } else if (income >= 60 || potential >= 40) {
      institute = institute - 10;
    } else if (income >= 70 || potential < 40) {
      institute = institute - 5;
    } else {
      alert(
        "An error occuured in fee sub-condition in scholarship maybe section function."
      );
    }
  } else {
    alert("An error occuured in scholarship function.");
  }
};
FuncPartTimeJob = () => {
  if (partTimeJob == "yes") {
    //estimate of income
    institute = institute - 15;
  } else if (partTimeJob == "no") {
    //if(Income)
    institute = institute - 0;
  } else if (partTimeJob == "maybe") {
    institute = institute - 8;
  } else {
    alert("An error occuured in part time job function.");
  }
};
