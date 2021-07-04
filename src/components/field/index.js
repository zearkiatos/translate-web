import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';

class Field extends React.Component {
    static contextType = LanguageContext;
    language = {
        'english': {
            'text': 'Name'
        },
        'spanish': {
            'text': 'Nombre'
        },
        'dutch': {
            'text': 'Naam'
        }
    };
    render () {
        const text = this.language[this.context].text;
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;