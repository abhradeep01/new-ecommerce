import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack,ArrowForward } from '@mui/icons-material';
function HeadingCart({mainHeading,subHeading,arrowIcon}) {
    return(
        <div className='w-full flex flex-row justify-between'>
            <div className='w-fit flex flex-col gap-1'>
                <div className='w-fit flex flex-row gap-1.5'>
                    <div className='w-2.5 h-5 bg-red-500 rounded-sm shadow shadow-red-300'></div>
                    <h5 className='text-base text-red-500 font-semibold capitalize m-0'>
                        {mainHeading}
                    </h5>
                </div>
                <div>
                    <h3 className='text-xl capitalize font-bold'>
                        {subHeading}
                    </h3>
                </div>
            </div>
            <div className={`justify-self-start w-fit h-fit`}>
                {
                    arrowIcon?
                    <div className='w-fit flex flex-row gap-1'>
                        <IconButton>
                            <ArrowBack/>
                        </IconButton>
                        <IconButton>
                            <ArrowForward/>
                        </IconButton>
                    </div>:
                    <button className='w-fit bg-red-500 text-white text-base font-semibold capitalize p-1 shadow shadow-red-200 rounded hover:shadow-red-300 hover:shadow-sm'>
                        view all
                    </button>
                }
            </div>
        </div>
    )
}

export default HeadingCart