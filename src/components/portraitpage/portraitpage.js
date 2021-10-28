import React from "react";
import portrait from '../../assets/images/portrait.png'

import './portraitpage.scss';

const PortraitPage = () => {
    return (
        <div className='portraitpage-wrapper'>
            <div className='title-div'>
                <div className='rect-div'>
                    <NewRectangle/>
                    <NewRectangle/>
                    <NewRectangle/>
                    <NewRectangle/>
                </div>
                <p className='title-text'>ALL PRODUCTS</p>
            </div>
            <div className='content-wrapper'>
                <div className='portrait-row-one'>
                    <NewPortrait/>
                    <NewPortrait/>
                    <NewPortrait/>
                    <NewPortrait/>
                </div>
                <div className='portrait-row-two'>
                    <NewPortrait/>
                    <NewPortrait/>
                    <NewPortrait/>
                    <NewPortrait/>
                </div>
            </div>
        </div>
    )
}

const NewPortrait = () => {
    return (
        <div className='portrait-wrapper'>
            <div className='portrait-icon'>
                <img    
                    className='portrait'
                    alt='holding a trophy'
                    src={portrait}
                    decoding='async'
                    loading='lazy'
                />
            </div>  
            <div className='portrait-price'>
                <p className='price-text'>1,234.56</p>
                <p className='price-dolar'>($123,456)</p>
            </div>
            <hr className='portrait-hr'/>
            <div className='portrait-resume'>
                <div className='portrait-svg-one'>
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16667 0C9.6269 0 10 0.373096 10 0.833333V2.5C10 2.96024 9.6269 3.33333 9.16667 3.33333C8.70643 3.33333 8.33333 2.96024 8.33333 2.5V0.833333C8.33333 0.373096 8.70643 0 9.16667 0Z" fill="#777E91"/>
                        <path d="M9.16667 10C9.6269 10 10 10.3731 10 10.8333V15.8333C10 16.2936 9.6269 16.6667 9.16667 16.6667C8.70643 16.6667 8.33333 16.2936 8.33333 15.8333V10.8333C8.33333 10.3731 8.70643 10 9.16667 10Z" fill="#777E91"/>
                        <path d="M0.833333 3.33333C1.29357 3.33333 1.66667 3.70643 1.66667 4.16667V10.8333C1.66667 11.2936 1.29357 11.6667 0.833333 11.6667C0.373096 11.6667 0 11.2936 0 10.8333V4.16667C0 3.70643 0.373096 3.33333 0.833333 3.33333Z" fill="#777E91"/>
                        <path d="M0.833333 15C1.29357 15 1.66667 15.3731 1.66667 15.8333V19.1667C1.66667 19.6269 1.29357 20 0.833333 20C0.373096 20 0 19.6269 0 19.1667V15.8333C0 15.3731 0.373096 15 0.833333 15Z" fill="#777E91"/>
                    </svg>
                </div>
                <div className='portrait-svg-two'>
                    <svg width="14" height="16" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66536 3.1665C8.66536 1.78579 9.78465 0.666504 11.1654 0.666504C12.5461 0.666504 13.6654 1.78579 13.6654 3.1665V8.1665C13.6654 9.54722 12.5461 10.6665 11.1654 10.6665C9.78465 10.6665 8.66536 9.54722 8.66536 8.1665V3.1665ZM11.9987 3.1665V8.1665C11.9987 8.62674 11.6256 8.99984 11.1654 8.99984C10.7051 8.99984 10.332 8.62674 10.332 8.1665V3.1665C10.332 2.70627 10.7051 2.33317 11.1654 2.33317C11.6256 2.33317 11.9987 2.70627 11.9987 3.1665Z" fill="#777E91"/>
                    </svg>
                </div>
                <div className='portrait-svg-three'>
                    <svg width="14" height="16" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.332031 11.4998C0.332031 10.1191 1.45132 8.99984 2.83203 8.99984C4.21274 8.99984 5.33203 10.1191 5.33203 11.4998V13.1665C5.33203 14.5472 4.21274 15.6665 2.83203 15.6665C1.45132 15.6665 0.332031 14.5472 0.332031 13.1665V11.4998ZM3.66536 11.4998V13.1665C3.66536 13.6267 3.29227 13.9998 2.83203 13.9998C2.37179 13.9998 1.9987 13.6267 1.9987 13.1665V11.4998C1.9987 11.0396 2.37179 10.6665 2.83203 10.6665C3.29227 10.6665 3.66536 11.0396 3.66536 11.4998Z" fill="#777E91"/>  
                    </svg>
                </div>
                <p>Lorem Ipsum Dolor Sit 12345</p>
            </div>
        </div>
    )
}

const NewRectangle = () => {
    return (
        <svg width="34" height="209"
            className='rect-svg'
        >
            <rect width="34" height="209"/> 
        </svg>
    )
}

export default PortraitPage;