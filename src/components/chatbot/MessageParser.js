class MessageParser {

    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message){

        //register all characters as lowercase for ASCII
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            this.actionProvider.greet();
        }else if(lowerCaseMessage.includes("protein") || lowerCaseMessage.includes("antibody")){
            this.actionProvider.antibody();
        }else{
            this.actionProvider.defaultResponse();
        }
    }

}

export default MessageParser;