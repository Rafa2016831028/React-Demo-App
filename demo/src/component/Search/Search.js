import React ,{Component} from 'react';
import  data from './data';
class FilteredProductTable extends React.Component{
    render(){
        return(<div>
            <SearchBar></SearchBar>
        </div>)
    }
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) =>{
        this.setState({searchInput: event.target.value});
    }
    render(){
        return(<div>search:
            <input value={this.state.searchInput} onChange={this.handleChange}></input>
        </div>)
    }
}

export default FilteredProductTable;