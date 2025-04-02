import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-icon"
            >
              <path
                d="M20 8C15.5817 8 12 11.5817 12 16C12 20.4183 15.5817 24 20 24C24.4183 24 28 20.4183 28 16"
                stroke="#06B6D4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path d="M28 8L23 14H28V8Z" fill="#06B6D4" />
            </svg>
            <span className="logo-text">Smartpay</span>
          </Link>

          <nav className="nav">
            <Link to="#" className="nav-link">About</Link>
            <Link to="/api" className="nav-link">Developer</Link>
            <button className="btn btn-primary">
              Get In Touch <span className="icon">→</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header