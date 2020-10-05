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

    // const products = [
    //     {key:'1', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'1', description:'12 x btls 335ml', price:'300', inventory:'300'},
    //     {key:'2', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'2', description:'12 x btls 335ml', price:'300', inventory:'300'},
    //     {key:'3', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'3', description:'12 x btls 335ml', price:'300', inventory:'300'},
    //     {key:'4', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'4', description:'12 x btls 335ml', price:'300', inventory:'300'},
    //     {key:'5', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'5', description:'12 x btls 335ml', price:'300', inventory:'300'},
    // ]

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
                    data={allProducts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <ListItemBig 
                            image={item.image.value}
                            name={item.name.value}
                            min_order={item.units.value}
                            description={item.description.value}
                            price={item.price.value}
                            inventory={item.quantity.value}
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

export default connect (mapStateToProps) (Products);