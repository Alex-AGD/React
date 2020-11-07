import React from 'react';


let Preloader = (props) => {
    return  (
        <img src={process.env.PUBLIC_URL + '/preloader.svg'} />
    )}

export default Preloader;