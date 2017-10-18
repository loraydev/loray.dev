import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/fr';
import './Article.css';

class Article extends Component {
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
        <section className="ArticleSection">
          <header className="ArticleHeader">
            <section className="ArticleSubsection">
              <h1>{item.title.rendered}</h1>
              <i className="fa fa-clock-o"></i><Moment fromNow>{item.date}</Moment>
            </section>
          </header>
          <section className="MainImage" style={style}></section>
          <main className="ArticleMain">
            <section className="ArticleSubsection" dangerouslySetInnerHTML={{ __html: item.content.rendered }}>
            </section>
          </main>
        </section>
      );

    }

    return <div className="Loading"></div>;
  }

}

export default Article;
