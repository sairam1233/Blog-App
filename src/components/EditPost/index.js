/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgContainer,
  Heading,
  LabelEL,
  InputEl,
  FormEl,
  TextAreaEl,
  ButtonEl,
} from './styledcomponents'
import './index.css'

const EditPost = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  const Data = JSON.parse(localStorage.getItem('BlogList1'))
  const [BlogListData, setBlogList] = useState(Data)
  const findData = BlogListData.find(l => l.id === id)
  const {Title, Content, Date1, Author} = findData
  const [Title1, setTitle] = useState(Title)
  const [Content1, setContent] = useState(Content)
  const [Author1, setAuthor] = useState(Author)
  const [Date11, setDate] = useState(Date1)

  const onsetTitle = event => {
    setTitle(event.target.value)
  }
  const onSetContent = event => {
    setContent(event.target.value)
  }
  const onSetAuthor = event => {
    setAuthor(event.target.value)
  }
  const onSetDate = event => {
    setDate(event.target.value)
  }

  const onSubmitFnc = event => {
    event.preventDefault()
    const newObj = {
      id: uuidv4(),
      Title: Title1,
      Author: Author1,
      Content: Content1,
      Date1: Date11,
    }
    const findIndexData = BlogListData.findIndex(l => l.id === id)
    if (findIndexData !== -1) {
      BlogListData[findIndexData] = newObj
    } else {
      BlogListData.push(newObj)
    }
    setBlogList(prev => [...prev, newObj])
    console.log(Title)
    setTitle('')
    setAuthor('')
    setContent('')
    setDate('')
    localStorage.setItem('BlogList', JSON.stringify(BlogListData))
    const {history} = props
    history.replace('/')
  }

  return (
    <BgContainer>
      <Heading>Edit a Blog</Heading>
      <FormEl onSubmit={onSubmitFnc}>
        <LabelEL htmlFor="title">Blog Title:</LabelEL>
        <br />
        <InputEl
          type="text"
          id="title"
          placeholder="Blog"
          onChange={onsetTitle}
          value={Title1}
          required
        />

        <br />
        <LabelEL htmlFor="author">Blog Author:</LabelEL>
        <br />
        <InputEl
          type="text"
          id="author"
          placeholder="Author"
          onChange={onSetAuthor}
          value={Author1}
          required
        />
        <br />
        <LabelEL htmlFor="content">Blog Content:</LabelEL>
        <br />
        <TextAreaEl
          id="content"
          rows="4"
          cols="50"
          placeholder="content"
          onChange={onSetContent}
          value={Content1}
          required
        />
        <br />
        <LabelEL htmlFor="date">Publication Date:</LabelEL>
        <br />
        <InputEl
          type="date"
          id="date"
          placeholder="Date"
          value={Date11}
          onChange={onSetDate}
          required
        />
        <br />
        <div className="bb">
          <ButtonEl type="submit">Update</ButtonEl>
        </div>
      </FormEl>
    </BgContainer>
  )
}

export default EditPost
