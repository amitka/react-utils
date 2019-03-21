import React from 'react';

export default class ClickOutside extends React.Component{
  constructor(props){
    super(props)
    
    this.wrapperRef = React.createRef();
  }
  
  componentDidMount(){
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = () => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      //alert('You clicked outside of me!');
      this.props.onClickOutside && this.props.onClickOutside()
    }
  }

  render(){
      return(
         <div ref= { this.setWrapperRef }>{ this.props.children }</div>
      )
   }
}
