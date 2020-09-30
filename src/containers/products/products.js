import React, {Fragment} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { BackgroundColor } from '@common/styling';
import { TitleBarWrapper, ProductsWrapper } from '@containers/products/style-products';
import { TitleComponent } from '@components/title/title';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItemBig } from '@components/list-items/list-items';

const Products = () => {

    const products = [
        {key:'1', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'1', description:'12 x btls 335ml', price:'RM300', inventory:'300'},
        {key:'2', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'2', description:'12 x btls 335ml', price:'RM300', inventory:'300'},
        {key:'3', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'3', description:'12 x btls 335ml', price:'RM300', inventory:'300'},
        {key:'4', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'4', description:'12 x btls 335ml', price:'RM300', inventory:'300'},
        {key:'5', image:'https://i2.wp.com/nlliquor.com/wp-content/uploads/2020/05/13593_m_v2.jpg?fit=960%2C1280&ssl=1', name:'Somersby Rose', min_order:'5', description:'12 x btls 335ml', price:'RM300', inventory:'300'},
    ]

    return (
        <Fragment>
            <BackgroundColor>
                <TitleBarWrapper>
                    <TitleComponent 
                        text="Products"
                    />
                    <Icon 
                        name="plus-circle" 
                        size={30} 
                        color='#FFA000'
                    />
                </TitleBarWrapper>

                <ProductsWrapper>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={products}
                    keyExtractor={item => item.key}
                    renderItem={({item}) => (
                        <ListItemBig 
                            image={item.image}
                            name={item.name}
                            min_order={item.min_order}
                            description={item.description}
                            price={item.price}
                            inventory={item.inventory}
                        />
                    )}
                    />
                </ProductsWrapper>
            </BackgroundColor>
        </Fragment>
    )
}



export default Products;