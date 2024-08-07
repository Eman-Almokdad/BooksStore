import { Link, useParams } from 'react-router-dom'

import './Books.css'
import bookopen from '../../assets/images/book-open.svg'
import star from '../../assets/images/star.svg'
import React, { useState, useEffect, Children, createContext, useContext } from 'react'
import axios from 'axios'
import ShowDetails from '../ShowDetails/ShowDetails'
import priv from '../../assets/images/priv.svg'
import plus from '../../assets/images/plus.svg'
import { useTheme } from '../ThemeProvider'


const Books = () => {
  const [data, setdata] = useState([]);
  const [ditails, setditails] = useState(null)
  useEffect(() => {
    axios.get('https://example-data.draftbit.com/books?_limit=8')
      .then(response => {
        console.log(response.data)
        setdata(response.data)
      })
  }, []);
  const show = (id) => {
    axios.get(`https://example-data.draftbit.com/books/${id}`)
      .then(res => {
        console.log(res.data)
        setditails(res.data)
        console.log(ditails)
      }
      )
  }


  const theme = useTheme();
  console.log(theme);
  const { darkMode } = theme || {};
  return (
    <div className={`books ,  ${darkMode ? 'dark' : 'light'} `}>
      <h1 className='book-h1'>Selected for you</h1>
      <div className='container'>
        {data?.map((Element, index) => {
          return (
            <>
              <div className='card' key={index}>
                <div className='top'>
                  <img src={Element.image_url} alt="" className='img-top' />
                </div>
                <div className='buttom'>
                  <h1 key={index}>{Element.authors}</h1>
                  <div className='child'>
                    <p className='title1'> <img src={bookopen} alt="" /> {Element.num_pages} Pages</p>
                    <p className='title2'><img src={star} alt="" />{Element.rating}</p>
                  </div>

                </div>

                <Link to={`/${Element.id}`} className="btn">Detailes</Link>{/* <button onClick={() => { show(Element.id) }} key={index}> */} {/* <Link to={`${(Element.id)}`} > */}{/* Show Details */}{/* </Link> */} {/* </button> */}



              </div>
              {/* {ditails &&  <ShowDetails data={ditails} id="id"/> } */}
            </>

          )
        })}

      </div>
    </div>
  )
}

export default Books