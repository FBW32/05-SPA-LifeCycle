import React from "react";
import About from "./About";
import Header from "./Header";
import SearchResults from "./SearchResults";

export default class App extends React.Component {
  state={searchTerm:"",lastSearchItem:"",currentPage:"search"}

  navigate=(e)=>{
    if(e.target.innerHTML==="Search"){
        this.setState({currentPage:"search"})
    }else if(e.target.innerHTML==="About"){
        this.setState({currentPage:"about"})
    }
  }

  render() {

    return (
      <div style={{backgroundColor:"lightblue"}}>
         <Header onClick={this.props.navigationHandler} navigationHandler={this.navigate}/>

          {this.state.currentPage==="search"?
          <><div>
        <input type="text" placeholder="Enter Searchterm"
        onChange={(e)=>this.setState({searchTerm:e.target.value})}/>
        <button 
        onClick={()=>{
          this.setState({lastSearchItem:this.state.searchTerm})
          }}>Search</button>
          </div>
          {this.state.lastSearchItem &&  <SearchResults searchFor={this.state.lastSearchItem}/>}
         </>
          
          :this.state.currentPage==="about"?<About/>
          :null}
      </div>
    );
  }
}
