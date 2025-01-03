"use client"
import React from 'react'

function Map() {
   

    return (
        <div className='overflow-auto relative w-full h-full'>
            <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=IIITS&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                width="100%" 
                height="100%" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default Map
