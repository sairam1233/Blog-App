/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import {useState, useEffect} from 'react'
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

const AddPost = () => {
  const [Title, setTitle] = useState('')
  const [Content, setContent] = useState('')
  const [Author, setAuthor] = useState('')
  const [Date1, setDate] = useState('')
  let Data = JSON.parse(localStorage.getItem('BlogList1'))
  if (Data === null) {
    Data = []
  }
  const [BlogListData, setBlogList] = useState(Data)

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
      Title,
      Author,
      Content,
      Date1,
    }
    setBlogList(prev => [...prev, newObj])
    console.log(Title)
    setTitle('')
    setAuthor('')
    setContent('')
    setDate('')
  }

  useEffect(() => {
    localStorage.setItem('BlogList', JSON.stringify(BlogListData))
  }, [BlogListData])

  return (
    <BgContainer>
      <Heading>Add a New Blog</Heading>
      <FormEl onSubmit={onSubmitFnc}>
        <LabelEL htmlFor="title">Blog Title:</LabelEL>
        <br />
        <InputEl
          type="text"
          id="title"
          placeholder="Blog"
          onChange={onsetTitle}
          value={Title}
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
          value={Author}
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
          value={Content}
          required
        />
        <br />
        <LabelEL htmlFor="date">Publication Date:</LabelEL>
        <br />
        <InputEl
          type="date"
          id="date"
          placeholder="Date"
          value={Date1}
          onChange={onSetDate}
          required
        />
        <br />
        <div className="bb">
          <ButtonEl type="submit">Add Blog</ButtonEl>
        </div>
      </FormEl>
    </BgContainer>
  )
}

export default AddPost
