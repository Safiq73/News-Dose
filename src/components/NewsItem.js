import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, readMore, author, date, source } = this.props
        return (
            <div >
                <div className="card mb-4" >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className='badge rounded-pill bg-danger'>{source}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : 'https://images.moneycontrol.com/static-mcnews/2021/12/sensex1-770x433.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{typeof (title) === undefined ? 'No title' : title}... </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
                        <a href={readMore} className="btn btn-primary" target='_blank' rel="noreferrer">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
