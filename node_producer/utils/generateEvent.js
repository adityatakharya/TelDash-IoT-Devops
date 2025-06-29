const {faker} = require('@faker-js/faker')

generateLogEvent = () => {
    return {
        type: faker.helpers.arrayElement(["call", "sms", "data", "iot"]),
        user: faker.phone.number(),
        time: new Date().toISOString(),
        location: faker.location.city(),
        message: faker.lorem.sentence(),
    }
}

module.exports = {generateLogEvent};