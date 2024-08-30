import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country:'in' , 
    pageSize:8,
    category:'general'
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
  }
   capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
    
    constructor(props){
        super(props);
        console.log("consturctor from mews");
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
        document.title=`${this.props.catagory}-NewsMonkey`;
        }

        async updateNews(){
          this.props.setProgress(10);
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e81725d540145b0bd6e08af44b417bd&page=$&pageSize=${this.state.page}this.props.pageSize}`;
            let data= await fetch(url);
            let parsedData= await data.json()
            console.log(parsedData);
            this.setState({articles: parsedData.articles,
              totalResults:parsedData.totalResults,
             })
             this.props.setProgress(100);

        }


        async componentDidMount(){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e81725d540145b0bd6e08af44b417bd&pageSize=${this.props.pageSize}`;
            let data= await fetch(url);
            let parsedData= await data.json()
            console.log(parsedData);
            this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults })
        }

         handlePreviousClick = async() =>{
            this.setState({page:this.state.page - 1});
            this.updateNews();
        }

         handleNextClick = async () =>{
          console.log("next");
        this.setState({page:this.state.page + 1});
        this.updateNews();
        }

         fetchMoreData = async () => {         
          this.setState({page: this.state.page+1})
          const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e81725d540145b0bd6e08af44b417bd&page=$&pageSize=${this.state.page}this.props.pageSize}`;
            let data= await fetch(url);
            let parsedData= await data.json()
            console.log(parsedData);
            this.setState({articles: this.state.articles.concat(parsedData.articles),
              totalResults:parsedData.totalResults,
             })
        };


  render() {
    console.log("render")
    return ( 
      <>
        <h1 className="text-center" style={{color:"blue"}}>Top Headlines </h1>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="container">

          
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urltoImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>


        
      </>
    )
  }
}

export default News
