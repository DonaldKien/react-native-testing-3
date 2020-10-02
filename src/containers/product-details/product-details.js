import React, {Fragment, useState} from 'react';
import { Content } from 'native-base';
import { ChannelImageWrapper, ProductInputGroup, InputSizedBox, CreateButtonWrapper } from '@containers/product-details/style-product-details';
import { BackgroundColor } from '@common/styling';
import { AppBarBack } from '@components/app-bar/app-bar';
import { ProductInput } from '@components/image-input/image-input';
import { TextInputBoxComponent, TextInputBoxAreaComponent } from '@components/text-input/text-input';
import { ButtonSmallComponent } from '@components/custom-buttons/custom-buttons';
// import { connect } from 'react-redux';

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
                    text="Add Product"
                />

                <ChannelImageWrapper>
                    <ProductInput />
                </ChannelImageWrapper>

                <ProductInputGroup>
                    <TextInputBoxComponent 
                        text='Product Name'
                        onChangeText={(text) => onChangeText('name', text)}
                        value={productForm.name.value}
                    />
                    <InputSizedBox />
                    <TextInputBoxAreaComponent 
                        text='Product Description'
                        multiline={true} 
                        numberOfLines={2}
                        onChangeText={(text) => onChangeText('description', text)}
                        value={productForm.description.value}
                    />
                    <InputSizedBox />
                    <TextInputBoxComponent 
                        text='Price per unit (RM)'
                        onChangeText={(text) => onChangeText('price', text)}
                        value={productForm.price.value}
                    />
                    <InputSizedBox />
                    <TextInputBoxComponent
                        text='Min Order, unit'
                        onChangeText={(text) => onChangeText('units', text)}
                        value={productForm.units.value}
                    />
                    <InputSizedBox />
                    <TextInputBoxComponent 
                        text='Available Quantity'
                        onChangeText={(text) => onChangeText('quantity', text)}
                        value={productForm.quantity.value}
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

// const mapStateToProps = (state) => {
//     return {}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }

// export default connect (mapStateToProps, mapDispatchToProps) (ProductDetails);