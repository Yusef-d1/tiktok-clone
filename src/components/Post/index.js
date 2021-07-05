import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native"
import Video from 'react-native-video';
import rap from '../../assets/images/rap.mp4'
import outaPocket from '../../assets/images/outaPocket.mp4'
import grace from '../../assets/images/grace.mp4'



import styles from "./styles"
const Post = () => {

    const [paused, setPause] = useState(false)
    const onPlayPausePress = () => {
        setPause(!paused)
    }
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    source={grace}
                    style={styles.video}
                    resizeMode={'cover'}
                    onError={(err) => console.log(err)}
                    paused={paused}
                // repeat={true}
                />
            </TouchableWithoutFeedback>
            <Text>Tik Tok Clone</Text>
        </View>
    )
};

export default Post;