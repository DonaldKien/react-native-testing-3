import React from 'react';
import { ButtonClick, ButtonText, ButtonClick2 } from '@components/custom-buttons/style-custom-buttons';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ListItemSmallStyle, ListItemSmallDate, ListItemSmallDateFont, ListItemBigStyle, ProductImage, ListItemBigDetails, ProductName, Price, ListItemBigBoxSized } from '@components/list-items/style-list-items';

export const ListItemSmall = props => {
    return (
        <ListItemSmallStyle>

            <ListItemSmallDate>
                <ListItemSmallDateFont>
                    {props.date}
                </ListItemSmallDateFont>
            </ListItemSmallDate>

            <View>
                <Text>
                    {props.time}
                </Text>
                <Text>
                    {props.title}
                </Text>
            </View>

        </ListItemSmallStyle>
    )
}

export const ListItemBig = props => {
    return (
        <ListItemBigStyle>
            <ProductImage source={{uri: props.image}}/>
            <ListItemBigDetails>
                <Text>Product Name</Text>
                <ProductName>{props.name}</ProductName>
                <ListItemBigBoxSized></ListItemBigBoxSized>
                <Text>Product Description</Text>
                <ListItemBigBoxSized></ListItemBigBoxSized>
                <Text>{props.description}</Text>
                <Text>Min. Order {props.min_order} unit(s)</Text>
                <ListItemBigBoxSized></ListItemBigBoxSized>
                <Text>Price</Text>
                <Text><Price>RM{props.price}</Price> per unit</Text>
                <ListItemBigBoxSized></ListItemBigBoxSized>
                <Text>Inventory</Text>
                <Text>{props.inventory}</Text>
            </ListItemBigDetails>
        </ListItemBigStyle>
    )
}

