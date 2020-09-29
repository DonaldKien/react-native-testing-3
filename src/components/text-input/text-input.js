import React from 'react';
import { TextInputLabel, TextInputBox, InputText, TextInputBoxLarge } from '@components/text-input/style-text-input';


export const TextInputBoxComponent = props => {
    const { boxFocus, checkError, text, onBlur, onFocus, onChangeText, value, keyboardType, textContentType, secureTextEntry } = props;
    return (
        <TextInputBox boxFocus={boxFocus}>
            <TextInputLabel checkError={checkError}>{text}</TextInputLabel>
            <InputText 
                onBlur={onBlur}
                onFocus={onFocus}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                textContentType={textContentType}
                secureTextEntry={secureTextEntry}
            />
        </TextInputBox>
    )
}

export const TextInputBoxAreaComponent = props => {
    return (
        <TextInputBoxLarge>
            <TextInputLabel>{props.text}</TextInputLabel>
                <InputText 
                    multiline={props.multiline} 
                    numberOfLines={props.numberOfLines}
                />
        </TextInputBoxLarge>
    )
}