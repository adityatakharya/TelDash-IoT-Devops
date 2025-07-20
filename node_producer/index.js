const {producer} = require('./services/kafka')
const {generateLogEvent} = require('./utils/generateEvent')
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Kafka Producer is running"));
app.get("/healthz", (req, res) => res.status(200).send("OK"));

app.listen(PORT, () => {
  console.log(`Dummy HTTP server running on port ${PORT}`);
});

const run = async () => {
    console.log("BROKE URL", process.env.KAFKA_BROKER_URL)

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
