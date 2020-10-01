import styled from 'styled-components';


export const TitleBarWrapper = styled.View`
    flex: 1;
    padding-top: 5px;
    padding-left: 10px;
`

export const ChannelImageWrapper = styled.View`
    margin-top: 15px;   
    flex: 3;
    justify-content: center;
    align-items: center;
`
export const TextInputBoxWrapper = styled.View`
    margin: 15px auto 0px auto;
    flex: 1;
    width: 90%;
`

export const TextInputBoxWrapperLarge = styled.View`
    margin: 15px auto 0px auto;
    flex: 2;
    width: 90%;
`

export const ButtonWrapper = styled.View`
    flex: 3;
    align-items: center;
    padding-top: 20px;

`

export const ImageTouchable = styled.TouchableOpacity`
    border-width: 5px;
    border-color: white;
    border-radius: 10px;
    background-color: white;
`

export const ImageInput = styled.Image`
    width: 150;
    height: 150;
    border-radius: 5;
    resize-mode: cover;
`

export const DefaultImage = styled.Image`
    height: 150px;
    width: 150px;
`;