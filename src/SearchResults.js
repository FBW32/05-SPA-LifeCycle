import React from 'react'
import User from './User'

export default class SearchResults extends React.Component {

    state={users:[]}
    lastSearchTerm="";

    componentDidMount(){
      console.log("The SearchResult-Component has mounted");
      fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((result)=>this.setState({users:result}));
}
    shouldComponentUpdate(newprops,newstate){
      if(this.lastSearchTerm===newprops.searchFor){
      return false}

      else{
      this.lastSearchTerm=newprops.searchFor;
      return true};
  }
  componentWillUnmount(){
    console.log("The SearchResult-Component will unmount");
  }
// As i reload the page :clicked on “Search“ and then on “About“, i saw on the console:"The SearchResult-Component has mounted"
//As I clicked on Search button:nothing
//As I clicked on About button:"The SearchResult-Component will unmount"
//Reason:at the beginning Component has mounted even though i didnt clicked anaything, as i clicked on search button, the currentpage was already search, therefore it didnt changed anything, and as i clicked the about, it unmounted the search component. 

     
    render(){
      let updatedUsers= this.state.users.filter(user=>
        (user.name.toLowerCase().includes(this.lastSearchTerm.toLowerCase())||this.props.searchFor===""||user.email.toLowerCase().includes(this.lastSearchTerm.toLowerCase())))
        return (
      
          <table style={{backgroundColor:"lightgrey"}}> <thead>
                <tr>
                  <td>id</td>
                  <td>name</td>
                  <td>email</td>
                </tr>
            </thead>
            <tbody>
            { updatedUsers.map(user=>{
               return(
               <User key={user.id} id={user.id} name={user.name} email={user.email}/>
               )})}
            </tbody>
            </table>
        )}}
