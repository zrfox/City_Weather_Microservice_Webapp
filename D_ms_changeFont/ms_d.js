const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 6005});

wss.on('connection', function connection(ws){
    console.log("client connected");

    ws.on('message', function(message){
        
        jsonObj = changeFontRoll();

        ws.send(JSON.stringify(jsonObj));
    })

})

function changeFontRoll()
{
  let font = "";
  var randomNum = Math.floor(Math.random() * 3);
  if (typeof lastNum !== 'undefined' && lastNum == randomNum) {
    randomNum = (randomNum + 1) % 3;
  }
  lastNum = randomNum;

  let jsonObj;

    let fontFamily = [
      "'Courier New', Courier, monospace",
      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande'",
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
    ]
    jsonObj = {
       
        "fontFamily": fontFamily[randomNum]
    
      }
    
  

  return jsonObj;
}
