import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box } from '@mui/material'
import { useState } from 'react';

export const Header = (props) => {

  const [index, setIndex] = useState(0);

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const handleChangeIndex = (index) => {
    setIndex(index);
  }

  return (
    <>

      <Box component='div' >

        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex} springConfig={{ duration: '1m', delay: '1m', easeFunction: 'ease' }}>
          {/* <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div> */}
          <img src="./img/intro-bg.jpg" alt="gambar-1" className='intro' />
          <img src="./img/intro-bg-2.jpg" alt="gambar-1" className='intro' />
          <img src="./img/intro-bg-3.jpg" alt="gambar-1" className='intro' />
        </AutoPlaySwipeableViews>

        {/* <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} /> */}
      </Box>
    </>
  )
}
