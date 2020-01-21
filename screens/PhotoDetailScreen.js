import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const PhotoDetailScreen = props => {
  const photoId = props.navigation.getParam('photoId');
  const selectedPhoto = useSelector(state =>
    state.photos.photos.find(photo => photo.id === photoId)
  );

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Image source={{ uri: selectedPhoto.fullImg }} style={styles.image} />
    </ScrollView>
  );
};

PhotoDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('photoTitle')
  };
};

const styles = StyleSheet.create({
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
    backgroundColor: '#ccc'
  }
});

export default PhotoDetailScreen;
