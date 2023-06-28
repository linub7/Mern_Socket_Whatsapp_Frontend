import { useRef } from 'react';
import toast from 'react-hot-toast';

const AuthFormPicture = ({
  readablePicture,
  setReadablePicture,
  setPicture,
}) => {
  const inputRef = useRef();

  const handleSelectPicture = () => inputRef.current.click();

  const handleChange = (e) => {
    let pic = e.target.files[0];
    if (
      pic?.type !== 'image/jpeg' &&
      pic?.type !== 'image/jpg' &&
      pic?.type !== 'image/png' &&
      pic?.type !== 'image/webp'
    ) {
      return toast.error('Wrong image type. Please select Only image 😶!');
    } else if (pic?.size > 1024 * 1024 * 2) {
      // 2 Mb
      return toast.error(
        'Image is too large. Please Select 2Mb or lower images 😶!'
      );
    } else {
      setPicture(pic);
      // reading the picture:
      const reader = new FileReader();
      reader.readAsDataURL(pic);
      reader.onload = (e) => {
        setReadablePicture(e.target.result);
      };
    }
  };

  const handleResetPicture = () => {
    setPicture('');
    setReadablePicture('');
  };

  return (
    <div className="mt-6 content-center dark:text-dark_text_1 space-y-1">
      <label htmlFor="picture" className="text-sm font-bold tracking-wide">
        Picture (Optional)
      </label>
      {readablePicture ? (
        <div>
          <img
            onClick={handleResetPicture}
            src={readablePicture}
            alt="profile_picture"
            className="w-20 h-20 object-cover rounded-full cursor-pointer"
          />
          <div
            className="mt-2 w-20 py-1 dark:bg-dark_bg_3 rounded-md text-xs font-bold flex items-center justify-center cursor-pointer"
            onClick={handleResetPicture}
          >
            Remove
          </div>
        </div>
      ) : (
        <div
          className="w-full h-12 dark:bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer"
          onClick={handleSelectPicture}
        >
          Upload Picture
        </div>
      )}
      <input
        type="file"
        name="picture"
        id="picture"
        hidden
        ref={inputRef}
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
};

export default AuthFormPicture;
