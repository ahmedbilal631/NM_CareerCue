var x = 10;
var y = "saif";

// Get a reference to the database service
var database = firebase.database();
function writeUserData(userId, name, email, imageUrl) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
}
writeUserData(39, "Saif", "sdj@gmail.com", "jskhdjk.jpg");
run = () => {
  //hey there
};
run();
