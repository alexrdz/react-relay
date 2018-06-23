import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { RaisedButton } from 'material-ui';

// injectTapEventPlugin();

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
          <RaisedButton 
            label={'Test Button'}
            primary={true}
            onClick={()=> console.log('test')}
          />
            <h1>TicTacTuring</h1>
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Template;