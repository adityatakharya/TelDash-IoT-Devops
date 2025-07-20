const {Kafka} = require('kafkajs')
require('dotenv').config();

const kafka = new Kafka({
    clientId: "TelDash",
    brokers: [process.env.KAFKA_BROKER_URL],
})

const producer = kafka.producer();

module.exports = {producer};

