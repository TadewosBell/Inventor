import React from 'react';
import {
  View,
  ViewProps,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Button,
} from '@ui-kitten/components';
import {
  textStyle,
  ValidationInput,
} from '../common';
import {
  EyeOffIconFill,
  PersonIconFill,
  MenuIconEcommerce,
} from '../../assets/icons';
import {
  NameValidator,
  PasswordValidator,
  EmailValidator,
} from '../core/validators';
import * as Font from 'expo-font';
import { isForOfStatement, isIfStatement } from '@babel/types';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: null,
            firstName: null,
            lastName: null,
            email: null,
            buisnessName: null,
            password: null,
            confirmPassword: null,
         }
    }

    onUserName = (userName) => {
      if(userName){
        console.log(userName);
        this.setState({ userName  });
      }
    }

    validate(text) {
      return text != 'undefined' && text;
    }

    onFirstName = (firstName) => {
      if(validate(firstName)){
        this.setState({ firstName  });
      }
    }

    onLastName = (lastName) => {
      if(lastName){
        this.setState({lastName});
      }
    }

    onEmail = (email) => {
      if(email){
        this.setState({email});
      }
    } 

    onBusinessName = (buisnessName) => {
      if(buisnessName){
        this.setState({ buisnessName  });
      }

    }

    onPassword = (password) => {
      if(password ){
        this.setState({ password  });
      }
    }

    onConfirmPassword = (confirmPassword) => {
      if(confirmPassword){
        this.setState({ confirmPassword });
      }
    }

    checkPassword = (password, confirmPassword) => {

      if(password == confirmPassword){
        return true;
      }
    }

    onSignUp = () => {
      const { userName, 
              firstName, 
              lastName, 
              buisnessName,
              email,
              password,
              confirmPassword,
            }  = this.state;

      if(confirmPassword == password){
        //here do register post
      } else {
        
      }

      console.log(email);
    }

    componentDiidMount() {
    
    }

    render(): React.ReactNode { 
        const { style, themedStyle, ...restProps } = this.props;
        const { password } = this.state;
        return (       
        <View
            style={[themedStyle.container, style]}
            {...restProps}>
        <Text style={themedStyle.title} >SignUp</Text>
            <View style={themedStyle.formContainer}>
                <ValidationInput
                textStyle={textStyle.paragraph}
                placeholder='User Name'
                name='username'
                icon={PersonIconFill}
                validator={NameValidator}
                onChangeText={this.onUserName}
                />
                <ValidationInput
                textStyle={textStyle.paragraph}
                placeholder='First Name'
                name='firstName'
                icon={PersonIconFill}
                validator={NameValidator}
                onChangeText={this.onFirstName}
                />
                <ValidationInput
                textStyle={textStyle.paragraph}
                placeholder='Last Name'
                name='lastName'
                icon={PersonIconFill}
                validator={NameValidator}
                onChangeText={this.onLastName}
                />
                <ValidationInput
                textStyle={textStyle.paragraph}
                placeholder='Email'
                name='email'
                icon={PersonIconFill}
                validator={EmailValidator}
                onChangeText={this.onEmail}
                />
                <ValidationInput
                textStyle={textStyle.paragraph}
                placeholder='Business Name'
                name='buisnessName'
                icon={MenuIconEcommerce}
                validator={NameValidator}
                onChangeText={this.onBusinessName}
                />
                <ValidationInput
                style={themedStyle.passwordInput}
                textStyle={textStyle.onPassword}
                name='password'
                placeholder='Password'
                icon={EyeOffIconFill}
                secureTextEntry={true}
                validator={PasswordValidator}
                onChangeText={this.onPassword}
                />
                <ValidationInput
                style={themedStyle.passwordInput}
                textStyle={textStyle.paragraph}
                name='confirmPassword'
                placeholder='Confirm Password'
                icon={EyeOffIconFill}
                secureTextEntry={true}
                validator={(confirmPassword) => this.checkPassword(password,confirmPassword)}
                onChangeText={this.onConfirmPassword}
                />
            </View>
            <Button
              Icon={'Button'}
              title="Sign in"
              onPress={this.onSignUp}
              >
                Sign Up
            </Button>
          </View> );
    }
}
 
export const RegisterForm = withStyles(Register, (theme) => ({
    container: {
        marginTop: 20,
    },
    title: {
      fontSize: 50,
      marginBottom: 10,
      ...textStyle.headline,
    },
    forgotPasswordContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    passwordInput: {
      marginTop: 0,
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