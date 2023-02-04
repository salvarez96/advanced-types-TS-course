/* example taken from https://capacitorjs.com/docs/apis/camera to see how enums are used in real
situations */
import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    /* CameraResultType is an enum that cointains 3 members: Base64, Uri and DataUrl. This has
    the advantage that we can't mistake incorrect members when we want to add them from an specific enum*/
    resultType: CameraResultType.Uri,
    direction: CameraDirection.Front
  });
};
