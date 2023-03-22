const isEmpty = (obj) => Object.keys(obj).length === 0;

const schedule = {};
alert(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
alert(isEmpty(schedule)); // false
