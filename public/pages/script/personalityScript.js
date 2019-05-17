//Backend code for psychology or personality related information

//decalaration of variables
var personality = 0;
var socialBehavior, personalityType, communication, careerTaste;

proceed = () => {
  //collecting personality values
  var e = document.getElementById("txtPersonality");
  personalityType = e.options[e.selectedIndex].value; // getting values form array
  console.log(personalityType);
  FuncPersonality();

  //collecting social behavior values
  var e = document.getElementById("txtSocialBehavior");
  socialBehavior = e.options[e.selectedIndex].value; // getting values form array
  console.log("social Behavior", socialBehavior);
  FuncSocialBehavior();

  //collecting communication values
  var e = document.getElementById("txtCommunication");
  communication = e.options[e.selectedIndex].value; // getting values form array
  console.log("communication", communication);
  FuncCommunuication();
  //collecting CareerTaste values
  var e = document.getElementById("txtCareerTaste");
  careerTaste = e.options[e.selectedIndex].value; // getting values form array
  console.log("careerTaste", careerTaste);
  FuncCareertaste();

  console.log("personality", personality);
  localStorage.setItem("personality", personality);
  window.location.href = window.location.href =
    "https://firsttry-4edb6.firebaseapp.com/pages/financialPage.html";
  // "F:/Ahmed_Bilal/Education/6th_Semester_2019/CS%23508_Artificialintelligence/finalProject05042019/pracXi05052019/pages/financialPage.html";
};

FuncPersonality = () => {
  if (personalityType == "hardWorking") {
    personality = personality + 40;
  } else if (personalityType == "dull") {
    personality = personality + 10;
  } else if (personalityType == "cmd") {
    personality = personality + 20;
  } else if (personalityType == "excited") {
    personality = personality + 30;
  } else {
    alert("An error occuured in personality function.");
  }
};
FuncSocialBehavior = () => {
  if (socialBehavior == "alone") {
    personality = personality + 14;
  } else if (socialBehavior == "frndly") {
    personality = personality + 16;
  } else if (socialBehavior == "rude") {
    personality = personality + 10;
  } else if (socialBehavior == "legend") {
    personality = personality + 20;
  } else {
    alert("An error occuured in Social Behavior function.");
  }
};
FuncCommunuication = () => {
  if (communication == "good") {
    personality = personality + 20;
  } else if (communication == "inter") {
    personality = personality + 15;
  } else if (communication == "weak") {
    personality = personality + 10;
  } else {
    alert("An error occuured in communication function.");
  }
};
FuncCareertaste = () => {
  if (careerTaste == "bss") {
    personality = personality + 20;
  } else if (careerTaste == "job") {
    personality = personality + 15;
  } else if (careerTaste == "any") {
    personality = personality + 10;
  } else {
    alert("An error occuured in career taste function.");
  }
};
