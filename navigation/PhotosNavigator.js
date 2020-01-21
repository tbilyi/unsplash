import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import PlacesListScreen from '../screens/PhotosListScreen';
import PhotoDetailScreen from '../screens/PhotoDetailScreen';

const PhotosNavigator = createStackNavigator(
  {
    Photos: PlacesListScreen,
    PhotoDetail: PhotoDetailScreen
  }
);

export default createAppContainer(PhotosNavigator);
