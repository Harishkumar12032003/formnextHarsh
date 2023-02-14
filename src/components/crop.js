import { useState } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './helper';

const Crop = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  
    const onCropComplete = (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
    };
  
    const handleCrop = async () => {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      console.log(croppedImage);
    };
  
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {imageSrc && (
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        )}
        <button onClick={handleCrop}>Crop Image</button>
      </div>
    );
  };

  export default Crop;
  