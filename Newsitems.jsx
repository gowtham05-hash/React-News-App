
const Newsitems = ({title,description,src,url}) => {
  return (
<div className="card mb-3 bg-dark text-light d-inline-block mx-3 my-3" style={{ Width: "400px", Height:"500px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={src?src:"https://seeklogo.com/images/Z/zeitschrift-news-logo-57573920D2-seeklogo.com.png"} className="news-img img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url}  className="btn btn-primary">Read More</a>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Newsitems
