import React, { useState } from 'react'
import { storage } from 'Config/firebase';
import { ref } from 'firebase/storage';

export default function Profile() {
  const [file, setFile] = useState({})
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = () => {

    // Create a reference to 'mountains.jpg'
    const mountainsRef = ref(storage, file);
    const mountainImagesRef = ref(storage, file);
    // mountainsRef.name === mountainImagesRef.name;
    // mountainsRef.fullPath === mountainImagesRef.fullPath;
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
        <div className="card mx-auto my-3" style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
          <img src={file} className="rounded-circle" alt="profile" />
        </div>
        <button className="btn btn-success d-block mx-auto my-3" onClick={handleSubmit}>
          Upload
        </button>
      </div>
    </main>
  )
}
