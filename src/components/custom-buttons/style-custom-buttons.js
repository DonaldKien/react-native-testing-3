import styled from 'styled-components';


export const ButtonClick = styled.TouchableOpacity`
    background-color: ${props => props.inputColor || "white"};
    width: 250px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
`;

export const ButtonClick2 = styled.TouchableOpacity`
    background-color: ${props => props.inputColor || "white"};
    width: 200px;
    height: 50px;
    border-radius: 15px;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`;