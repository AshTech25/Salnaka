import React from 'react';

const styles = {
    thumb: {
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: 'border-box',
        position:'relative',
        textAlign:'center'
    },
    thumbInner: {
        display: 'flex',
        minWidth: 0,
        overflow: 'hidden',
    },  
    img: {
        display: 'block',
        width: 'auto',
        height: '100%'
    },  
    removeLink: {
        position:'absolute',
        cursor:'pointer',
        bottom:-20,
        width:'100%'
    }
      
}


const Thumbnails = ({files,removeFile}) => {
    let filesArray = [];
    if(files.length > 0){
        filesArray = files.map((file,ind) => (
            <div style={styles.thumb} key={ind}>
                <div style={styles.thumbInner}>
                    <img
                    src={file.preview}
                    style={styles.img}
                    />
                    <span className='remove-link' style={styles.removeLink} onClick={()=>removeFile(ind)}>remove</span>
                </div>
            </div>
        ))
    } 
    return filesArray;
};

export default Thumbnails;