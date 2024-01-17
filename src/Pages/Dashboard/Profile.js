import React, { useState } from 'react'
import { fireStore, storage } from 'Config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Toastify from 'toastify-js'
import { setDoc, doc } from 'firebase/firestore';

export default function Profile() {
  const [file, setFile] = useState(null)
  let user = localStorage.getItem("user")
  user = JSON.parse(user)
  console.log('user', user)
  // let url = ""
  function handleChange(e) {
    // console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  const handleSubmit = () => {
    uploadFile()
  }
  const uploadFile = async () => {
    const storageRef = ref(storage, 'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setDoc(doc(fireStore, "Users", user.id), {
            email : user.email ,
            id : user.id ,
            fullname : user.fullname ,
            imageUrl: downloadURL
          });
          let userToStore =  {
            email : user.email ,
            id : user.id ,
            fullname : user.fullname ,
            imageUrl: downloadURL
          }
          let activeUser = JSON.stringify(userToStore)
          localStorage.setItem("user",activeUser)
          Toastify({
            text: "Uploaded",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #77f600, #00cd3e)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        });
      }
    );
    
    console.log('file', file)
  }
  return (
    <main>
      <div className="container">
        <div className="row my-5">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
            <input type="file" name="pic" className="form-control" id="inputGroupFile01" onChange={handleChange} />
          </div>
        </div>
        <div className="card mx-auto my-3" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <img src={file} className="rounded-circle" alt="profile" />
        </div>
        <button className="btn btn-success d-block mx-auto my-3" onClick={handleSubmit}>
          Upload
        </button>
      </div>
    </main>
  )
}
