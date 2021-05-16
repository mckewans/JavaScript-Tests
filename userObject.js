const user = {
    name: 'Fred Balls',
    username: 'fred_balls',
    email: 'fred.balls@testies.com',
    details: {
        title: 'Programmer',
        age: 32
    }
};

const newStuff = {
    car: 'audi',
    color: 'red'
}

const { username, email}  = user; // destructure object into variables
// const { name, details: { title } } = user; // get sub level

function displayUser() {
    return(`Username: ${username}, Email: ${email}`); // using line 7
    //return(`Username: ${user.username}, Email: ${user.email}`);
    //console.log(`Name: ${user.name}`);
}

function displayBio({ name, details: { title } }) {
    return(`${name} is a ${title}`);
}

displayBio(user); //?
displayUser(); //?

Object.assign( {}, user, newStuff, { verfied: false }); //?
const x = {...user, ...newStuff, verfied:true }; //?