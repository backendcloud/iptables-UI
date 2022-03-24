const { promises } = require("fs");

var Parsing = require("./parsing.js");




function message(message){
    //打印客户端监听的消息
    console.log(message);
    try {
        var Data = JSON.parse(message);
        if(Data){
            switch (Data.type) {
                case "list":
                    console.log("bin/wsClient.js: " + Data);
                    console.log(Data);
                    Parsing.sendList.call(this,Data.node);
                    break;
                case "SSHLog":
                    console.log("bin/wsClient.js: " + Data);
                    console.log(Data);
                    Parsing.SSHLog.call(this,Data.node);
                    break;
                case "SystemLog":
                    console.log("bin/wsClient.js: " + Data);
                    console.log(Data);
                    Parsing.SystemLog.call(this,Data.node);
                    break;
                case "perform":
                    console.log("bin/wsClient.js: " + Data);
                    console.log(Data);
                    Parsing.perform.call(this,Data.node,Data.Command);
                    break;
                case "refresh":
                    console.log("bin/wsClient.js: " + Data);
                    console.log(Data);
                    Parsing.refresh.call(this,Data.node,Data.data);
                    break;
                case "AddCommand":
                case "InsertCommand":
                    console.log("bin/wsClient.js: " + Data);
                    console.log(Data);
                    Parsing.AddCommand.call(this,Data.node,Data);
                    break;
                case "Empty":
                    console.log("bin/wsClient.js: " + Data);
                    console.log(Data);
                    Parsing.Empty.call(this,Data.node,Data.data);
                    break;
                default:
                    console.log("bin/wsClient.js: " + Data);
                    console.log(Data);
                    break;
            }
        }
    } catch (error) {
        
    }
    


}
function close(err){
    console.log("close",err)

}
function err(err){
    console.log("err",err)

}


function createCallback(ws){
    ws.on("message",message);
    ws.on("err",err);
    ws.on("close",close);
    ws.sendJSON = function(data){
        this.send(JSON.stringify(data));
      };

    ws.send(JSON.stringify({code:200,data:""}));
}

module.exports = createCallback;
