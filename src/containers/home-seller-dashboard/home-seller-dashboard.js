import React, { Fragment } from 'react';
import { TitleComponent } from '@components/title/title';
import { StreamWrapper, DashboardWrapper } from '@containers/home-seller-dashboard/style-home-seller-dashboard';
import { BackgroundColor } from '@common/styling';
import { FlatList } from 'react-native';
import { ListItemSmall } from '@components/list-items/list-items';
import { AppBarAdd } from '@components/app-bar/app-bar';

const Home = () => {

    const streamsData = [
        {key:'1', date:'25 May', time:'2:00pm', title:'Stream #1'},
        {key:'2', date:'26 May', time:'3:00pm', title:'Stream #2'},
        {key:'3', date:'27 May', time:'4:00pm', title:'Stream #3'},
        {key:'4', date:'28 May', time:'5:00pm', title:'Stream #4'},
        {key:'5', date:'29 May', time:'6:00pm', title:'Stream #5'}
    ];

    return (
        <Fragment>
            <BackgroundColor>

                <AppBarAdd
                    text='Home'
                    fontWeight="700"
                    onPress={() => console.log('Home add')} 
                />

                <StreamWrapper>
                    <TitleComponent 
                    text='Upcoming Stream'
                    fontWeight='600'
                    />
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={streamsData} 
                        keyExtractor={item => item.key} 
                        renderItem={({item}) => (
                            <ListItemSmall 
                                date={item.date}
                                time={item.time}
                                title={item.title}
                            />
                        )} 
                    />
                </StreamWrapper>

                <DashboardWrapper>
                    <TitleComponent 
                    text='Your Dashboard'
                    fontWeight='600'
                    />
                </DashboardWrapper>

            </BackgroundColor>
        </Fragment>
    )
}


export default Home;