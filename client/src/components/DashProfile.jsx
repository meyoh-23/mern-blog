import { useSelector } from 'react-redux';
import { Alert, TextInput, Button } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updateSuccess, updateStart, updateFailure } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function DashProfile () {
  const { currentUser } = useSelector(state => state.user);
  const [ imageFile, setImageFile ] = useState(null);
  const [ imageFileUrl, setImageFileUrl ] = useState(null);
  const filePickerRef = useRef();
  const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [ formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess ] = useState(null);

  // TEST
  /* console.log("hii ni progress:- " + imageFileUploadingProgress, "upload ERROR:.." + imageFileUploadError); */

  const handleImageChange = ( e) => {
    const file = e.target.files[0];
    // only when the file exisits should I proceed.
    if ( file) {
      setImageFile( file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  // useEffect to upload an image verytime the image changes
  useEffect( () => {
    if (imageFile) {
      uploadImage()
    }
  }, [imageFile]);

  const uploadImage = async () => {
    /* console.log("uploading image..."); */
    setImageFileUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref( storage, fileName);
    const uploadTask = uploadBytesResumable( storageRef, imageFile);

    // to get the upload info
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadingProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError('Could not upload image (File must be less than 2MB)');
        setImageFileUploadingProgress(null);
        setImageFileUrl(null);
        setImageFile(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({...formData, profilePicture: downloadURL})
          setImageFileUploading(false);
        });
      }
    )
  };

  const handleChange = (e) => {
    setFormData( { ...formData, [e.target.id]: e.target.value } );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      return;
    }
    // updating the profile now 05 04 02
    // no data submission if image is still uploading
    if (imageFileUploading) {
      return;
    }
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/:${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("user profile updated successfully!");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
    }
  }

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form  
      className='flex flex-col gap-4'
      onSubmit={handleSubmit}
      >

        {/* PROFILE IMAGE UPLOAD */}
        <input 
        type="file" 
        accept='image/*' 
        onChange={handleImageChange}
        ref={filePickerRef}
        hidden
        />

        <div 
        className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'
        onClick={() => filePickerRef.current.click()}
        >
          { imageFileUploadingProgress && (
            <CircularProgressbar 
            value={imageFileUploadingProgress || 0} 
            text={`${imageFileUploadingProgress}%`}
            strokeWidth={5}
            styles={{
              root: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              },
              path: {
                stroke: `rgba(62, 152, 199, ${imageFileUploadingProgress / 100})`
              }
            }}
            />
          ) }
          <img  
            src={ imageFileUrl ||currentUser.profilePicture } 
            alt="user_profile" 
            className={`w-full h-full rounded-full border-8 border-[lightgray] object-cover 
            ${imageFileUploadingProgress && imageFileUploadingProgress < 100 && 'opacity-60'}`}
          />
        </div>
        {
          imageFileUploadError && <Alert color="failure">{imageFileUploadError}</Alert>
        }
        
        <TextInput
        type='text'
        id='username'
        placeholder='username'
        defaultValue={currentUser.username} onChange={handleChange}
        />
        <TextInput
        type='email'
        id='email'
        placeholder='email'
        defaultValue={currentUser.email} onChange={handleChange}
        />
        <TextInput
        type='password'
        id='password'
        placeholder='password' onChange={handleChange}
        />
        <Button 
        type='submit'
        gradientDuoTone="purpleToBlue"
        outline
        >
          Update
        </Button>
      </form>
      <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Signout</span>
      </div>
      {
        updateUserSuccess && (
          <Alert color="success" className='mt-5'>
            {updateSuccess}
          </Alert>
        )
      }
    </div>
  )
}

