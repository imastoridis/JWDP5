import React , {Component} from 'react'
import items from './components/ProductData'
const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
       varnish : [],
       _id : [],
       name : [],
       price : [],
       description : [],
       imageUrl : []
    };


//We get all the date and format them
    componentDidMount(){
        let rooms = this.formatData(items)
        
        //console.log(rooms)


    }

    formatData(items) {
        let tempItems = items.map(item => {
            let _id = item._id
            let images = item.imageUrl

           // not sure i need this 
           let room ={...item, images, _id}
           return room
        });
        return tempItems
    }
    render () {
        return <ProductContext.Provider value={{...this.state}}>
            {this.props.children}
        
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer, ProductContext};