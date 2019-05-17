//totol family finance condition code calculation

var totalIncome = 0; //decison variable
var income,
  earningPerson,
  incomeSource,
  siblings,
  siblingsFee,
  bills,
  familyType;

proceed = () => {
  //collecting personality values
  var e = document.getElementById("txtIncome");
  income = e.options[e.selectedIndex].value; // getting values form array
  console.log("income", income);
  FuncIncome();
  //collecting personality values
  var e = document.getElementById("txtEarningPerson");
  earningPerson = e.options[e.selectedIndex].value; // getting values form array
  console.log("earningPerson", earningPerson);
  FuncEarningPerson();
  //Source of income
  FuncIncomeSources();
  //collecting personality values
  var e = document.getElementById("txtSiblings");
  siblings = e.options[e.selectedIndex].value; // getting values form array
  console.log("siblings", siblings);
  FuncSiblings();
  //Collective fee of Siblings
  FuncSiblingsFee();
  //Bill calculation
  FuncBillCal();
  //collecting personality values
  var e = document.getElementById("txtFamilyType");
  familyType = e.options[e.selectedIndex].value; // getting values form array
  console.log("familyType", familyType);
  FuncFamilyType();

  console.log("Ttl incm", totalIncome);
  localStorage.setItem("totalIncome", totalIncome);
  window.location.href = window.location.href =
    "https://firsttry-4edb6.firebaseapp.com/pages/institutePage.html";
  // "F:/Ahmed_Bilal/Education/6th_Semester_2019/CS%23508_Artificialintelligence/finalProject05042019/pracXi05052019/pages/institutePage.html";
};

FuncIncome = () => {
  if (income == "lac") {
    totalIncome = totalIncome + 60;
  } else if (income == "fifty") {
    totalIncome = totalIncome + 35;
  } else if (income == "below") {
    totalIncome = totalIncome + 25;
  } else {
    alert("An error occuured in income function.");
  }
};
FuncEarningPerson = () => {
  if (earningPerson == "one") {
    totalIncome = totalIncome + 10;
  } else if (earningPerson == "two") {
    totalIncome = totalIncome + 15;
  } else if (earningPerson == "more") {
    totalIncome = totalIncome + 20;
  } else {
    alert("An error occuured in income function.");
  }
};

//Proceed for hobby now
FuncIncomeSources = () => {
  //Hobby data collection
  if (document.getElementById("txtAgricultureLand").checked) {
    totalIncome = totalIncome + 5;
  }
  if (document.getElementById("txtFamilyBusiness").checked) {
    totalIncome = totalIncome + 5;
  }
  if (document.getElementById("txtCommercialProperty").checked) {
    totalIncome = totalIncome + 5;
  }
  if (document.getElementById("txtOther").checked) {
    totalIncome = totalIncome + 5;
  }
  console.log("After income sources", totalIncome);
};
FuncSiblings = () => {
  if (siblings == "two") {
    totalIncome = totalIncome - 3;
  } else if (siblings == "three") {
    //if(Income)
    totalIncome = totalIncome - 7;
  } else if (siblings == "more") {
    totalIncome = totalIncome - 10;
  } else {
    alert("An error occuured in siblings function.");
  }
};
FuncSiblingsFee = () => {
  siblingsFee = document.getElementById("txtSiblingsFee").value;
  if (siblingsFee.length == 0) {
    alert("Please fill out Siblings fee");
  } else {
    siblingsFee = Number(siblingsFee);
    if (siblingsFee > 5000 && siblingsFee < 15000) {
      totalIncome = totalIncome - 10;
    } else if (siblingsFee > 15000 && siblingsFee < 25000) {
      totalIncome = totalIncome - 15;
    } else if (siblingsFee > 100 && siblingsFee <= 5000) {
      totalIncome = totalIncome - 5;
    } else if (siblingsFee > 25000) {
      totalIncome = totalIncome - 20;
    } else {
      alert("Something went wrong in siblingsFee  section");
    }
  }
};
FuncBillCal = () => {
  bills = document.getElementById("txtBills").value;
  if (bills.length == 0) {
    alert("Please fill out Total bills paid last month");
  } else {
    bills = Number(bills);
    if (bills > 5000 && bills < 15000) {
      totalIncome = totalIncome - 14;
    } else if (bills > 15000 && bills < 25000) {
      totalIncome = totalIncome - 20;
    } else if (bills > 100 && bills <= 5000) {
      totalIncome = totalIncome - 8;
    } else {
      alert("Something went wrong in bills  section");
    }
  }
};
FuncFamilyType = () => {
  if (familyType == "joint") {
    totalIncome = totalIncome - 10;
  } else if (familyType == "separate") {
    totalIncome = totalIncome - 5;
  } else {
    alert("An error occuured in family type function.");
  }
};
