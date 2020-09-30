import React, {useState, Fragment} from 'react';
import { Content } from 'native-base';
import { BackgroundColor } from '../../common/styling';
import ImagePicker from 'react-native-image-picker';
import imageDefault from '@assets/image/addImage.png';
import { TitleComponent, SubtitleComponent } from '@components/title/title';
import { ButtonSmallComponent } from '@components/custom-buttons/custom-buttons';
import { TextInputBoxComponent, TextInputBoxAreaComponent } from '@components/text-input/text-input';
import { TitleBarWrapper, ChannelImageWrapper, TextInputBoxWrapper, TextInputBoxWrapperLarge, ButtonWrapper, ImageInput, ImageTouchable, DefaultImage } from '@containers/onboard/style-onboard';
import { Image } from 'react-native';

const onboard = ({navigation}) => {
    
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
        <BackgroundColor>
            <Content>
                <TitleBarWrapper>
                    <TitleComponent
                        text='Welcome Onboard'
                    />
                    <SubtitleComponent
                        text='You are almost there'
                    />
                </TitleBarWrapper>

                <ChannelImageWrapper>
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
                </ChannelImageWrapper>

                <TextInputBoxWrapper>
                    <TextInputBoxComponent 
                        text='Display name / Company name'
                    />
                </TextInputBoxWrapper>

                <TextInputBoxWrapperLarge>
                    <TextInputBoxAreaComponent 
                        text='Company Description'
                        multiline={true} 
                        numberOfLines={2}
                    />
                </TextInputBoxWrapperLarge>

                <ButtonWrapper>
                    <ButtonSmallComponent
                        text='Continue'
                        onPress={() => navigation.navigate('BottomTab')}
                    />
                </ButtonWrapper>
            </Content>
        </BackgroundColor>
        </Fragment>
    )
}


export default onboard;