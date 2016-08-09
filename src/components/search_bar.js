import React,{Component} from 'react';


class SearchBar extends Component{


  constructor(props){
      super(props);
      this.state = {term : ''};

  }

  onInputChange(event){
      this.setState({term : event.target.value});
  }

  render(){
    console.log("In search component render method");
    return (
      <div>
       <input type="text" placeholder="First name" ref="somreref" value={this.inputContent} onChange={this.onInputChange.bind(this)} />
       <div>{this.state.term}</div>

      </div>
    )
  }


}


export default SearchBar;
