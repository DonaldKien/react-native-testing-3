import React from 'react';
import { ButtonClick, ButtonText, ButtonClick2 } from '@components/custom-buttons/style-custom-buttons';


export const ButtonComponent = props => {
    return (
        <ButtonClick inputColor={props.inputColor}>
            <ButtonText onPress={props.onPress}>{props.text}</ButtonText>
        </ButtonClick>
    )
}

export const ButtonSmallComponent = props => {
    return (
        <ButtonClick2 
            onPress={props.onPress} 
            inputColor={props.inputColor}>
            <ButtonText>{props.text}</ButtonText>
        </ButtonClick2>
    )
}