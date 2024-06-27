/* eslint-disable jsx-a11y/control-has-associated-label */
import {Link} from 'react-router-dom'
import {AiOutlineDelete} from 'react-icons/ai'
import {CiEdit} from 'react-icons/ci'
import {LiEl, Heading1, Container} from './styledcomponents'
import './index.css'

const BlogPost = props => {
  const {data, fnc} = props
  const {Title, Content, Date1, id, Author} = data
  document.title = 'BlogApp'
  const onDelete = () => {
    fnc(id)
  }

  return (
    <LiEl>
      <div className="pf">{Title[0]}</div>
      <div className="d2">
        <Link to={`/post/${id}`} className="lnk">
          <div className="dd">
            <Heading1>{Title}</Heading1>
            <p className="p1">{Date1}</p>
          </div>
          <Container>
            <p>{Content}</p>
          </Container>
          <p className="pp1">{Author}</p>
        </Link>
        <div className="dd pd">
          <Link to={`/edit/${id}`}>
            <button type="button" className="bb">
              <CiEdit className="ic" />
            </button>
          </Link>
          <button type="button" className="bb" onClick={onDelete}>
            <AiOutlineDelete className="ic" />
          </button>
        </div>
      </div>
    </LiEl>
  )
}

export default BlogPost
