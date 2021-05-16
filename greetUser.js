const user = {
    name: 'cuthbert',
    joined: '27 April 2020'
}

const joined = Date.parse(user.joined); //?
const dated = new Date();
const now = dated.getTime(); //?
const capitalise = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`; //?

function howLong(joined, now) {
    sumof = now-joined; //?
    return Math.floor(sumof /(1000*60*60*24));
}

function greetUser(name, callback) {
    return callback(capitalise(name));
}

const result = greetUser(user.name, (name) => {
    return `Hi there, ${name}. You've been here ${howLong(joined,now)} days.`; //?
});
