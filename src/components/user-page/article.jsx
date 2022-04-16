import { useEffect, useState } from 'react'
import ArticleCard from './article_card';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

export const Articles = (props) => {

  const [artikel, setArtikel] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=68e1beaf012944f8ac4e302551b450ed').then((result) => {
      result.json().then(function (value) {
        setArtikel(value)
      })
    })
  }, [])

  const handleChange = (event, value) => {
    console.log('event: ', event);
    console.log('value: ', value);
    setPage(value);
  };

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Artikel</h2>
        </div>
        <Box component='div' sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
        }}>
          {artikel?.articles.map((d, i) => (<ArticleCard image={d.urlToImage} title={d.title} description={d.description} url={d.url} />))}
        </Box>
        <Box component='div' style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
          <Pagination count={artikel?.articles.length} page={page} onChange={handleChange}></Pagination>
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
