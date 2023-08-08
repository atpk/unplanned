import { useState } from "react";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Footer from "./components/Footer";
import RightNavItem from "./components/Nav/RightNavItem";

const App = () => {
  const logo = "/favicon.ico";
  const [activeTab, setActiveTab] = useState("home");
  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "gallery":
        return <Gallery />;
      case "about":
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
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                onClick={() => setActiveTab("home")}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                Home
              </a>
            </li>
            <RightNavItem
              tabName={"newOne"}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <RightNavItem
              tabName="gallery"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {/* <li className="nav-item ms-3">
              <a
                className={`nav-link ${
                  activeTab === "gallery" ? "active" : ""
                }`}
                onClick={() => setActiveTab("gallery")}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                Gallery
              </a>
            </li> */}
            <li className="nav-item ms-3">
              <a
                className={`nav-link ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                About
              </a>
            </li>
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
