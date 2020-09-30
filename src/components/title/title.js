import React from 'react';
import { Title, Subtitle, Link } from '@components/title/style-title';

export const TitleComponent = props => {
    return (
        <Title 
            inputColor={props.inputColor} 
            fontWeight={props.fontWeight}
        >
            {props.text}
        </Title>
    )
}

export const SubtitleComponent = props => {
    return (
        <Subtitle>{props.text}</Subtitle>
    )
}

export const LinkComponent = props => {
    return (
        <Link inputColor={props.inputColor} onPress={props.onPress}>
            {props.text}
        </Link>
    )
}