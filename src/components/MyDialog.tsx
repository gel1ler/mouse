import { TSetBool } from '@/GlobalTypes'
import { Box, Dialog, Input, Typography } from '@mui/material'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'

const MyDialog = ({ open, onClose }: { open: boolean, onClose: TSetBool }) => {
  const [file, setFile] = useState<File>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <Box sx={{ p: 2 }}>
        <Typography color='violet' variant="h6" textAlign='center'>
          Добавить фото на это место
        </Typography>
        <Image
          alt='add'
          width={100}
          height={100}
          src='/add.png'
          style={{
            margin: '30px auto'
          }}
        />
        <input
          type="file"
          onChange={handleChange}
        />
      </Box>
    </Dialog>
  )
}

export default MyDialog