import './ShowDetails.css'
import React from 'react'
import priv from '../../assets/images/priv.svg'
import plus from '../../assets/images/plus.svg'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useTheme } from '../ThemeProvider'
const ShowDetails = () => {
  let { id } = useParams()
  const theme = useTheme();
  console.log(theme);
  const { darkMode } = theme || {};
  const baseURL = `https://example-data.draftbit.com/books/${id}`;
  const [post, setPost] = React.useState(null);

  React.useEffect((id) => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (

    <div className={`showditails , ${darkMode ? 'dark' : 'light'}`} >
      <div className='left'>
        <img src={post.image_url} alt="" />
      </div>
      <div className='right'>
        <h1 className='title'>{post.title}</h1>
        <p className='authors'>{post.authors}</p>
        <h4 >About Book:</h4>
        <p className='desc'>{post.description}</p>
        <p className='ide'><img src={priv} alt="" />{post.id} <img src={plus} alt="" /></p>
        <div className='btns'>
          <button className='btn1'>Add to cart</button>
          <button>Favorite</button>
        </div>
        <div className='num'>
          <p > <span className='span1'>Pages Number :</span><span>{post.num_pages}</span></p>
          <p><span className='span1'>Rating Count :</span><span>{post.rating_count}</span></p>
          <p><span className='span1'>Reviews:</span><span>{post.review_count}</span></p>
        </div>
        {/* <div className='left'>
      <img src={post.image_url} alt="" />
      </div>
      <div className='right'>
        <h1 className='title'>{post.title}</h1>
                        <p className='authors'>{post.authors}</p>
                        <h4 >About Book:</h4>
                        <p className='desc'>{post.description}</p>
                        <p className='ide'><img src={priv} alt="" />{post.id} <img src={plus} alt="" /></p>
                        <div className='btns'>
                          <button className='btn1'>Add to cart</button>
                          <button>Favorite</button>
                          </div>
                          <div className='num'>
                            <p > <span className='span1'>Pages Number :</span><span>{post.num_pages}</span></p>
                            <p><span className='span1'>Rating Count :</span><span>{post.rating_count}</span></p>
                            <p><span className='span1'>Reviews:</span><span>{post.review_count}</span></p>
                          </div>
      </div> */}
      </div>
      </div>

      )
}

      export default ShowDetails