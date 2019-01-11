import React from "react";

class Search extends React.Component{

    constructor(props) {
    super(props);
    this.state = {value: '',
                    list: [],
                    search: ''}
    }

    handleChange = (event) => {
    this.setState({value: event.target.value});
    //console.log({value: event.target.value});
    }

    handleSearchChange = (event) => {
        this.setState({search: event.target.value});
    }

    handleClick = () => {
    console.log("Button clicked!");
    console.log(this.state.value)
    const newList = this.state.list;
    newList.push(this.state.value);
    this.setState({list: newList});
    console.log(this.state.list) 
    }

    handleDelete = (list) => {
        const tempList = this.state.list;
        tempList.splice(tempList.indexOf(list),1);
        this.setState({list: tempList});
    }

    runningSearchCompare = (eventz) => {
        console.log(this.state.search);
        return eventz.includes(this.state.search)
       
    }

    render(){
        const filteredList = this.state.list.filter(this.runningSearchCompare)
        const listItems = filteredList.map((item) => 
            <li>{ item } <button value= {this.state.value} onClick={() => this.handleDelete(item)}>Delete</button></li>);
        let reception;

        if (this.state.list.length === 0) {reception = <p>hey what's up hello</p>}
        else{reception = <p><br/>Search: <br/><br/><input type="text" value={this.state.search} onChange={this.handleSearchChange}/> </p>}

        
        return (
        <div>
            Task: <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button value = {this.state.value} onClick={this.handleClick}>Add</button>
            <ul>{listItems}</ul>
            {reception}
        </div>
        )
    }
}


export default Search;