import React from 'react';
import './style.css';
import Navbar from './Navbar';
import HelpHero from './HelpHero';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <HelpHero />
      <div className="container">
        <div className="category-list">
          <img
            src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
            className="category-list-svg-icon"
          />
          <div>
            <h2>Using Abstract</h2>
            <p>
              Abstract lets you manage, version, and document your designs in
              one place.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="category-list">
          <img
            src="https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png"
            className="category-list-svg-icon"
          />
          <div>
            <h2>Manage your account</h2>
            <p>
              Configure your account settings, such as your email, profile
              details, and password.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="category-list">
          <img
            src="https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png"
            className="category-list-svg-icon"
          />
          <div>
            <h2>Manage organizations, teams, and projects</h2>
            <p>
              Use Abstract organizations, teams, and projects to organize your
              people and your work.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="category-list">
          <img
            src="https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png"
            className="category-list-svg-icon"
          />
          <div>
            <h2>Manage billing</h2>
            <p>Change subscriptions and payment details.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="category-list">
          <img
            src="https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png"
            className="category-list-svg-icon"
          />
          <div>
            <h2>Authenticate to Abstract</h2>
            <p>
              Set up and configure SSO, SCIM, and Just-in-Time provisioning.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="category-list">
          <img
            src="https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png"
            className="category-list-svg-icon"
          />
          <div>
            <h2>Abstract support</h2>
            <p>Get in touch with a human.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
