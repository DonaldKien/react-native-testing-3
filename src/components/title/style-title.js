import styled from 'styled-components';


export const Title = styled.Text`
    font-size: 26px;
    font-weight: ${props => props.fontWeight || 700 };
    color: ${props => props.inputColor || "#FFA000"};
`;

export const Subtitle = styled.Text`
    font-size: 15px;
    color: white;
`;

export const Link = styled.Text`
    color: ${props => props.inputColor || "white"};
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.inputColor || "white"};
`;