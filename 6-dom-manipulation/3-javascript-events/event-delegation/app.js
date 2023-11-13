// const removeBtns = document.querySelectorAll('li button');
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// for (let btn of removeBtns) {
//   btn.addEventListener('click', function (e) {
//     e.target.parentElement.remove();
//   });
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const newFriend = document.createElement('li');
//   const removeBtn = document.createElement('button');
//   removeBtn.innerText = 'Unfriend';
//   removeBtn.addEventListener('click', function (e) {
//     e.target.parentElement.remove();
//   });
//   newFriend.innerText = input.value;
//   newFriend.append(removeBtn);
//   input.value = '';
//   friendList.append(newFriend);
// });

const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');

friendList.addEventListener('click', function (e) {
  console.log(e);
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'LI') {
    e.target.classList.add('best-friend');
    const heart = document.createElement('span');
    heart.innerHTML += '&hearts;';
    e.target.prepend(heart);
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  addToFriendList(input.value);
  input.value = '';
});

function addToFriendList(firstName) {
  const newFriend = document.createElement('li');
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Unfriend';
  newFriend.innerText = firstName;
  newFriend.append(removeBtn);
  friendList.append(newFriend);
}
