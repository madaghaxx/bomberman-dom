const WebSocket = require('ws');

const SERVER_URL = 'ws://10.1.7.8:8080';
const NUM_CLIENTS = 100; // Change this to simulate more players
const MESSAGE_INTERVAL = 100; // ms between messages
const PAYLOAD = JSON.stringify({ action: 'move', direction: 'up' }); // Customize this

for (let i = 0; i < NUM_CLIENTS; i++) {
    const ws = new WebSocket(SERVER_URL);

    ws.on('open', () => {
        console.log(`Client ${i} connected`);

        setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(PAYLOAD);
            }
        }, MESSAGE_INTERVAL);
    });

    ws.on('error', (err) => {
        console.error(`Client ${i} error:`, err.message);
    });

    ws.on('close', () => {
        console.log(`Client ${i} disconnected`);
    });
}
