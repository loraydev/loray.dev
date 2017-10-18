import React, { Component } from 'react';
import './PostCard.css';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  componentDidMount () {
    let dataURL = 'http://loray.dev/wp-json/wp/v2/posts/' + this.props.name + '/?_embed';
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

      let item = this.state.content;
      let style = {
        backgroundImage: "url(" + item.acf.main_image.url +")"
      }
      return (
        <li className="PostCard" style={style}>
          <header className="PCHeader">
            <p className="title">{item.title.rendered}</p>
          </header>
          <main className="PCMain">
              {item.acf.excerpt}
          </main>
          <footer className="PCFooter">
            <a href={item.link}>Découvrir</a>
          </footer>
        </li>
      );

    }

    return <div className="Loading"></div>;
  }

}

export default PostCard;
