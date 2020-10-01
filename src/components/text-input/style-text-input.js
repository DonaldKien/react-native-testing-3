import styled from 'styled-components';


export const TextInputLabel = styled.Text`
    color: ${props => {
        if (props.checkError) {
            return props.checkError ? "red" : "white"
        } else {
            return "white"
        }
    }}
`;

export const InputText = styled.TextInput`
    color: white;
    font-size: 22px;
`;

export const TextInputBox = styled.View`
    border: 1px solid ${props => props.boxFocus ? "blue" : "white" };
    height: 70px;
    border-radius: 10px;
    padding: 5px 10px;
    width: 100%;

`;

export const TextInputBoxLarge = styled.View`
    border: 1px solid white;
    height: 100px;
    width: 100%;
    border-radius: 10px;
    padding: 5px 10px;
`;