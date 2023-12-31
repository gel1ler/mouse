import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Mushrooms = () => {
    return (
        <Box
            className="fixed bottom-0 w-screen h-screen z-50 pointer-events-none flex"
        >
            {Array(100).fill(0).map((i, key) =>
                <Image
                    key={key}
                    className='object-contain mt-auto translate-y-2'
                    src={'/mushrooms/' + Math.ceil(Math.random() * 5) + '.webp'}
                    width={30}
                    height={50}
                    alt='Гриб'
                />
            )}
        </Box>
    )
}

export default Mushrooms