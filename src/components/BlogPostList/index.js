/* eslint-disable import/no-named-as-default-member */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import BlogPost from '../BlogPost'
import {BgContainer, UlEl} from './styledcomponents'
import './index.css'

const BlogPostList = () => {
  document.title = 'BlogApp'
  let Data = JSON.parse(localStorage.getItem('BlogList'))
  if (Data === null) {
    Data = []
  }
  const [dataList, setDataList1] = useState(Data)
  const onDeleteFnc = id => {
    const newData = dataList.filter(l => l.id !== id)
    localStorage.setItem('BlogList', JSON.stringify(newData))
    setDataList1(newData)
  }

  useEffect(() => {
    localStorage.setItem('BlogList1', JSON.stringify(dataList))
  })

  return (
    <BgContainer>
      {dataList.length === 0 && (
        <div className="dv1">
          <h1 className="h3">Create a New Blog</h1>
          <Link to="/addpost">
            <button className="btn" type="button">
              Get Started
            </button>
          </Link>
        </div>
      )}
      <UlEl>
        {dataList.map(l => (
          <BlogPost key={l.id} data={l} fnc={onDeleteFnc} />
        ))}
      </UlEl>
    </BgContainer>
  )
}

export default BlogPostList
