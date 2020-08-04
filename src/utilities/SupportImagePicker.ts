import ImagePicker, {Image} from 'react-native-image-crop-picker';

type UploadType = (upload: Image | Image[]) => void;

export const takePhotoOnCamera = (upload: UploadType) => {
  ImagePicker.openCamera({
    width: 175,
    height: 175,
    cropping: true,
    cropperCircleOverlay: true,
  }).then(upload);
};

export const choosePhotoFromLibrary = (upload: UploadType) => {
  ImagePicker.openPicker({
    width: 175,
    height: 175,
    cropping: true,
    cropperCircleOverlay: true,
  }).then(upload);
};

export default {
  takePhotoOnCamera,
  choosePhotoFromLibrary,
};
