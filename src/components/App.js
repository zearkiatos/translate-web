import React from 'react';
import UserCreate from './userCreate';
import LanguageContext from '../contexts/LanguageContext';
import LanguageStore from '../stores/languageStore';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector';

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    };

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />

                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
                <div>
                    Select a Language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                    <i className="flag es" onClick={() => this.onLanguageChange('spanish')} />
                </div>
                <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;