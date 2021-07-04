import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';

class Button extends React.Component {
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

    renderSubmit(value) {
        return this.language[value].text;
    }
    render() {
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }
}
// You can use this way to declarate the contextType
// Button.contextType = LanguageContext;

export default Button;