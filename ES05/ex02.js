const student = {
  name: 'John Doe',
  course: 'POO',
  grade: 12,
};

// 2a
const getProperties = (obj) => {
  for (const key in obj) {
    console.log('2a', key);
  }
};
getProperties(student);

// 2b
const removeProperty = (obj, key) => {
  console.log('2b', obj);
  delete obj[key];
  console.log('2b', obj);
};
removeProperty(student, 'course');

// 2c
const calcObject = (obj) => {
  console.log('2c', Object.keys(obj));
  return Object.keys(obj).length;
};
console.log('2c', calcObject(student));
