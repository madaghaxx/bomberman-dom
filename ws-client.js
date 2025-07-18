const WebSocket = require("ws");

const SERVER_URL = "ws://10.1.12.4:3000";
const NUM_CLIENTS = 100; // Change this to simulate more players

for (let i = 0; i < NUM_CLIENTS; i++) {
  const ws = new WebSocket(SERVER_URL);

  ws.on("open", () => {
    console.log(`Client ${i} connected`);
    ws.send(
      JSON.stringify({
        type: "register",
        nickname: `player${i}`,
      })
    );
  });

}
