class ActionProvider {

    constructor(createChatBotMessage, setStateFunc) {
        
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;

    }

    greet(){
        const message = this.createChatBotMessage("Hello! How can I assist you?");
        this.updateChatbotState(message);
    }

    defaultResponse(){
        const message = this.createChatBotMessage("Sorry. I don't know what that means. Can you please try again?");
        this.updateChatbotState(message);
    }

    antibody(){
        const message = this.createChatBotMessage("Would you like to take a look at the Antibody and Protein Localization Page?");
        this.updateChatbotState(message);
    }

    updateChatbotState(message){
            this.setState((prev) => ({

                ...prev,
                messages: [...prev.messages, message],

            }));
        }
    }

export default ActionProvider;