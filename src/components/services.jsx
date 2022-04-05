import { useEffect, useState } from 'react'
import MediaCard from './Card';
import Box from '@mui/material/Box';

export const Services = (props) => {

  const [artikel, setArtikel] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=68e1beaf012944f8ac4e302551b450ed').then((result) => {
      result.json().then(function (value) {
        setArtikel(value)
      })
    })
  }, [])

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Artikel</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <Box component='div' sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
        }}>
          {artikel?.articles.map(d => (<MediaCard image={d.urlToImage} title={d.title} description={d.description} url={d.url} />))}
        </Box>

        {/* <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
      </div>
    </div>
  )
}
