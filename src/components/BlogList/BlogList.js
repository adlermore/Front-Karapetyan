
import React, {useContext,  useState, useEffect } from 'react';
import PageLoader from '../PageLoader/PageLoader';
import JsonContext from '../JsonContext/JsonContext';
import BlogPopup from '../BlogPopup/BlogPopup';

const BlogList = () => {

  const {BlogListData} = useContext(JsonContext);
  const [loading, setLoading] = useState(true);
  const [currBlogdata, setCurrBlogdata] = useState({});
  const [BlogPopupOpened , setBlogPopupOpened]=useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    const handleBodyClick = () => {
      setBlogPopupOpened(false);
      document.body.classList.remove('hidden');
    };
   
    
    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [])


  const handlePopup = (e , blog) =>{
    e.preventDefault();
    e.stopPropagation();
    setCurrBlogdata(blog);
    setBlogPopupOpened(!BlogPopupOpened);
    document.body.classList.add('hidden');
  }

  const handlePopupToggle = () =>{
    setBlogPopupOpened(!BlogPopupOpened);
    document.body.classList.remove('hidden');
  }

  if (loading) {
    return (
      <PageLoader /> 
    )
  }

  return (
    <div className="blog_container">
      <div className='custom_container'>
        <div className='blog_list'>
          {BlogListData && BlogListData.map((blog, index) => (
            <div key={index} className='blog_block'>
              <a href="/#" 
                className='blog_image'
                onClick={e => handlePopup(e , blog)}
              >
                <img src={blog.img} 
                  srcSet={`${blog.img} 1x, ${blog.img_2x} 2x`}
                  alt="blogImage" 
                />
              </a>
              <div className='blog_tags'>{blog.tags}</div>
              <a href="/#" onClick={e => handlePopup(e , blog)} className='blog_title'>{blog.title}</a>
              <div className='info_inlie'>
                <span className='blog_autor'>{blog.autor}</span>
                <span className='blog_date'>{blog.date}</span>
                <span className='blog_views'>{blog.views} Views</span>
              </div>
              <div className='blog_text'>{blog.text}</div>
            </div>
          ))}
        </div>
      </div>
      <BlogPopup blogdata={currBlogdata} handlePopupToggle={handlePopupToggle} BlogPopupOpened={BlogPopupOpened}/>
    </div>
  )
}

export default BlogList;