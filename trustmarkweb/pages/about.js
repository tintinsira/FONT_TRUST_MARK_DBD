// pages/about.js
export default function About() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Next.js + Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="col">
            <h1>About Page</h1>
            <p>This is the About page.</p>
            <a className="btn btn-primary" href="/">Go Back Home</a>
          </div>
        </div>
      </div>
    </div>
  );
}
