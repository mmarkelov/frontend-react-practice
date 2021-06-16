import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      name: ""
    };
  }

  render() {
    
    return (
      <React.Fragment>
        <Header />     
          
        <Footer />
      </React.Fragment>
    );
  }
}

export default ToDoList;
