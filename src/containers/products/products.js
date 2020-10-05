import React, {Fragment} from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { BackgroundColor } from '@common/styling';
import { ProductsWrapper } from '@containers/products/style-products';
import { TitleComponent } from '@components/title/title';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItemBig } from '@components/list-items/list-items';
import { TitleBarWrapper } from '@components/title/style-title';
import { AppBarAdd } from '@components/app-bar/app-bar';
import { connect } from 'react-redux';

const Products = props => {
    const {navigation, allProducts} = props;

    const hardcode = [
        {
            id: 1,
            name: { value: "Somersby Rose" },
            description: { value: "12 x btls 335ml" },
            price: { value: "300" },
            units: { value: "2" },
            quantity: { value: "500" },
            image: { value: 'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1' }
        },
        {
            id: 2,
            name: { value: "Somersby Rose" },
            description: { value: "12 x btls 335ml" },
            price: { value: "300" },
            units: { value: "2" },
            quantity: { value: "500" },
            image: { value: 'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1' }
        },
        {
            id: 3,
            name: { value: "Somersby Rose" },
            description: { value: "12 x btls 335ml" },
            price: { value: "300" },
            units: { value: "2" },
            quantity: { value: "500" },
            image: { value: 'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1' }
        },
        {
            id: 4,
            name: { value: "Somersby Rose" },
            description: { value: "12 x btls 335ml" },
            price: { value: "300" },
            units: { value: "2" },
            quantity: { value: "500" },
            image: { value: 'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1' }
        },
        {
            id: 5,
            name: { value: "Somersby Rose" },
            description: { value: "12 x btls 335ml" },
            price: { value: "300" },
            units: { value: "2" },
            quantity: { value: "500" },
            image: { value: 'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1' }
        },
    ]

    const deleteProduct = () => {
        console.log('delete')
    }

    return (
        <Fragment>
            <BackgroundColor>
                
                <AppBarAdd
                    text='Products'
                    fontWeight="600"
                    onPress={() => navigation.navigate("ProductDetails")} 
                />
                <ProductsWrapper>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    // data={allProducts}
                    data={hardcode}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <ListItemBig 
                            image={item.image.value}
                            name={item.name.value}
                            min_order={item.units.value}
                            description={item.description.value}
                            price={item.price.value}
                            inventory={item.quantity.value}
                            onPress={() => props.deleteProduct(item.id.value)}
                        />
                    )}
                    />
                </ProductsWrapper>
                
            </BackgroundColor>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        allProducts: state.allProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (itemId) => dispatch({type:'DELETE_PRODUCT', itemId})
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Products);