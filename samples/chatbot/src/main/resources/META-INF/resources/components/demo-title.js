import {LitElement, html, css} from 'lit';

export class DemoTitle extends LitElement {

    static styles = css`
           
        .explanation {
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            text-align: justify;
            font-size: 20px;
        }
      
        .explanation img {
            max-width: 60%;
            display: block;
            float:left;
            margin-right: 2em;
            margin-top: 1em;
        }`

    render() {
        return html`
            <div class="explanation">
                    This demo shows how to build a chat bot powered by GPT 3.5 and retrieval augmented generation.
                    The description of the different accounts is ingested into a Redis database and relevant information
                    is sent to the LLM before answering the user.
            </div>
             
            <div class="explanation">
        
                <img src="images/chatbot-architecture.png"/>
                <ol>
                    <li>The user send a question to the application.</li>
                    <li>The application looks for relevant data in the Redis store.</li>
                    <li>The relevant data is retrieved and added to the user's question.</li>
                    <li>The extended question is sent to the LLM model.</li>
                    <li>The response is received and sent back to the user.</li>
                </ol>
            </div>
        `
    }


}

customElements.define('demo-title', DemoTitle);