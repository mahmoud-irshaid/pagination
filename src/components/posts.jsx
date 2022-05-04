import React, { Component } from 'react'
import Post from './post'

class posts extends Component {
    state = {  }
    render() { 
        return ( <div>
            {this.props.currentPosts.map(post =>(
               <Post
                post ={post}
                key={post.id}
                />
            ))}
        </div> );
    }
}
 
export default posts;