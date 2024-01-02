import { TCard } from '@/GlobalTypes'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const easeFunction = (cord: number, mouseCord: number) => {
    let a = 0
    if (Math.abs(mouseCord - cord) < 400)
        a = (mouseCord - cord) * 0.1
    return cord + a
}

const MyImage = ({ cardData, mounted }: { cardData: TCard, mounted?: boolean }) => {
    const [position, setPosition] = useState({ x: 3333 / 2, y: 3333 / 2 })
    const [op, setOp] = useState(0)

    useEffect(() => {
        if (mounted) {
            setTimeout(() => {
                setPosition(cardData.pos)
                setOp(1)
            }, Math.random() * 1000)
        }
    },)

    const { name, date, src, pos } = cardData
    return (
        <Box
            className='absolute transition-all duration-500'
            sx={{
                opacity: op,
                top: position.y,
                left: position.x,
            }}
        >

            <Image
                className='rounded-lg shadow-xl object-contain min-w-72'
                src={src}
                alt='1'
                width={300}
                height={300}
            />
            <Typography sx={{ mt: '4px'}}>
                {name}
            </Typography>
            <Typography color='GrayText' variant='body2'>
                {date}
            </Typography>
        </Box>
    )
}

export default MyImage