//to save record indentifier with user name and email address

function Next() {
  var userName = document.getElementById("txtName").value;
  var userEmail = document.getElementById("txtEmail").value;
  var userCity = document.getElementById("txtCity").value;

  if (userEmail.length == 0) {
    alert("Please fill out the form carefully to proceed!");
  } else {
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userCity", userCity);

    // var currentLocation = window.location.pathname;
    // alert("we are at " + currentLocation);
    window.location.href = window.location.href =
      "https://firsttry-4edb6.firebaseapp.com/pages/primaryReq.html";
    // "F:/Ahmed_Bilal/Education/6th_Semester_2019/CS%23508_Artificialintelligence/finalProject05042019/pracXi05052019/pages/primaryReq.html";
    // var currentSite = window.location.hostname;
    //  var destination = "http://" + currentSite + "/wow.html";
    //  window.location.href = destination;
  }
}
