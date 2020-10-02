import React, {useState, Fragment} from 'react';
import { Content } from 'native-base';
import { BackgroundColor } from '@common/styling';
import { ButtonComponent } from '@components/custom-buttons/custom-buttons';
import { TextInputBoxComponent } from '@components/text-input/text-input';
import { TitleComponent, LinkComponent } from '@components/title/title'; 
import { TitleWrapper, TextInputBoxWrapper, LinkWrapper, ButtonWrapper } from '@containers/register/style-register'


const register = ({ navigation }) => {

    const termsAndConditions = () => {navigation.navigate('TermsAndConditions')}

    const [form, setForm] = useState([
        {email: ""},
        {PIC_name: ""},
        {mobile: ""},
        {password: ""},
        {confirm_password: ""}
    ])

    const labels = [
        {key:1, inputLabel: 'Email', secureTextEntry: false, keyboardType: "email-address"},
        {key:2, inputLabel: 'Name of Person in Charge', secureTextEntry: false, keyboardType: "default"},
        {key:3, inputLabel: 'Mobile', secureTextEntry: false, keyboardType: "phone-pad"},
        {key:4, inputLabel: 'Password', secureTextEntry: true, keyboardType: "default"},
        {key:5, inputLabel: 'Confirm Password',  secureTextEntry: true, keyboardType: "default"}
    ];

    return (
        <Fragment>
            <BackgroundColor>
                <Content>
                    <TitleWrapper>
                        <TitleComponent 
                            text='Sign Up as Seller'
                        />
                    </TitleWrapper>

                    {labels.map( label => ( 
                    <TextInputBoxWrapper key={label.key}>
                        <TextInputBoxComponent 
                            text={label.inputLabel}
                            secureTextEntry={label.secureTextEntry}
                            keyboardType={label.keyboardType}
                        />
                    </TextInputBoxWrapper>
                    ))}

                    <LinkWrapper>
                        <LinkComponent 
                            text='Terms and Conditions'
                            inputColor="#FFA000"
                            onPress={termsAndConditions}
                        />
                    </LinkWrapper>

                    <ButtonWrapper>
                        <ButtonComponent 
                            text='Register'
                            inputColor='yellow'
                            onPress={() => navigation.navigate('Onboard')}
                        />
                    </ButtonWrapper>
                </Content>
            </BackgroundColor>
        </Fragment>
    )
}


export default register;