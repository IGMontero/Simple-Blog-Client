import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom'


//Components
import NavBar from './containers/navbar';
import EntryHeader from './containers/entry_header';
import Footer from './components/footer';
import PageIndex from './containers/page_index';
import PagePosts from './containers/page_posts';
import PageNewPost from './containers/page_new_post';
import PageShowPost from './containers/page_show_post';
import PageEditPost from './containers/page_edit_post';
import PageRegisterUser from './containers/page_register_user';
import PageLoginUser from './containers/page_login_user';



class App extends Component {

  render() {
    return (
        <div className = "App" >
          <NavBar />
          <Switch>
            <Route path = "/login" component = {EntryHeader} />
            <Route path = "/register" component = {EntryHeader} />
            <Route path = "/posts/:id/edit" component={EntryHeader} />
            <Route path = "/posts/new" component={EntryHeader} />
            <Route path = "/posts/:id" component={EntryHeader} />
            <Route path = "/posts" component={EntryHeader} />
            <Route path = "/" component={EntryHeader} />
          </Switch>
          <Switch>
            <Route path = "/login" component = {PageLoginUser} />
            <Route path = "/register" component = {PageRegisterUser} />
            <Route path = "/posts/:id/edit" component = {PageEditPost} />
            <Route path = "/posts/new" component = {PageNewPost} />
            <Route path = "/posts/:id" component = {PageShowPost} />
            <Route path="/posts" component={PagePosts} />
            <Route path="/" component={PageIndex} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
