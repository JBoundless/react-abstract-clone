import React from 'react';

export default function HelpHero() {
  return (
    <div className="help-hero">
      <h1>How can we help?</h1>
      <form className="search-field">
        <input type="text" placeholder="Search" className="help-input" />
        <button className="submit-btn">Search</button>
      </form>
    </div>
  );
}
