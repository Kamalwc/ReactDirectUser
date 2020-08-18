import React, { Component } from 'react';
import axios from 'axios';
import TableBody from "./TableBody";
import Search from "./Search"

import './css/TableStyles.css'

export default class Table extends React.Component {

    state = {
        users: [{}],
        filter: []
    }

   componentDidMount(){
    axios.get("https://randomuser.me/api/?results=5&nat=us").then( results => {
        this.setState({ users: results.data.results })
    })
    
   }

   handleSearch = async (event) => {
    const filter = event.target.value;
    console.log(filter);
    const filteredList = this.state.users.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    await this.setState({ filter: filteredList });
   }

    render() {
        return (
            <div>
                <Search
                    handleSearch = {this.handleSearch}
                />
                <div >
                    <p className="headerNames" style = {{backgroundColor: '#fffbd5', paddingTop: "30px", paddingBottom:"30px" , fontSize: "1.3em"}}>Image</p>
                    <p className="headerNames" style = {{backgroundColor: '#fffbd5', paddingTop: "30px", paddingBottom:"30px", fontSize: "1.3em"}}>Name</p>
                    <p className="headerNames" style = {{backgroundColor: '#fffbd5', paddingTop: "30px", paddingBottom:"30px", fontSize: "1.3em"}}>Phone</p>
                    <p className="headerNames" style = {{backgroundColor: '#fffbd5', paddingTop: "30px", paddingBottom:"30px", fontSize: "1.3em"}}>Email</p>
                    <p className="headerNames"style = {{backgroundColor: '#fffbd5', paddingTop: "30px", paddingBottom:"30px", fontSize: "1.3em"}}>DOB</p>
                </div>
                {console.log(this.state.filter)}
                <TableBody 
                    users = { this.state.filter.length == 0 ? this.state.users : this.state.filter}
                    
                />
              
            </div>
        )
    }
}
