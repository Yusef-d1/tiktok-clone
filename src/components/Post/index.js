import React from "react";
import { View, Text } from "react-native"
import Video from 'react-native-video';
import rap from '../../assets/images/rap.mp4'
import outaPocket from '../../assets/images/outaPocket.mp4'
import grace from '../../assets/images/grace.mp4'



import styles from "./styles"
const Post = () => {
    return (
        <View style={styles.container}>
            <Video
                source={grace}
                style={styles.video}
                resizeMode={'cover'}
            />
            <Text>Video not showing in ios</Text>
        </View>
    )
};

export default Post;