import React, { Fragment } from 'react';
import { TitleComponent } from '@components/title/title';
import { TitleBarWrapper } from '@containers/home-seller-dashboard/style-home-seller-dashboard';

const Home = () => {

    return (
        <Fragment>
            <TitleBarWrapper>
                <TitleComponent 
                text='Home'
                />
            </TitleBarWrapper>
        </Fragment>
    )
}


export default Home;