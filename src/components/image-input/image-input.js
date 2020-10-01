import React, {useState, Fragment} from 'react';
import { ImageTouchable, DefaultImage } from '@containers/product-details/style-product-details';
import { Image } from 'react-native';
import imageDefault from '@assets/image/addImage.png';
import { SubtitleComponent } from '@components/title/title';
import ImagePicker from 'react-native-image-picker';


export const ProductInput = () => {

    const [ImageSource, setImageSource] = useState(null)

	const selectImage = async() => {
		
		ImagePicker.showImagePicker({noData: true, mediaType: 'photo'}, (response) => {
			// console.log('Response = ', response);
			
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				setImageSource(response.uri)			
			}
		});
    }

    return (
        <Fragment>
            <ImageTouchable onPress={selectImage}>
            {
                ImageSource ? 
                <Image 
                    source={{uri:ImageSource}} 
                    style={{
                        width:150, 
                        height:150, 
                        borderRadius:5, 
                        resizeMode:'cover'
                    }}
                /> :
                <DefaultImage source={imageDefault}/>
            }
            </ImageTouchable>
            <SubtitleComponent
                text='Product Image'
            />
        </Fragment>
    )
}

export const AvatarImage = () => {

	const [avatarSource, setAvatarSource] = useState(null)

	const selectImage = async() => {
		
		ImagePicker.showImagePicker({noData: true, mediaType: 'photo'}, (response) => {
			console.log('Response = ', response);
			
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				setAvatarSource(response.uri)			
			}
		});
    }

    return (
        <Fragment>
            <ImageTouchable onPress={selectImage}>
            {
                avatarSource ? 
                <Image 
                    source={{uri:avatarSource}} 
                    style={{
                        width:150, 
                        height:150, 
                        borderRadius:5, 
                        resizeMode:'cover'
                    }}
                /> :
                <DefaultImage source={imageDefault}/>
            }
            </ImageTouchable>
            <SubtitleComponent
                text='Channel Image'
            />
        </Fragment>
    )
}