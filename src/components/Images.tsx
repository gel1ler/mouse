import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const easeFunction = (cord: number, mouseCord: number) => {
    let a = 0
    if (Math.abs(mouseCord - cord) < 400)
        a = (mouseCord - cord) * 0.1
    return cord + a
}

const Images = ({ x, y, mousePosition }: { x: number, y: number, mousePosition: { x: number, y: number } }) => {
    return (
        <Box
            className='absolute'
            style={{
                top: y,
                left: x
            }}
        >
            <Image
                className='rounded-lg shadow-xl'
                src='/1.png'
                alt='1'
                width={500}
                height={300}
            />
            <Typography>
                Название фотографии
            </Typography>
            <Typography color='GrayText' variant='body2'>
                14.01.2023
            </Typography>
        </Box>
    )
}

export default Images