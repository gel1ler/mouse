import { TCard, TSetBool } from '@/GlobalTypes'
import { Box, Button, Dialog, Input, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { createCard } from '../../firebase/clientApp'
import { useRouter } from 'next/navigation'

const MyDialog = ({ open, onClose, clickPosition }: { open: boolean, onClose: any, clickPosition: { x: number, y: number } }) => {
  const [file, setFile] = useState<File>()
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [comleted, setCompleted] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const createHandler = async () => {
    const cardData: Omit<TCard, 'src'> = {
      name,
      pos: clickPosition,
      date
    }
    file && await createCard(cardData, file)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <Box className='flex flex-col gap-2 items-center p-4'>
        {comleted ?
          <>
            <Image
              alt='add'
              width={100}
              height={100}
              src='/cool.png'
              style={{
                margin: '30px auto'
              }}
            />
            <Typography color='violet' variant="h6" textAlign='center'>
              МОЛОДЕЦ!!! Теперь обнови страницу.
            </Typography>
            <Button onClick={onClose} sx={{mx:'auto', width: 'min-content'}}>
              Закрыть
            </Button>
          </>

          : <>
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
            <TextField
              name='name'
              label='Название'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              name='date'
              label='Дата'
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <input
              type="file"
              onChange={handleChange}
            />
            <Button onClick={() => createHandler().then(() =>
              setTimeout(() => {
                setCompleted(true)
              }, 2000))
            }
            >
              Добавить
            </Button>
          </>
        }
      </Box>
    </Dialog>
  )
}

export default MyDialog