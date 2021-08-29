import React, { Component } from 'react'
import './App.css';
import * as FindCatAPI from './utils/FindCatAPI'
import ListCats from './components/ListCats'


class App extends Component{

  state ={
    dogFriendlyCats:[],
    childFriendlyCats:[],
    strangerFriendlyCats:[]
  }

  componentDidMount() {
    FindCatAPI.getAllDogsFriendlyCats()
      .then((dogFriendlyCats ) => {
        this.setState(()=>({
          dogFriendlyCats
        }))
      });

    FindCatAPI.getAllChildFriendlyCats()
    .then((childFriendlyCats)=>{
      this.setState(()=>({childFriendlyCats}))
    });

    FindCatAPI.getAllStrangerFriendlyCats()
    .then((strangerFriendlyCats)=>{
      this.setState(()=>({strangerFriendlyCats}))
    })
  }

  render(){
  return (
    <div>
      <ListCats dogFriendlyCats={this.state.dogFriendlyCats}
                childFriendlyCats={this.state.childFriendlyCats}
                strangerFriendlyCats={this.state.strangerFriendlyCats}
                />
    </div>
  );
}
}

export default App;
