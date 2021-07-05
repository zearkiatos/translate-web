import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import ColorContext from '../../contexts/ColorContext';

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

    color = {

    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    renderSubmit(value) {
        return this.language[value].text;
    }
    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}
// You can use this way to declarate the contextType
// Button.contextType = LanguageContext;

export default Button;