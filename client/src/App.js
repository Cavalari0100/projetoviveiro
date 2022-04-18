import React ,{Component} from 'react'; 
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    axios
    .get('/postagens')
    .then(resultado =>{
      console.log(resultado)
    })
    axios
    .get('/comentarios/1')
    .then(resultado =>{
      console.log(resultado)
    })
  }
  render(){
    return(
      <h1></h1>
    )
  }
}

export default App;
