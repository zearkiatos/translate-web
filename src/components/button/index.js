import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';

class Button extends React.Component {
    static contextType = LanguageContext;
    language = {
        'english': {
            'text': 'Submit'
        },
        'spanish': {
            'text': 'Enviar'
        },
        'dutch': {
            'text': 'Voorleggen'
        }
    };
    render() {
        const text = this.language[this.context].text;
        return <button className="ui button primary">{text}</button>;
    }
}
// You can use this way to declarate the contextType
// Button.contextType = LanguageContext;

export default Button;