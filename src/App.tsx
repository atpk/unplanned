import { useState } from "react";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Footer from "./components/Footer";
import RightNavItem from "./components/Nav/RightNavItem";

const App = () => {
  const logo = "/favicon.ico";
  const [activeTab, setActiveTab] = useState("Home");
  const renderTabContent = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Gallery":
        return <Gallery />;
      case "About":
        return <About />;
      // Add more cases for other options
      default:
        return null; // Render nothing if no tab is selected
    }
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          {/* Left side content (logo and title) */}
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
            Unplanned Events Planner
          </a>

          {/* Right side content (options) */}
          <ul className="navbar-nav d-flex flex-row nav-underline">
            <RightNavItem
              tabName="Home"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <RightNavItem
              tabName="Gallery"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <RightNavItem
              tabName="About"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {/* Add more options here */}
          </ul>
        </div>
      </nav>

      {/* Render the selected tab's content */}
      <div className="container mt-4">{renderTabContent()}</div>

      <Footer />
    </>
  );
};

export default App;
