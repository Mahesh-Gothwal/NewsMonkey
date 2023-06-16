import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Lawrence Richard",
      "title": "Mass shooting at Maryland home leaves 3 dead, several injured: police - Fox News",
      "description": "Annapolis police Chief Ed Jackson said a suspect is in custody after a shooting outside a home in Annapolis, Maryland, left at least three people dead and three others injured.",
      "url": "https://www.foxnews.com/us/mass-shooting-maryland-home-leaves-3-dead-several-injured-police",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/06/AP23163077001828.jpg",
      "publishedAt": "2023-06-12T03:54:00Z",
      "content": "A mass shooting at a private residence in an otherwise quiet neighborhood in Annapolis, Maryland, on Sunday left at least three people dead and three others injured.\r\nAnnapolis police Chief Ed Jackso… [+1772 chars]"
    }, 
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Angus Watson,Paul Devitt,Larry Register,Hilary Whiteman,Susannah Cullinane",
      "title": "‘Horrific bus tragedy’ leaves multiple dead after wedding in Australian wine region, police say - CNN",
      "description": "Multiple people are feared dead in Australia after their bus crashed Sunday as they returned from a wedding in a wine region in the east of the country.",
      "url": "https://www.cnn.com/2023/06/11/asia/australia-new-south-wales-bus-crash/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230611181446-01-australia-nsw-bus-crash-061223.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-06-12T03:36:00Z",
      "content": "Multiple people are feared dead in Australia after their bus crashed Sunday as they returned from a wedding in a wine region in the east of the country.\r\nThe bus rolled over at a roundabout near the … [+2129 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Ryan Young",
      "title": "Adam Hadwin tackled by security while trying to celebrate Nick Taylor's historic win at RBC Canadian Open - Yahoo Sports",
      "description": "A security guard leveled Adam Hadwin on the green on Sunday night after Nick Taylor’s win in Toronto.",
      "url": "https://sports.yahoo.com/adam-hadwin-tackled-by-security-while-trying-to-celebrate-nick-taylors-historic-win-at-rbc-canadian-open-024718421.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/pN4j37RBQfbHlbB5ZJGmnw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MTY-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/75a01c20-08c9-11ee-ab6d-85e186e91f67",
      "publishedAt": "2023-06-12T02:47:00Z",
      "content": "Adam Hadwin was trying to celebrate with his friend and fellow Canadian, and after the drought the country has been through at the Canadian Open, its easy to understand why. But at least one security… [+1977 chars]"
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Boris Johnson: MPs to conclude Partygate inquiry - BBC",
      "description": "Mr Johnson quit as an MP dramatically on Friday, branding the Privileges Committee a \"kangaroo court\".",
      "url": "https://www.bbc.com/news/uk-politics-65874224",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7574/production/_129986003_ce525c6df7bbf6a7c5517836400cb3d7bd4779be.jpg",
      "publishedAt": "2023-06-12T01:56:53Z",
      "content": "MPs investigating whether Boris Johnson misled Parliament about lockdown parties in Downing Street will meet on Monday to conclude their inquiry.\r\nMr Johnson resigned as an MP dramatically on Friday … [+3151 chars]"
    }
  ]

  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=82dc81aa96d9428faac960891f39f887";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}

export default News