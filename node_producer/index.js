const {producer} = require('./services/kafka')
const {generateLogEvent} = require('./utils/generateEvent')

const run = async () => {
    await producer.connect();

    setInterval(async () => {
        const event = generateLogEvent();
        const message = {
            value: JSON.stringify(event)
        }

        await producer.send({
            topic: "teldash-event",
            messages: [message]
        })

        console.log("Produced: ", message.value)

    }, 3000)
}

run().catch((err) => {console.log("Error occured: ", err.message)})
