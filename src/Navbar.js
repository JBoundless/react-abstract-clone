import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Abstract | Help Center
      </a>
      <ul>
        <li>
          <button className="request-btn">
            <a href="#">Submit a request</a>
          </button>
        </li>
        <li>
          <button className="sign-in-btn">
            <a href="#">Sign in</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}
