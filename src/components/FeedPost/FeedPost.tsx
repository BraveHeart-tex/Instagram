import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>karacana94</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}

      <Image source={{uri: 'https://picsum.photos/200'}} style={styles.image} />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign name={'hearto'} size={24} style={styles.icon} />

          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />

          <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>karacanajohnson</Text> and{' '}
          <Text style={styles.bold}>58 others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>karanacana94 </Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempora
          sit rem beatae libero explicabo maxime.
        </Text>

        {/* Comments */}
        <Text style={{color: colors.lightGrey}}>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>karanacana94 </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <AntDesign
            name="hearto"
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* Posted Date */}
        <Text style={{color: colors.lightGrey}}>19 December, 2022</Text>
      </View>
    </View>
  );
};

export default FeedPost;
