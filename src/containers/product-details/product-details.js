import React, {Fragment, useState} from 'react';
import { Content } from 'native-base';
import { ChannelImageWrapper, ProductInputGroup, InputSizedBox, CreateButtonWrapper } from '@containers/product-details/style-product-details';
import { BackgroundColor } from '@common/styling';
import { AppBarBack } from '@components/app-bar/app-bar';
import { ProductInput } from '@components/image-input/image-input';
import { TextInputBoxComponent, TextInputBoxAreaComponent } from '@components/text-input/text-input';
import { ButtonSmallComponent } from '@components/custom-buttons/custom-buttons';
import { connect } from 'react-redux';
import { ImageTouchable, DefaultImage } from '@containers/product-details/style-product-details';
import { Image, View, Text } from 'react-native';
import imageDefault from '@assets/image/addImage.png';
import { SubtitleComponent } from '@components/title/title';
import ImagePicker from 'react-native-image-picker';


const ProductDetails = (props) => {
    const { navigation, createProduct, allProducts } = props;

    const [productForm, setProductForm] = useState({
        name: { value: "" },
        description: { value: "" },
        price: { value: "" },
        units: { value: "" },
        quantity: { value: "" },
        image: { value: null }
    })

    const onChangeText = (name, value) => {
        setProductForm({
            ...productForm,
            [name]: {
                value: value
            }
        })
    }

	const selectImage = async() => {
		ImagePicker.showImagePicker({noData: true, mediaType: 'photo'}, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				setProductForm({
                    ...productForm,
                    image: {value: response.uri}
                })			
			}
		});
    }

    const createButton = () => {
        createProduct(productForm);
        navigation.pop();
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
                    <ProductInput 
                        onPress={selectImage}
                        source={{uri:productForm.image.value}}
                    />
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
                            onPress={createButton}
                        />
                    </CreateButtonWrapper>

                </ProductInputGroup>
                
            </BackgroundColor>
                
            </Content>
        </Fragment>

    )
}

// export default ProductDetails;

const mapStateToProps = (state) => {
    return {
        allProducts: state.allProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (create) => dispatch({type:"CREATE_PRODUCT", create})
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (ProductDetails);