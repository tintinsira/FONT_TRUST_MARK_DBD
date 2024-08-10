import Link from "next/link";
export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" href="#">
          Next.js + Bootstrap intar
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col">
            <h1>Welcome to Next.js with Bootstrap</h1>
            <p>This is a simple example of using Next.js with Bootstrap.</p>
            <Link className="btn btn-primary" href="#">
              Click Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
