import {Link} from 'react-router-dom'
import './index.css'

const ViewPost = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  const Data = JSON.parse(localStorage.getItem('BlogList'))
  const DataList = Data.filter(l => l.id === id)
  const {Title, Author, Content, Date1} = DataList[0]
  console.log(DataList)

  return (
    <div className="cd-1">
      <h1 className="h2">Blog Item</h1>
      <div className="cd-2">
        <div className="dd-1">
          <h3>
            Title: <span className="sp">{Title}</span>
          </h3>
          <p>{Date1}</p>
        </div>
        <hr />
        <p className="pp">{Content}</p>
        <hr />
        <div className="dd-1">
          <h3>
            Author: <span className="sp">{Author}</span>
          </h3>
          <Link to="/">
            <button type="button" className="btn">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ViewPost
