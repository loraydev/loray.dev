import React, { Component } from 'react';

class Logo extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    let dataURL = 'http://loray.dev/wp-json/acf/v2/options/logo_image/?_embed';
    fetch (dataURL)
      .then( res => res.json() )
      .then( res => {
        this.setState({
          content: res
        })
      });
  }
  
  render() {
    if (this.state.content.logo_image) {
    
      return (
        <div className="Logo">
          <a href="/">
            <img src={this.state.content.logo_image} alt="Logo"/>
          </a>
        </div>
      );

    }
    
    return <div className="Loading"></div>;

  }

}

export default Logo;
