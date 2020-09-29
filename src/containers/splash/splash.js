import React, {Fragment} from 'react';
import logo from '@assets/image/logo1.jpg';
import { BackgroundColor, Touchable, Logo } from '@containers/splash/style-splash';

const App = ({navigation}) => {

	return (
		<Fragment>
			<BackgroundColor>
				<Touchable 
					onPress={() => navigation.navigate('Landing')} 
				>
					<Logo 
						source={logo}
					/>
				</Touchable>
			</BackgroundColor>
		</Fragment>
	);
};


export default App;