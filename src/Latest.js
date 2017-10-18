import React, { Component } from 'react';
import PostCard from './PostCard';
import './Latest.css';

class Latest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  componentDidMount () {
    let dataURL = 'http://loray.dev/wp-json/wp/v2/posts/?_embed';
    fetch (dataURL)
      .then( res => res.json() )
      .then( res => {
        this.setState({
          content: res
        })
      });
  }

  render () {
    if (this.state.content !== '') {
      let latest = 4;
      let posts = [];
      for (let i = 0; i < latest; i++) {
        if (this.state.content[i]) {
          posts.push(
            <PostCard name={this.state.content[i].id} />
          );
        }
      }
      return (
        <ul className="PostCards">
          {posts}
        </ul>
      );

    }

    return <div className="Loading"></div>;
  }

}

export default Latest;
