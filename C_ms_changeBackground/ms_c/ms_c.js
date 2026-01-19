const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 7000});
let theme_type = "";
wss.on('connection', function connection(ws){
    console.log("client connected");

    ws.on('message', function(message){
        data = JSON.parse(message);

        theme_type = data.theme;
        
        jsonObj = generateJSON(theme_type);

        ws.send(JSON.stringify(jsonObj));
    })
})

// Generates JSON object based on the received message
function generateJSON(message) {
  let theme = message;
  var randomNum = Math.floor(Math.random() * 3);
  if (typeof lastNum !== 'undefined' && lastNum == randomNum) {
    randomNum = (randomNum + 1) % 3;
  }
  lastNum = randomNum;

  let jsonObj;
  if (theme.toLowerCase() === "nature") {
    let natureThemes = [
      "https://images.unsplash.com/photo-1715151696404-aa4e214ade78?q=80&w=2729&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553123428-247ffbd12d90?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1714997219788-660af304f464?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    jsonObj = {
        "theme": "nature",
        "themeURL": natureThemes[randomNum]
    
      }
    };
  

  return jsonObj;
}
