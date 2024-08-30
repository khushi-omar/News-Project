import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class NewsItem extends Component {
      

  render() {
    let {title, description, imageUrl, url, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
        <img src={!imageUrl?"https://g.foolcdn.com/editorial/images/782573/professional-stock-trader-broker-analyze-stock-chart-invest-retire-getty.jpg":imageUrl}/>
        <div className="card-body">
            <h5 className="card-title">{title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{left: '90%', zIndex:'1'}}>{source} 
  </span> </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
