import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentData } from '../thunk/comment';

class Comment extends React.Component{
    
    
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.commentData(id);
    }
    
    render(){
        console.log(this.props,'-------c')
        const commentItems = this.props.comments.map(comment=>(
            <table>
                <tr>
                    <th>
                        name
                    </th>
                </tr>
                <tr>
                    <td>
                        {comment.name}
                    </td>
                    <td>
                        {comment.body}
                    </td>
                </tr>
            </table>
        ))
        return(
            <div>
                {commentItems}
            </div>
        )
    }
}
Comment.prototypes = {
    comments:PropTypes.array.isRequired
}

const mapStateToProps = state =>{
    return ({
        comments: state.comments.comment
    })
}
export default connect(mapStateToProps, { commentData })(Comment);