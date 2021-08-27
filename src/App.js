import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { loadPosts } from './components/utils/load-posts';
import { Posts } from './components/Posts';
class App extends Component {
  state = {
    posts: []
  }
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos })
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts}/>
      </section>

    );
  }

}

export default App;
