import React, { Component } from 'react'
class post extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>
         );
    }
}
 
export default post;