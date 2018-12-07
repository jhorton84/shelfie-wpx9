import React, { Component } from 'react'
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props){
        super();
        this.state = {
            inventoryList: props.inventoryProp
        }
    }
    
    render () {
        console.log('passed props', this.state.inventoryList);
        const { inventoryList } = this.state;
        let mappedProducts = inventoryList.map((product,i) => {
            console.log('product', product);
            return <Product
                        key={i}
                        name={product.name}
                        url={product.imageUrl}
                        price={product.price}
                    />
        })
        return (
            <div className='dashboard-component'>
                Dashboard
                
                {mappedProducts}
            </div>
        )
    }
}

export default Dashboard;