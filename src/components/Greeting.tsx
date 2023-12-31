import { Box, Button, Dialog, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Greeting = ({ open, onClose }: { open: boolean, onClose: any }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <Box className='flex flex-col gap-2 items-center p-4 overflow-y-scroll'>
        <Typography color='violet' variant="h4" textAlign='center'>
          Дорогая Маша!
        </Typography>
        <Image
          alt='add'
          width={150}
          height={150}
          src='/greet.png'
          style={{
            margin: '30px auto'
          }}
        />
        <Typography variant="h6" textAlign='center'>
          Без тебя мне было плохо и грустно...{'((('}<br />
        </Typography>
        <Image
          alt='add'
          width={150}
          height={150}
          src='/(((.png'
          style={{
            margin: '30px auto'
          }}
        />
        <Typography variant="h6" textAlign='center'>
          Но после твоего появления, моя жизнь стала подобна жизни <b>воробья</b> который впервые научился летать.
        </Typography>
        <Box className='flex gap-4'>
          <Image
            alt='add'
            width={150}
            height={150}
            src='/))).png'
            style={{
              margin: '30px auto'
            }}
          />
          <Image
            alt='add'
            width={150}
            height={150}
            src='/bird.png'
            style={{
              margin: '30px auto'
            }}
          />
        </Box>
        <Typography variant="h6" textAlign='center'>
          Поздравляю тебя с нашим <b>первым Новым годом</b> и очень надеюсь, что каждый следующий год мы будем встречать вместе и в еще более теплых отношениях.
          Осознавать, что ты у меня есть это одно из самых пиздатых чувств в мире. Я тебя очень сильно люблю!
        </Typography>
        <Image
            alt='add'
            width={150}
            height={150}
            src='/chmock.png'
            style={{
              margin: '30px auto'
            }}
          />
          <Typography textAlign='center'>
            Если нажмешь 2 раза по какому то месту на полотне появится окошко с добавлением фотки. Что то я уже подобавлял.
          </Typography>
        <Button onClick={onClose} sx={{ mx: 'auto', width: 'min-content' }}>
          Закрыть
        </Button>
      </Box>
    </Dialog>
  )
}

export default Greeting