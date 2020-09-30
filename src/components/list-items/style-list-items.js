import styled from 'styled-components';


export const ListItemSmallStyle = styled.View`
    flex-direction: row;
    background-color: white;
    border-radius: 10px;
    marginVertical: 5px;
    paddingVertical: 5px;
`
export const ListItemSmallDate = styled.View`
    justify-content: center;
    padding-horizontal: 15px;
`

export const ListItemSmallDateFont = styled.Text`
    font-size: 20px;
    font-weight: 700;
`
export const ListItemBigStyle = styled.View`
    background-color: blue;
    flex-direction: row;
    margin-vertical: 10px;
    margin-horizontal: 15px;
    border-radius: 10px;
    border-width: 5px;
    border-color: #FFA000;
`

export const ProductImage = styled.Image`
    width: 150px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    resize-mode: cover;
`

export const ListItemBigDetails = styled.View`
    padding-vertical: 10px;
    padding-horizontal: 20px;
`

export const ProductName = styled.Text`
    font-size: 30px;
`