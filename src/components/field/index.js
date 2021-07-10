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
        const field = this.context.language ? this.context.language : this.context;
        const text = this.language[field].text;
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;