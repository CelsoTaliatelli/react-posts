import './Home.css';
import { Component } from 'react';
import { loadPosts } from '../../components/utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
class Home extends Component {
  state = {
    posts: [],
    allPosts:[],
    page:0,
    postsPerPage:2
  }
  loadPosts = async () => {
    const{page,postsPerPage} = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page,postsPerPage),
      allPosts: postsAndPhotos })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage,nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts,page:nextPage});
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  render() {
    const { posts,page,postsPerPage,allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts}/>
        <Button 
          text="Load more posts" 
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
          />
      </section>

    );
  }

}

export default Home;
