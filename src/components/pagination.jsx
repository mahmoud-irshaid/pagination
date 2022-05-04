import React, { Component } from 'react'
class pagination extends Component {
    state = {}
    render() {
        const arr = [];
        let postsCount = this.props.postsCount
        let postsPerPage = this.props.postsPerPage

        for (let i = 1; i <= Math.ceil(postsCount / postsPerPage); i++)
            arr.push(i)

        return (
            <div>
                <nav>
                    <ul>
                        {arr.map(num => (
                            <li>
                                <a href='!#' key={num} onClick={()=>(this.props.paginate(num))}>{num}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>);

            
    }
}

export default pagination;