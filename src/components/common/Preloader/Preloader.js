import React from 'react';
import preloader from '../../../assets/images/preloader.svg'

const PreloaderIcon = preloader;

let Preloader = (props) => {
    return  (
        <img src={PreloaderIcon} />
    )}

export default Preloader;