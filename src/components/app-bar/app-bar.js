import React from 'react';
import { TitleComponent } from '@components/title/title';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TitleBarWrapper } from '@components/title/style-title';
import { AppBarIconTouch } from '@components/app-bar/style-app-bar';

export const AppBarAdd = props => {
    return (
        <TitleBarWrapper justifyContent='space-between'>
            <TitleComponent 
                text={props.text}
                fontWeight={props.fontWeight}
            />
            <TouchableOpacity onPress={props.onPress}>
                <Icon 
                    name="plus-circle" 
                    size={30} 
                    color='#FFA000'
                />
            </TouchableOpacity>
        </TitleBarWrapper>
    )
}

export const AppBarBack = props => {
    return (
        <TitleBarWrapper>
            <AppBarIconTouch onPress={props.onPress}>
                <Icon 
                    name="arrow-left" 
                    size={30} 
                    color='#FFA000'
                />
            </AppBarIconTouch>
            <TitleComponent 
                text={props.text}
                fontWeight="600"
            />
        </TitleBarWrapper>
    )
}