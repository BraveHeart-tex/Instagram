import React, {useState} from 'react';
import {Image, Text, Pressable, View} from 'react-native';
import colors from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import {IPost} from '../../models/Post';
import Comment from '../Comment';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';

interface IFeedPostProps {
  post: IPost;
}

const FeedPost = ({post}: IFeedPostProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleDescription = () =>
    setIsDescriptionExpanded(previousState => !previousState);

  const toggleLike = () => setIsLiked(previousState => !previousState);

  let content = null;

  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image source={{uri: post.image}} style={styles.image} />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{uri: post.user.image}} style={styles.userAvatar} />
        <Text style={styles.userName}>karacana94</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}

      {content}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              color={isLiked ? colors.accent : colors.black}
              size={24}
              style={styles.icon}
            />
          </Pressable>

          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />

          <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>karacanajohnson</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 3 : 0}>
          <Text style={styles.bold}>{post.user.username} </Text>
          {post.description}
        </Text>
        <Text
          style={{color: colors.lightGrey}}
          onPress={() => toggleDescription()}>
          {isDescriptionExpanded ? 'more' : 'less'}
        </Text>

        {/* Comments */}
        <Text style={{color: colors.lightGrey}}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted Date */}
        <Text style={{color: colors.lightGrey}}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
