import {Switch, Route} from 'react-router-dom'
import BlogPostList from './components/BlogPostList'
import Header from './components/Header'
import './App.css'
import {GlobalStyle} from './Styles/GlobalStyles'
import NotFound from './components/NotFound'
import AddPost from './components/AddPost'
import ViewPost from './components/ViewPost'
import EditPost from './components/EditPost'

// Replace your code here
const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path="/" component={BlogPostList} />
      <Route exact path="/addpost" component={AddPost} />
      <Route exact path="/post/:id" component={ViewPost} />
      <Route exact path="/edit/:id" component={EditPost} />
      <NotFound />
    </Switch>
  </>
)
export default App
