import axios from 'axios'
import React from 'react'

export default class Tool extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            keywords: null
        }
    }
    componentDidMount() {
        this.fetchKeyword(this.props.match);
      }
    
      fetchKeyword = id => {
        axios
          .get(`https://api.dataforseo.com/v3/keywords_data/endpoints`)
          .then(res => this.setState({ keyword: res.data }))
          .catch(err => console.log(err.response));
      };
}