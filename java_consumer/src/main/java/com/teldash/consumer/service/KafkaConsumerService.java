package com.teldash.consumer.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "teldash-event", groupId = "teldash-consumer-group")
    public void consume(String message) {
        System.out.println("📥 Received message: " + message);
    }
}
