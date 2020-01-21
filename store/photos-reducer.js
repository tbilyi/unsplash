import { LOAD_PHOTOS } from './photos-actions';
import Photo from '../models/photo';

const initialState = {
  photos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      return {
        photos: action.photos.map(
          ph =>
            new Photo(
              ph.id,
              ph.urls.small,
              ph.urls.full,
              ph.user.name
            )
        )
      };
    default:
      return state;
  }
};
