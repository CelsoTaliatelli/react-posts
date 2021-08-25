export const PostCard = (/*props*/ /*{post}*/{cover,body,id,title}) => {
    //const post = props.post;
    //const {post} = props;
    return (
      <div className="post">
        <img src={cover} alt={title}></img>
        <div className="post-content">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    )
}

/*o retono da arrow function quando for um compoennt de template  pode ser export const Component = (props) => (<div></div>) */