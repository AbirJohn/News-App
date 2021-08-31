import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class news extends Component {

    static defaultProps = {
       country : 'in',
       pagesize : 8,
       category:'Technology'
    }


     static propTypes = {
        country: PropTypes.string,
        pagesize :PropTypes.number,
        category:PropTypes.string
    }

    constructor(){
        super();
        this.state ={
            articles :[],
            loading :true,
            page:1
        }

    }


    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc8815bfd43146179bf8a895edf8536b&page=$
      {this.state.page}&pagesize=${this.props.pagesize}`;
        let data =await fetch(url);
        let ParsedData =await data.json()
        this.setState({
            articles:ParsedData.articles,
            totalResults:ParsedData.totalResults,
            loading:false
        })
    } 

    async componentDidMount(){
        let  url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc8815bfd43146179bf8a895edf8536b&page=1&pagesize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data =await fetch(url);
        let ParsedData =await data.json()
        this.setState({
            articles: ParsedData.articles,
            totalResults:ParsedData.totalResults,
            loading:false
        })
    }

    hendalenprevClick = async ()=>{

        let  url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc8815bfd43146179bf8a895edf8536b&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data =await fetch(url);
        let ParsedData =await data.json()
        this.setState({
            page:this.state.page-1,
            articles:ParsedData.articles,
            loading:false
        })
        this.setState({page:this.state.page-1});
        

    }

    hendalenextClick = async ()=>{

        if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
    
        let  url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data =await fetch(url);
        let ParsedData =await data.json()

        this.setState({
            articles:ParsedData.articles,
            page:this.state.page+1,
            loading:false
        })
    }


    }

    render() {
        return (
            <div className = "container">

                <h1 className="text-center" style={{margin:'40px  0'}}>All India News-Top Headline</h1>
                {this.state.loading && <Spinner/>}
                <div className = "row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return  <div className ="col-md-4" key ={element.url}>
                    <Newsitem  tilte= {element.title?element.title:""} descriptiono ={element.description?element.description:""} 
                    imageUrl ={element.urlToImage}  newsURL= {element.url?element.url:""} author={element.author} date={element.publishedAt} 
                     source ={element.source.name} />
                    </div> 
                })}      
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick ={this.hendalenprevClick}  >&larr;previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)}  type="button" className="btn btn-dark" onClick ={this.hendalenextClick}  >next&rarr;</button>
                </div>
            </div>
        )
    }
}

export default news
