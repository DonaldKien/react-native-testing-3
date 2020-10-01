import React, {Fragment, useState} from 'react';
import { Content } from 'native-base';
import { ChannelImageWrapper, ProductInputGroup, InputSizedBox, CreateButtonWrapper } from '@containers/product-details/style-product-details';
import { BackgroundColor } from '@common/styling';
import { AppBarBack } from '@components/app-bar/app-bar';
import { ProductInput } from '@components/image-input/image-input';
import { TextInputBoxComponent, TextInputBoxAreaComponent } from '@components/text-input/text-input';
import { ButtonSmallComponent } from '@components/custom-buttons/custom-buttons';
import { onChange } from 'react-native-reanimated';

const ProductDetails = (props) => {

    const [productForm, setProductForm] = useState({
        name: { value: "" },
        description: { value: "" },
        price: { value: "" },
        units: { value: "" },
        quantity: { value: "" }
    })

    const onChangeText = (name, value) => {
        setProductForm({
            ...productForm,
            [name]: {
                ...productForm[name],
                value: value
            }
        })
    }

    return (
        <Fragment>
            <Content>
            <BackgroundColor>

                <AppBarBack 
                    onPress={() => props.navigation.pop()}
                />

                <ChannelImageWrapper>
                    <ProductInput />
                </ChannelImageWrapper>

                <ProductInputGroup>
                    <TextInputBoxComponent 
                        text='Product Name'
                        onChangeText={(text) => onChangeText('name', text)}
                    />
                    <InputSizedBox />
                    <TextInputBoxAreaComponent 
                        text='Product Description'
                        multiline={true} 
                        numberOfLines={2}
                        onChangeText={(text) => onChangeText('description', text)}
                    />
                    <InputSizedBox />
                    <TextInputBoxComponent 
                        text='Price per unit (RM)'
                        onChangeText={(text) => onChangeText('price', text)}
                    />
                    <InputSizedBox />
                    <TextInputBoxComponent 
                        text='Min Order, unit'
                        onChangeText={(text) => onChangeText('units', text)}
                    />
                    <InputSizedBox />
                    <TextInputBoxComponent 
                        text='Available Quantity'
                        onChangeText={(text) => onChangeText('quantity', text)}
                    />
                    <InputSizedBox />
                    <CreateButtonWrapper>
                        <ButtonSmallComponent 
                            text="Create"
                            inputColor="yellow"
                        />
                    </CreateButtonWrapper>

                </ProductInputGroup>
                
            </BackgroundColor>
                
            </Content>
        </Fragment>

    )
}



export default ProductDetails;