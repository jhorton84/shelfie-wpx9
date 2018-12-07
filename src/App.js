import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state= {
      inventoryList: [
        {imageUrl: 'https://cdn1.medicalnewstoday.com/content/images/articles/267290-apples.jpg', name: 'Apples', price: 10 }, 
        {imageUrl: 'https://cdn1.medicalnewstoday.com/content/images/articles/267290-apples.jpg', name: 'Apples', price: 10 }
      ]
    }
  }
  render() {
    const { inventoryList } = this.state;
    return (
      <div className="App">
        <Header />
        <div className='main-container'>
          <Dashboard inventoryProp={inventoryList} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
