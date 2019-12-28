import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as theme } from '@eva-design/eva';
import { AppNavigator } from './navigation.component';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    const loaded = Font.loadAsync({
      'opensans-semibold': require('./src/assets/fonts/opensans-semibold.ttf'),
      'opensans-bold': require('./src/assets/fonts/opensans-bold.ttf'),
      'opensans-extrabold': require('./src/assets/fonts/opensans-extra-bold.ttf'),
      'opensans-light': require('./src/assets/fonts/opensans-light.ttf'),
      'opensans-regular': require('./src/assets/fonts/opensans-regular.ttf'),
    }).then(()=> {
      this.setState({ fontLoaded:true  });
    });

  }

  render() {
    const {fontLoaded} = this.state;

    if( fontLoaded ) {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider mapping={mapping} theme={theme}>
          <AppNavigator/>
        </ApplicationProvider>
      </React.Fragment>
    );
    }
    else{
      return(
        <AppLoading/>
      );
    }
  }
}
