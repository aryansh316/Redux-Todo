import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postData } from '../thunk/Posts';


class Posts extends React.Component {
  
  componentDidMount() {
    this.props.postData();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  commenting = ()=>{
    const postId = this.props.match.params.id;
    this.props.history.push(`/posts/${postId}/comments`);
    
  }
  addingposts = ()=>{
    this.props.history.push('/posts')
  }
  todoing = () =>{
    this.props.history.push('/todo')
  }

  render() {
    // console.log(this.props,"----------props")
    const postItems = this.props.posts.map(post => (
      <table className='posts' >
        
        <tbody>
        <tr>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td><button onClick={()=>{this.commenting(post.id)}}>Comments</button></td>
          <td><button onClick={()=>{this.addingposts()}}>AddPosts</button></td>
        </tr>
        </tbody>
      </table>
    ));
    return (
      <div>
        <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>body</th>
        </tr>
        </thead>
        </table>
        
        <button className='Todo' onClick={()=>{this.todoing()}}>ToDo</button>
        {postItems}
        
      </div>

    )
  }

}


Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = (state) => {
// console.log(state,"---------steate")
  return ({
    
    posts: state.post.items,
    newPost: state.post.item,
  })
};

export default connect(mapStateToProps , { postData })(Posts);