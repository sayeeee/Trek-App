import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons';

// Get the full width of the screen
const screenWidth = Dimensions.get('window').width;

// Define a horizontal margin for the post card relative to the screen edges.
// This will create a consistent padding on both sides of each post.
const POST_HORIZONTAL_MARGIN = 20; // 20 units on left and 20 units on right

// Calculate the effective width for the main post content area.
// This is the screen width minus the total horizontal margin (left + right).
const POST_CONTENT_WIDTH = screenWidth - (POST_HORIZONTAL_MARGIN * 2);

const UserPosts = ({ name = 'Guest User', caption = 'Pending...' }) => {
  return (
    // Outer container with horizontal padding to create the margin effect
    <View style={styles.container}>
      {/* Spacer equivalent to SizedBox(height: 5) */}
      

      {/* Main post area, acting as a Stack for positioned children */}
      {/* Its width is now dynamically calculated */}
      <View style={styles.postStack}>
        {/* Deep Purple Background Container */}
        {/* Its width now matches the POST_CONTENT_WIDTH */}
        <View style={styles.deepPurpleBackground} />

        {/* Grey Background Container (main content area for the post) */}
        {/* Its width now matches the POST_CONTENT_WIDTH */}
        <View style={styles.greyBackground} />

        {/* User Info Row: Name, Location Icon, Location Text, Menu Icon */}
        {/* Its width is also dynamically calculated based on POST_CONTENT_WIDTH */}
        <View style={styles.userInfoRow}>
          <View style={styles.userNameLocationGroup}>
            {/* User Name */}
            <Text style={styles.userNameText}>
              {name}
            </Text>
            {/* Spacer equivalent to SizedBox(width: 10) */}
            <View style={styles.spacerTiny} />
            {/* Location Icon */}
            <MaterialIcons name="pin-drop" size={22} color="#8B5CF6" /> {/* DeepPurple color */}
            {/* Location Text with slight top padding */}
            <Text style={styles.locationText}>
              location
            </Text>
          </View>
          {/* Menu Icon */}
          <MaterialIcons name="menu" size={24} color="rgba(255, 255, 255, 0.7)" />
        </View>

        {/* Profile Picture Circle (positioned absolutely at left: 0, top: 0 relative to postStack) */}
        <View style={styles.profilePicture} />
      </View>
      
      <View style={styles.captionBox}>
        <Text style={styles.userNameTextSmall}>
              {name}
        </Text>
        <Text style={styles.captionText}>
              {caption}
        </Text>
        
      </View>

      {/* Interaction Row: Like, Comment, Share, Add Comment box */}
      {/* Its width is also dynamically calculated based on POST_CONTENT_WIDTH */}
      <View style={styles.interactionRow}>
        <View style={styles.actionIconsGroup}>
          {/* Favorite Icon and Count */}
          <MaterialIcons name="favorite" size={24} color="rgba(255, 255, 255, 0.7)" />
          {/* Spacer */}
          <View style={styles.spacerSmallHorizontal} />
          {/* Like Count */}
          <Text style={styles.likesText}>
            47
          </Text>
          {/* Spacer */}
          <View style={styles.spacerMediumHorizontal} />
          {/* Comment Icon (using MaterialCommunityIcons for similar visual style) */}
          <MaterialCommunityIcons name="comment-text-multiple-outline" size={24} color="rgba(255, 255, 255, 0.7)" />
          {/* Spacer */}
          <View style={styles.spacerMediumHorizontal} />
          {/* Share Icon */}
          <FontAwesome name="share-square-o" size={24} color="rgba(255, 255, 255, 0.7)" />
        </View>

        {/* "Add a comment..." input box */}
        <View style={styles.commentInputBox}>
          <Text style={styles.commentInputText}>Add a comment...</Text>
        </View>
      </View>

      {/* Spacer equivalent to SizedBox(height: 20) */}
      <View style={styles.spacerLarge} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // The total padding for the post. The actual post content width
    // will be `screenWidth - (2 * POST_HORIZONTAL_MARGIN)`.
    paddingHorizontal: POST_HORIZONTAL_MARGIN,
    alignItems: 'center', // Center the post if POST_CONTENT_WIDTH is smaller than screenWidth
  },
  
  spacerTiny: {
    width: 10,
  },
  spacerSmallHorizontal: {
    width: 5,
  },
  spacerMediumHorizontal: {
    width: 12,
  },
  
  spacerLarge: {
    height: 20,
  },
  postStack: {
    position: 'relative',
    width: POST_CONTENT_WIDTH, // Dynamic width based on screen size
    height: 420, // Height remains fixed or can be made dynamic based on image height etc.
  },
  deepPurpleBackground: {
    position: 'absolute',
    top: 60,
    left: 7,
    width: POST_CONTENT_WIDTH, // Dynamic width
    height: 360,
    borderRadius: 12,
    backgroundColor: '#673AB7', // Dart's Colors.deepPurple approx
    // marginRight is no longer needed as width is calculated precisely
  },
  greyBackground: {
    position: 'absolute',
    top: 50,
    left: -3,
    width: POST_CONTENT_WIDTH, // Dynamic width
    height: 360,
    borderRadius: 12,
    backgroundColor: '#4A4A4A', // Dart's Colors.grey[700] approx
    // marginRight is no longer needed
  },
  userInfoRow: {
    position: 'absolute',
    top: 18,
    left: 63,
    // Calculate width relative to the parent POST_CONTENT_WIDTH
    width: POST_CONTENT_WIDTH - 70 , // Original left:78, right:15
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userNameLocationGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  userNameTextSmall: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  captionText:{
    fontSize: 14,
    color: 'white',
    paddingLeft: 7,
  },
  locationText: {
    fontSize: 13,
    color: 'white',
    paddingTop: 8,
  },
  profilePicture: {
    position: 'absolute',
    left: -10,
    top: 5,
    width: 65,
    height: 65,
    backgroundColor: '#D3D3D3', // Dart's Colors.grey[300] approx
    borderRadius: 65 / 2, // Half width/height for a perfect circle
  },
  captionBox:{
   width: POST_CONTENT_WIDTH,
   flexDirection: 'row',
   paddingLeft: 5,
   paddingTop: 5,
  },
  interactionRow: {
    width: POST_CONTENT_WIDTH, // Dynamic width
    paddingLeft: 18,
    paddingTop: 4,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionIconsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    paddingTop: 7,
  },
  commentInputBox: {
    width: 180, // You might want to make this dynamic too, e.g., POST_CONTENT_WIDTH * 0.5
    height: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    paddingLeft: 10,
    marginLeft: 25,
  },
  commentInputText: {
    color: 'gray',
  },
});

export default UserPosts;