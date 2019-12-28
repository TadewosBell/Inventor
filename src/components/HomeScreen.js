import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from '@ui-kitten/components';

export const FacebookIcon = (style) => (
    <Icon name='facebook' {...style} />
  );

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ean: null,
    };
  }

  componentDidMount(){
    const { ean } = this.props;
    console.log(ean);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen:{JSON.stringify(navigation.getParam('ean', 'NO-ID'))}</Text>
        <Button Icon={FacebookIcon}
          title="Go to Scanner"
          onPress={() => this.props.navigation.navigate('Scanner')}
        >Go To Scanner</Button>
        <Button Icon={FacebookIcon}
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        >Go To Login</Button>
      </View>
    );
  }
}