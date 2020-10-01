import styled from 'styled-components';


export const ChannelImageWrapper = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ImageTouchable = styled.TouchableOpacity`
    border-width: 5px;
    border-color: white;
    border-radius: 10px;
    background-color: white;
`;

export const DefaultImage = styled.Image`
    height: 150px;
    width: 150px;
`;

export const TitleBarWrapper = styled.View`
    height: 80px;
    padding-horizontal: 20px;
    align-items: center;
    flex-direction: row; 
`;

export const ProductInputGroup = styled.View`
    margin: 20px auto 40px auto;
    width: 85%;
`;

export const InputSizedBox = styled.View`
    height: 10px;
`;

export const CreateButtonWrapper = styled.View`
    alignItems: center;
`;