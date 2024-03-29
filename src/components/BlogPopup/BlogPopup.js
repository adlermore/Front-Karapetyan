import React from "react";

const BlogPopup = ({ blogdata, handlePopupToggle, BlogPopupOpened }) => {

  const handlePopupClose = (e) => {
    e.preventDefault();
    handlePopupToggle();
  }

  return (
    <div className={BlogPopupOpened ? 'opened popup_container' : 'popup_container'}>
      <div className="popup">
        <div className="popup_inner">
          <div className="popup_container" onClick={e => e.stopPropagation()}>
            <a href="/#" className="popup_close icon-close" onClick={(e) => handlePopupClose(e)}> </a>
            {blogdata &&
              <div className='blog_block'>
                <div className='blog_image'>
                  <img src={blogdata.img_2x}
                    alt="blogImage"
                  />
                </div>
                <div className='blog_tags'>{blogdata.tags}</div>
                <a href="/#" className='blog_title'>{blogdata.title}</a>
                <div className='info_inlie'>
                  <span className='blog_autor'>{blogdata.autor}</span>
                  <span className='blog_date'>{blogdata.date}</span>
                  <span className='blog_views'>{blogdata.views} Views</span>
                </div>
                <div className='blog_text'>{blogdata.text}</div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPopup;