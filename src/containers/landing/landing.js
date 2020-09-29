import React, {useState, Fragment} from 'react';
import logo from '../../assets/image/logo1.jpg';
import { Content } from 'native-base';
import { BackgroundColor, Logo } from '@common/styling';
import { ButtonComponent } from '@components/custom-buttons/custom-buttons';
import { TextInputBoxComponent } from '@components/text-input/text-input';
import { TitleComponent, LinkComponent } from '@components/title/title';
import { TitleWrapper, LogoWrapper, TextInputBoxWrapper, ButtonWrapper, LinkWrapper } from '@containers/landing/style-landing';

const landing = ({navigation}) => {

    const [form, setForm] = useState({
        email: { value: "", onFocus: false, onBlur: false, error: false },
        password: { value: "", onFocus: false, onBlur: false, error: false }
    })

    const onChangeText = (name, value) => {
        setForm({
            ...form,
            [name]: {
                ...form[name],
                value: value
            }
        })
    }

    const boxFocus = (name, value) => {
        setForm({
            ...form,
            [name]: {
                ...form[name],
                onFocus: value,
                onBlur: !value
            }
        })
    }

    const boxBlur = (name, value) => {
        setForm({
            ...form,
            [name]: {
                ...form[name],
                onBlur: value,
                onFocus: !value,
                error: !form[name].value ? true : false
            }
        })
    }

    const signIn = () => {
        setForm({
            ['email']: {
                ...form['email'],
                error: form['email'].value ? false : true
            },
            ['password']: {
                ...form['password'],
                error: form['password'].value ? false : true
            }
        })
        // console.log('email: ' + form.email.value + '| password: ' + form.password.value);
        // console.log('email error: ' + form.email.error + '| password error: ' + form.password.error);
        // setTimeout(function(){ console.log('email error: ' + form.email.error + '| password error: ' + form.password.error); }, 3000);
        // if (!form.email.error && !form.password.error) {
        //     navigation.navigate('BottomTab')
        // }
    }

    return (
        <Fragment>
            <BackgroundColor>

                <Content>
                    <TitleWrapper>
                        <TitleComponent 
                            text='Welcome'
                            inputColor='white'
                        />
                    </TitleWrapper>
                    
                    <LogoWrapper>
                        <Logo 
                            source={logo}
                        />
                    </LogoWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxComponent
                            text='Email'
                            boxFocus={form.email.onFocus}
                            checkError={form.email.error}
                            onBlur={() => boxBlur('email', true)}
                            onFocus={() => boxFocus('email', true)}
                            onChangeText={(text) => onChangeText('email', text)}
                            value={form.email.emailInput}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                        />
                    </TextInputBoxWrapper>

                    <TextInputBoxWrapper>
                        <TextInputBoxComponent 
                            text='Password'
                            boxFocus={form.password.onFocus}
                            checkError={form.password.error}
                            onBlur={() => boxBlur('password', true)}
                            onFocus={() => boxFocus('password', true)}
                            onChangeText={(text) => onChangeText('password', text)}
                            value={form.password.passwordInput}
                            secureTextEntry={true}
                        />
                    </TextInputBoxWrapper>

                    <LinkWrapper>
                        <LinkComponent 
                            text='Forgot Password'
                            onPress={() => {console.log('forgot password')}}
                        />
                    </LinkWrapper>

                    <ButtonWrapper>
                        <ButtonComponent
                            text='Sign In'
                            inputColor='yellow'
                            onPress={signIn}
                        />
                    </ButtonWrapper>

                    <ButtonWrapper>
                        <ButtonComponent
                            text='Register'
                            onPress={() => navigation.navigate('Register')}
                        />
                    </ButtonWrapper>
                </Content>

            </BackgroundColor>
        </Fragment>
    )
}

export default landing;