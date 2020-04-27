import React, {Component} from 'react'
import productData from './ProductData'
import myData from './myData.json'

const API = 'http://localhost:3000/api/furniture';
const DEFAULT_QUERY = 'redux';

class FeaturedRooms extends Component {
    constructor(props) {
      super(props);
      this.state = {
        myData: [],
      };
    }
    componentDidMount() {
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ myData: data.myData }));
    }
     render() {
    const { myData } = this.state;
    return (
      <ul>
        {myData.map(hit =>
          <li key={hit._id}>
            <h4>{hit.varnish}</h4>
          </li>
        )}
      </ul>
    );
  }
}
  
  export default FeaturedRooms;