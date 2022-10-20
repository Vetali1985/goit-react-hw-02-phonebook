import { Component } from "react";



class App extends Component  {
  state = {
    contacts: [],
    name: ''
  };
  handleInputChange = e => {
    this.setState({
    [e.currentTarget.name]:[e.currentTarget.value]
  })
}
  render() {
    
    return (
<input
  type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleInputChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
      
    );
    
  }
};
export default App;