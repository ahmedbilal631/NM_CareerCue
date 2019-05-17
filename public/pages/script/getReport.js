//to get report back again

oldProceed = () => {
  var email = document.getElementById("txtEmail").value;
  var check = localStorage.getItem("userEmail");
  if (check == email) {
    window.location.href = window.location.href =
      "https://firsttry-4edb6.firebaseapp.com/pages/reportPage.html";
    // "file:///F:/Ahmed_Bilal/Education/6th_Semester_2019/CS%23508_Artificialintelligence/finalProject05042019/pracXi05052019/pages/reportPage.html";
  } else {
    alert("Sorry! Your data has been lost. Please re-esstimate quickly!");
  }
};
