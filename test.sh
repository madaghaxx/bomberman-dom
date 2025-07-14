#!/bin/bash

# Number of WebSocket clients to spawn
NUM_WS_CLIENTS=50

# Start WebSocket clients using Node.js
for ((i=1; i<=NUM_WS_CLIENTS; i++)); do
    node ws-client.js &
done

echo "$NUM_WS_CLIENTS WebSocket clients started."

# Optional: send repeated HTTP POSTs to port 3000
while true; do
    curl -s -X POST http://10.1.7.8:3000 \
        -H "Content-Type: application/json" \
        -d '{"data":"بٍٍٍٍََُُُِّّّْرٍٍٍٍََُُِِّّّْآٍٍٍَُّ"}' \
        > /dev/null
    sleep 0.1
done
