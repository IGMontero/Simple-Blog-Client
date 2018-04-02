import React, { Component } from 'react';
import { Route , Switch} from 'react-router-dom'


//Components
import NavBar from './components/navbar';
import EntryHeader from './components/entry_header';
import Footer from './components/footer';
import PageIndex from './components/page_index';
import PagePosts from './components/page_posts';
import PageNewPost from './components/page_new_post';
import PageShowPost from './components/page_show_post';
import PageEditPost from './components/page_edit_post';


class App extends Component {

  render() {
    return (
        <div className = "App" >
          <NavBar />
          <Switch>
            <Route path = "/posts/:id/edit" component={EntryHeader} />
            <Route path = "/posts/new" component={EntryHeader} />
            <Route path = "/posts/:id" component={EntryHeader} />
            <Route path = "/posts" component={EntryHeader} />
            <Route path = "/" component={EntryHeader} />
          </Switch>
          <Switch>
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
