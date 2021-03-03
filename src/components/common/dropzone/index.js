import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import PropTypes from 'prop-types';

import Thumbnails from './thumbnail';
import './style.css';

const styles = {
    thumbsContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16
    },
}
    


function DropzoneComponent({placeholder,accept,maxFiles,handleChange,selectedFiles}) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const {getRootProps, getInputProps} = useDropzone({
    accept: accept,
    maxFiles:maxFiles,
    disabled: files.length === maxFiles,
    // multiple: true,
    onDrop: acceptedFiles => {
        if(acceptedFiles.length + files.length <= maxFiles){
            let droppedFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
              }))
            let allFiles = [...files,...droppedFiles];
            // allFiles.push(...droppedFiles)
          setFiles(allFiles);
          handleChange(allFiles);
          
        }else{
            if(acceptedFiles.length + files.length > maxFiles){
                setTimeout(()=> {setError('')}, 4000)
            }
        }
    },
    onDropRejected:(rejectedFiles) => {
        if(rejectedFiles.length > 0){
            let msg = rejectedFiles[0].errors[0].message
            setError(msg);
            setTimeout(()=> {setError('')}, 4000)
        }
    }
  });

  if(selectedFiles && selectedFiles.length > 0 && files.length == 0){
    let droppedFiles = selectedFiles.map(file => Object.assign(file, {
        preview: file.url
      }))
    
    setFiles(droppedFiles);
    // handleChange(allFiles);
  }

  const removeFile = (index) => {
    let tempFiles= [...files];
    tempFiles.splice(index,1);
    setFiles(tempFiles);
    handleChange(tempFiles);
  }

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
   
     files.forEach(file => {
        URL.revokeObjectURL(file.preview)
    });
  }, [files]);

  return (
    <section className="dropzone-container">
      <div {...getRootProps({className: 'dropzone disabled'})}>
        <input {...getInputProps()} />
        <p className={'placeholder'}>{placeholder}</p>
        <p className={'error'}>{error}</p>
      </div>
      <aside style={styles.thumbsContainer}>
        <Thumbnails files={files}  removeFile={removeFile} />
      </aside>
    </section>
  );
}

DropzoneComponent.defaultProps = {
    placeholder: "Drag 'n' drop some files here, or click to select files",
    accept:'image/*',
    maxFiles:1
};

DropzoneComponent.propTypes = {
    placeholder: PropTypes.string,
    accept: PropTypes.string,
    maxFiles: PropTypes.number,
    handleChange: PropTypes.func.isRequired,
    selectedFiles:PropTypes.array
};

export default DropzoneComponent;