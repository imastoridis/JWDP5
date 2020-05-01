import React, {useState} from 'react'

class ProductTile extends React.Component {
    state = {
        isloading: true,
        items : [],
        error:null
    };

    async componentDidMount() {
        const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
        const response = await fetch(apiURL)
        const data = await response.json();
        console.log(data)
    }

    render() {
        const { isLoading, items, error } = this.state;
        return (
          <React.Fragment>
            <h1>Random User</h1>
            
            {error ? <p>{error.message}</p> : null}
           
            {!isLoading ? (
              users.map(user => {
                const { username, name, email } = user;
                return (
                  <div key={index}>
                     <p>Produit : {item.name}</p>
                    <p>Prix : {item.numberOfPages}</p>
                    <p>Description : {item.country}</p>  
                    <hr />
                  </div>
                );
              })
          
            ) : (
              <h3>Loading...</h3>
            )}
          </React.Fragment>
        );
      }
    }
export default ProductTile
    /*
    return (
        <div className="App">
            <h1>Meubles en chêne</h1>
    
       
            <div>
                <button className="fetch-button" onClick={fetchBooks}>Fetch Data</button>
            <br />
            </div>

        
            <div >
            {items &&
                items.map((item, index) => {
    
                return (
                    <div className="product" key={index}>
                        <div className="product__specs">
                            <p>Vernis : {item._id}</p>
                            <p>Produit : {item.name}</p>
                            <p>Prix : {item.numberOfPages}</p>
                            <p>Description : {item.country}</p>  
                        </div>
                    </div>
                    );
                })
            }
            </div>
        </div>
    );
}

class ProductTile extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        const [items, setItems] = useState(null);
        const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
        
        fetch(apiURL)
            .then(res=>res.json())
            .then(data => setItems(data))
    }

    render() {
        
        {this.data.map((item, index) => {
                return (
                   
                    <div className="product">   
                    <div className="product__specs">
                        <h3>Meubles en chêne</h3>
                            <p>Vernis : {item.varnish}</p>
                            <p>Produit : {item.name}</p>
                            <p>Prix : {item.price}</p>
                            <p>Description : {item.description}</p>  
                            <button className="fetch-button" onClick={fetchItems}>Selectionnez</button>  
                    </div>  
                    <div className="product__specs">     
                        <img className="product-list_img" src = {img} alt={"oak"} />
                    </div>
                </div>  
            </div>
                    
                )
            })
        }
        
    }
}   */     

