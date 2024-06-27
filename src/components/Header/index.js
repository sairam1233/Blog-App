import {Component} from 'react'
import {Link} from 'react-router-dom'
import {NavEl, HrEL, H1, UlEl, LiEl} from './styledcomponents'
import './index.css'

class Header extends Component {
  render() {
    return (
      <>
        <NavEl>
          <Link to="/" className="ll">
            <H1>Blog-App</H1>
          </Link>
          <UlEl>
            <Link to="/" className="ll">
              <LiEl>Home</LiEl>
            </Link>
            <Link to="/addpost" className="ll">
              <LiEl>New Blog</LiEl>
            </Link>
          </UlEl>
        </NavEl>
        <HrEL />
      </>
    )
  }
}

export default Header
