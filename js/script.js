const users = [
  {
    name: 'Jane',
    gender: 'F',
    avatar: 'avatar.png',
    hobbies: [
      'Pets',
      'Makeup',
      'Dance'
    ]
  },
  {
    name: 'Soe',
    gender: 'M',
    avatar: 'avatar.png',
    hobbies: [
      'Pc Gaming',
      'Games',
      'Programming'
    ]
  },
  {
    name: 'Drake',
    gender: 'M',
    avatar: 'avatar.png',
    hobbies: [
      'Games',
      'Programming',
      'Piano'
    ]
  },
  {
    name: 'Aether',
    gender: 'M',
    avatar: 'avatar.png',
    hobbies: [
      'Games',
      'Programming',
      'Sneackers'
    ]
  }
]

window.addEventListener('load', () => {
  console.log('DOM is loaded');
  const searchButton = document.querySelector('#searchBtn');
  const results = document.querySelector('#results');
  const search = () => {
    const hobbie = document.querySelector('#hobbie').value;
    const genderField = document.querySelector('#gender');
    const selectedGender = genderField.selectedIndex;
    const gender = genderField.options[selectedGender].value;

    let resultsHTML = '';

    users.forEach(user => {
      if(gender == 'A' || gender == user.gender) {
        if(hobbie == '' || user.hobbies.includes(hobbie)) {
          resultsHTML += `
            <div class="person-row">
              <img src="images/avatar.png" alt="Image">
              <div class="personInfo">
              <div>${user.name}</div>
              <div>${user.hobbies}</div>
            </div>
            <button id="addFriendBtn">Add as friend</button>
            </div>
          `;
        }
      }
    });

    results.innerHTML = resultsHTML;
  }

  searchButton.addEventListener('click', search)

});