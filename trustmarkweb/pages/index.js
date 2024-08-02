// pages/index.js
export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          Next.js + Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col">
            <h1>Welcome to Next.js with Bootstrap</h1>
            <p>This is a simple example of using Next.js with Bootstrap.</p>
            <a className="btn btn-primary" href="#">
              Click Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
