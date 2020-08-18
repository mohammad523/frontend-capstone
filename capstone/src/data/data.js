const moment = require('moment');

//this is the format our application will be using to store dates
const dateFormat = mmoment => moment.format('MMMM DD, YYYY')

const messages = [
    {
        id: '100',
        fromId: '2xCuOb2VO5XS81avCaEgehCyVdz1',
        toId: 'HprkHVirG8bVjhLfK4Sk4R79DcM2',
        message: 'hey whats up?',
        createdAt: Date.now()
    },
    {   
        id: '101',
        fromId: 'HprkHVirG8bVjhLfK4Sk4R79DcM2',
        toId: '2xCuOb2VO5XS81avCaEgehCyVdz1',
        message: 'Nothing much bro, how about you???',
        createdAt: Date.now()



    }
]

module.exports = { messages }
export default messages