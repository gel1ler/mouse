import React from 'react'
import './style.scss'
import { Box } from '@mui/material'

const Lights = () => {
    return (
        <Box
            className="fixed top-0 w-screen h-screen z-50 pointer-events-none"
        >
            <ul className="lightrope">
                {Array(100).fill(0).map((i, key) =>
                    <li key={key} />
                )}
            </ul>
        </Box>
    )
}

export default Lights