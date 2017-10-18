import React, { Component } from 'react';

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    let dataURL = 'http://loray.dev/wp-json/acf/v2/options/main_menu/?_embed';
    fetch (dataURL)
      .then( res => res.json() )
      .then( res => {
        this.setState({
          content: res
        })
      });
  }
  
  render() {
    if (this.state.content.main_menu) {

      let menu = this.state.content.main_menu.map( (item, index) => {
        return (
          <li key={index}>
            <a href={item.link}><i className={"fa " + item.icon} aria-hidden="true"></i> {item.title}</a>
          </li>
        );
      });
    
      return <ul className="Menu MainMenu">{menu}</ul>;

    }
    
    return <div className="Loading"></div>;

  }

}

export default MainMenu;
