import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { tilte, descriptiono , imageUrl,newsURL,author, date, source } = this.props;

    return (
      <div className = " my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' ,zIndex:'1'}}>
        {source}<span className="visually-hidden">unread messages</span></span>
          <img src ={!imageUrl?"https://images.livemint.com/img/2021/08/27/600x338/c6cf7f18-efb3-11eb-a043-f8aaa01a1d1e_1629710401754_1630075834510.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tilte}</h5>
            <p className="card-text">
              {descriptiono}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Unkhown":author} on {new Date( date).toGMTString()}</small></p>
            <a rel="noreferrer"href={newsURL} target ="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
