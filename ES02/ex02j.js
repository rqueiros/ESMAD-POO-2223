function showFriends(firstName, lastName, ...friends) {
  alert(`The ${firstName} ${lastName} has ${friends.length} friends!`);
}

showFriends('John', 'Doe');
showFriends('Joe', 'Blogs', 'Mary');
showFriends('Bill', 'Taylor', 'Alison', 'Mary', 'Rachel');
