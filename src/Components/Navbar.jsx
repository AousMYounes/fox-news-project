

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="/src/assets/images/fox-news-icon-66.png" alt="logo" width={50} height={50}></img>Fox News <span className="badge bg-warning text-dark">Now</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#nav">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#news">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact Us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
