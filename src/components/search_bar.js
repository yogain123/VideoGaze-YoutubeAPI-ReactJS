import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {term:this.props.searchText};
    this.onInputChange = this.onInputChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.handleOnchange  =this.handleOnchange.bind(this);

  }

  render(){
    return(
      <div className="form-group" className="searchText">
      <input value={this.state.term} type="text" onChange={this.handleOnchange} onKeyPress={this._handleKeyPress} className="form-control" />
      {this.props.searchText}
      </div>
    );
  }

  handleOnchange(event){
    this.setState({term:event.target.value});
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onInputChange(e.target.value)
      console.log('do validate');
    }
  }

  onInputChange(term)
  {
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
