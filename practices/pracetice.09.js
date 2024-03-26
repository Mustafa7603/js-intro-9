const { Actions } = require('./../utils/Actions.js')

function test1() {
    Actions.visitUrl('https://')
    .then(() => Actions.login('TechGlobal', 'Test1234'))
    .then(() => Actions.validateTitle('Sam'))
    .catch(err => console.log(err));
}
test1()

async function test2 () {
    try {
        await Actions.visitUrl('https://');
        await Actions.login('TechGlobal', 'Test1234');
        await Actions.validateTitle('BIGGG');
    } catch(err) {
        console.log(err);
    }
}

test2 ()