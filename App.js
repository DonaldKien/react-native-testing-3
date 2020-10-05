import React from 'react';
import Navigation from './src/routing/routing';
import { Provider } from 'react-redux';
import store from '@redux/store/store';

function App() {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}

export default App;