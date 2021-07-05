import React from "react";
import { View, Text } from "react-native"
import Video from 'react-native-video';
import rap from '../../assets/images/rap.mp4'

import styles from "./styles"
const Post = () => {
    return (
        <View style={styles.container}>
            <Video
                source={rap}
                style={styles.video}
            />
            <Text>Video not showing in ios</Text>
        </View>
    )
};

export default Post;