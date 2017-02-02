import React from 'react';
import Media from './Media.js';
// import Goal from './goal.js';
import Title from './title.js';
import StripeView from './StripeView.js';
import axios from 'axios';
import Content from './content.js';
import './project.scss';
import { connect } from 'react-redux';
//import {bindActionCreators } from 'redux'
//here import your get all action here getProject
 class ViewContainer extends React.Component{

  // getInitialState() {
  //   return {
  //     isLoading: true,
  //     scores: []
  //   }
  // }
  componentWillMount() {
    console.log("a good time to fetch post data");
  }

  // componentDidMount() {
  //   console.log(this.props.location.state.project);
  // }

  render(){
    console.log(this.props.location.state.project);
    return(
      <div className='viewContainer'>

        <div className='title'>
          <h1>{this.props.location.state.project.title}--- {this.props.location.state.project.projectid}</h1>

        </div>

        <div className='top'>
          <div className='media'>
            <Media project={this.props.location.state.project} />
          </div>
          <div className = 'goal'>
            <StripeView project={this.props.location.state.project} />

          </div>
        </div>

        <div className='content'>
            <Content />
        </div>

      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return  bindActionCreators({ getProject }, dispatch);
// }

export default ViewContainer;
//export default connect(null, mapDispatchToProps)(PostsIndex);
// could be just export default connect(null, {getProject})(PostsIndex);
// it give us access to the method we pass
