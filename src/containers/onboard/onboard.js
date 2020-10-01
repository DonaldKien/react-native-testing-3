import React, {Fragment} from 'react';
import { Content } from 'native-base';
import { BackgroundColor } from '../../common/styling';
import { TitleComponent, SubtitleComponent } from '@components/title/title';
import { ButtonSmallComponent } from '@components/custom-buttons/custom-buttons';
import { TextInputBoxComponent, TextInputBoxAreaComponent } from '@components/text-input/text-input';
import { TitleBarWrapper, ChannelImageWrapper, TextInputBoxWrapper, TextInputBoxWrapperLarge, ButtonWrapper } from '@containers/onboard/style-onboard';
import { AvatarImage } from '@components/image-input/image-input';

const onboard = ({navigation}) => {
    
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
                    <AvatarImage />
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