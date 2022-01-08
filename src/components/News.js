import React, { Component } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
    pageTitle: "Today's Headlines",

  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }
  state = {
    articles: [],
    loading: true,
    page: 1,
    totalResults:0,
    firstLoad:true,
    api:this.props.api,
    totalResults: this.props.pageSize
  }
  updateNews = async () => {
    this.props.setProgress(10)
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.api}&pageSize=${this.props.pageSize}&page=${this.state.page}`
    this.setState({ loading: true })
    this.props.setProgress(50)
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      firstLoad:false,
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews()
  }

  render() {
    return (
      <>
        <h2 className='text-center'>{this.props.pageTitle}</h2>
        {this.state.firstLoad && <Loading />}

      <InfiniteScroll
        dataLength={this.state.articles.length }
        next={this.updateNews}
        hasMore={this.state.articles.length+this.props.pageSize !== this.state.totalResults}
        loader={<Loading/>}
        >
        <div className="container">
        <div className="row" >
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                {<NewsItem title={element.title ? element.title.slice(0, 75) : ''} description={element.description ? element.description.slice(0, 130) : ''} imageUrl={element.urlToImage} readMore={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />}
              </div>
            )
          })}
          </div>
          </div>
          </InfiniteScroll>
        </>
    )
  }
}

export default News
