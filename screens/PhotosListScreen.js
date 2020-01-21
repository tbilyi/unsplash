import React, { useEffect } from 'react';
import { FlatList, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import PhotoItem from '../components/PhotoItem';
import * as photosActions from '../store/photos-actions';

const PhotosListScreen = props => {
  const photos = useSelector(state => state.photos.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosActions.loadPhotos("mykolaiv"));
  }, [dispatch]);

  const newPhotos = (location) => {
    dispatch(photosActions.loadPhotos(location))
  }
  const [value, onChangeText] = React.useState('mykolaiv');
  return (
  <>
    <TextInput
      style={{ height: 60, borderColor: 'gray', borderWidth: 1, fontSize: 30, fontWeight: "bold" }}
      onChangeText={text => onChangeText(text)}
      onSubmitEditing={newPhotos.bind(this, value)}
      value={value}
    />
    <FlatList
      data={photos}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PhotoItem
          image={itemData.item.smallImg}
          title={itemData.item.author}
          onSelect={() => {
            props.navigation.navigate('PhotoDetail', {
              photoTitle: itemData.item.author,
              photoId: itemData.item.id
            });
          }}
        />
      )}
    />
    </>
  );
};

PhotosListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Photos'
  };
};

export default PhotosListScreen;
