const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 8000});
let city = "";
var F_temp_feels_like;
var F_temp_min;
var F_temp_max;

var C_temp_feels_like;
var C_temp_min;
var C_temp_max;

wss.on('connection', function connection(ws){
    console.log("client connected");
    
    ws.on('message', function(message){ 
        data = JSON.parse(message);

        data.feels_like = parseInt(data.feels_like);
        data.temp_min = parseInt(data.temp_min);
        data.temp_max = parseInt(data.temp_max);

    if(data.city != city){
        console.log("city does not match")
        city = data.city;

        F_temp_feels_like = `${Math.trunc((data.feels_like)*9/5+32)}F`;
        F_temp_min = `${Math.trunc((data.temp_min)*9/5+32)}F`;
        F_temp_max = `${Math.trunc((data.temp_max)*9/5+32)}F`;

        C_temp_feels_like = `${data.feels_like}C`;
        C_temp_min = `${data.temp_min}C`;
        C_temp_max = `${data.temp_max}C`;
        }
            if(data.unit == "0"){
                data.feels_like = F_temp_feels_like;
                data.temp_max = F_temp_max ;
                data.temp_min = F_temp_min;

            }
            else{
                data.feels_like = C_temp_feels_like;
                data.temp_max = C_temp_max ;
                data.temp_min = C_temp_min;
            }       
        ws.send(JSON.stringify(data));
    
    })
})