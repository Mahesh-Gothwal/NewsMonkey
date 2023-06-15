import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230613231941-04-knights-stanley-cup-061323.jpg?c=16x9&q=w_800,c_fill" newsUrl = "todo"/>
          </div>
          <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc"/>
          </div>
          <div className="col-md-4">
        <NewsItem title="myTitle" description="mydesc"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News