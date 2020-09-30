import React from 'react';
import { ButtonClick, ButtonText, ButtonClick2 } from '@components/custom-buttons/style-custom-buttons';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ListItemSmallStyle, ListItemSmallDate, ListItemSmallDateFont, ListItemBigStyle, ProductImage, ListItemBigDetails, ProductName } from '@components/list-items/style-list-items';

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
                <Text>Product Description</Text>
                <Text>{props.description}</Text>
                <Text>Min. Order {props.min_order} unit(s)</Text>
                <Text>Price</Text>
                <Text>RM{props.price} per unit</Text>
                <Text>Inventory</Text>
                <Text>{props.inventory}</Text>
            </ListItemBigDetails>
        </ListItemBigStyle>
    )
}

