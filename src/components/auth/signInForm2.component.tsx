import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Button,
  Icon,
} from '@ui-kitten/components';
import {
  textStyle,
  ValidationInput,
} from '../common';
import {
  EyeOffIconFill,
  PersonIconFill,
} from '../../assets/icons';
import {
  NameValidator,
  PasswordValidator,
} from '../core/validators';
import { SignInForm2Data } from './type';

interface ComponentProps {
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onDataChange: (value: SignInForm2Data | undefined) => void;
}

export type SignInForm2Props = ThemedComponentProps& ViewProps & ComponentProps;

interface State {
  username: string | undefined;
  password: string | undefined;
}

class SignInForm2Component extends React.Component<SignInForm2Props, State> {

  public state: State = {
    username: undefined,
    password: undefined,
  };

  public componentDidUpdate(prevProps: SignInForm2Props, prevState: State) {
    const oldFormValid: boolean = this.isValid(prevState);
    const newFormValid: boolean = this.isValid(this.state);

    const isStateChanged: boolean = this.state !== prevState;
    const becomeValid: boolean = !oldFormValid && newFormValid;
    const becomeInvalid: boolean = oldFormValid && !newFormValid;
    const remainValid: boolean = oldFormValid && newFormValid;

    if (becomeValid) {
      this.props.onDataChange(this.state);
    } else if (becomeInvalid) {
      this.props.onDataChange(undefined);
    } else if (isStateChanged && remainValid) {
      this.props.onDataChange(this.state);
    }
  }

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onUsernameInputTextChange = (username: string) => {
    this.setState({ username });
  };

  private onPasswordInputTextChange = (password: string) => {
    this.setState({ password });
  };

  private onSignIn = (event: object) => {
    const {username, password} = this.state;
    console.log(password);
    console.log(username);
    this.props.navigation.navigate('Home');
  }

  private isValid = (value: SignInForm2Data): boolean => {
    const { username, password } = value;

    return username !== undefined
      && password !== undefined;
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.formContainer}>
          <ValidationInput
            textStyle={textStyle.paragraph}
            placeholder='User Name'
            icon={PersonIconFill}
            validator={NameValidator}
            onChangeText={this.onUsernameInputTextChange}
          />
          <ValidationInput
            style={themedStyle.passwordInput}
            textStyle={textStyle.paragraph}
            placeholder='Password'
            icon={EyeOffIconFill}
            secureTextEntry={true}
            validator={PasswordValidator}
            onChangeText={this.onPasswordInputTextChange}
          />
          <View style={themedStyle.forgotPasswordContainer}>
            <Button
              style={themedStyle.forgotPasswordButton}
              textStyle={themedStyle.forgotPasswordText}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={() => this.props.navigation.navigate(null)}>
              Forgot Password
            </Button>
          </View>
          <Button
          Icon={'Button'}
          title="Sign in"
          onPress={this.onSignIn}
          >
            Sign in
          </Button>
                    <View style={themedStyle.forgotPasswordContainer}>
            <Button
              style={themedStyle.forgotPasswordButton}
              textStyle={themedStyle.forgotPasswordText}
              appearance='ghost'
              activeOpacity={0.75}
              onPress={() => this.props.navigation.navigate('Register')}>
              Dont have an account? SignUp.
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export const SignInForm2 = withStyles(SignInForm2Component, (theme: ThemeType) => ({
  container: {},
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: theme['text-hint-color'],
    ...textStyle.subtitle,
  },
}));