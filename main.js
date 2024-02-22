// Init Github 깃헙 객체 초기화
const github = new Github;
// Init UI UI개체 초기화
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Show loader
   ui.showLoader();

   // Make http call
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
        ui.clearLoader();
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        ui.clearLoader();
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
}); 

