import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import { AppBarBack } from '@components/app-bar/app-bar';

const TermsAndConditions = ({navigation}) => {
	const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};

	return (
		<View style={styles.container}>
            <AppBarBack 
                text="Back"
                onPress={() => navigation.pop()}
            />
			<Pdf
				source={source}
				style={styles.pdf}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});

export default TermsAndConditions;