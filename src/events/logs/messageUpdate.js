
module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(oldMessage,newMessage) {
        if(newMessage.channel.type ==="dm" || newMessage.author.bot) return
        require('../../Utils/Logs/handlerMessageUpdate')(this.client,oldMessage,newMessage)

    }
}