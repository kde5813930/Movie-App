import React from "react";

class Detail extends React.Component {
  componentDidMount(){
    const {location,history} = this.props;
    //해당 props의 location,history값을 가져온다.
    if(location.state === undefined) {
      history.push("/");
    }

  }
  render(){
      const {location} = this.props;
      if(location.state){
        return <span>{location.state.title}</span>;
      } else {
        return null;
      }
    }
  }


export default Detail;