import React, { Component } from 'react';
class search extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form >
                    <input type="text" className="search" onChange={this.props.changeSearch} placeholder="Search" />
                </form>
            </div>
         );
    }
}
 
export default search;