import React, {useState, Fragment} from 'react';
import { BackgroundColor } from '@common/styling';
import { ButtonComponent } from '@components/custom-buttons/custom-buttons';
import { TextInputBoxComponent } from '@components/text-input/text-input';
import { TitleComponent, LinkComponent } from '@components/title/title'; 
import { TitleWrapper, TextInputBoxWrapper, LinkWrapper, ButtonWrapper } from '@containers/register/style-register'


const register = ({ navigation }) => {

    const termsAndConditions = () => {console.log('terms and conditions')}

    const [form, setForm] = useState([
        {email: ""},
        {PIC_name: ""},
        {mobile: ""},
        {password: ""},
        {confirm_password: ""}
    ])

    const labels = [
        {key:1, inputLabel: 'Email'},
        {key:2, inputLabel: 'Name of Person in Charge'},
        {key:3, inputLabel: 'Mobile'},
        {key:4, inputLabel: 'Password'},
        {key:5, inputLabel: 'Confirm Password'}
    ];

    return (
        <Fragment>
        <BackgroundColor>

            <TitleWrapper>
                <TitleComponent 
                    text='Sign Up as Seller'
                />
            </TitleWrapper>

            {labels.map( label => ( 
            <TextInputBoxWrapper key={label.key}>
                <TextInputBoxComponent 
                    text={label.inputLabel}
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
        </BackgroundColor>
        </Fragment>
    )
}


export default register;