import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: "",
            productName: '',
            productPrice: 0
        }
    }
    
    //single method handling all input changes and their corresponding state values
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    cancelInputValues =()=> {
        this.setState({
            imageUrl: "",
            productName: '',
            productPrice: 0
        })
    }
    
    createProduct=()=> {
        let product = {
            image: this.state.imageUrl,
            name: this.state.productName,
            price: this.state.productPrice
        }
    }

    render () {
        const { imageUrl, productName, productPrice } = this.state;
        return (
            <div className='form-component'>
                    Form
                    <div className='create-product'>
                    <div className='form-tools'>Image Url:<input name='imageUrl' value={imageUrl} onChange={this.handleChange} placeholder='Enter ImageUrl' /></div>
                    <div className='form-tools'>Product Name:<input name='productName' value={productName} onChange={this.handleChange} placeholder='Enter Product Name'/></div>
                    <div className='form-tools'>Product Price:<input name='productPrice' value={productPrice} onChange={this.handleChange} placeholder='Enter Price'/></div>
                    <div className='buttons'>
                        <div className='form-tools'><button>Cancel</button></div>
                        <div className='form-tools'><button>Add to Inventory</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;