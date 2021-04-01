import React ,{Component} from 'react';
import  GetProductService from './getproductData';
class FilteredProductTable extends React.Component{
    render(){
        return(<div>
            <GetProductService/>
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

// class ProductTable extends React.Component{
//     render(){
//         return(
            
//         )
//     }
// }

export default FilteredProductTable;