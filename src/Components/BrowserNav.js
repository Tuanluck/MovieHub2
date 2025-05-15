import React, { useState } from 'react';
import './Styles/BrowserNav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropDownProfile from './DropDownProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa500px } from '@fortawesome/free-brands-svg-icons';

export default function BrowserNav({
  selectedProfile,
  showProfilePick,
  profilesNavBar,
  setSelectedProfile,
  showMyList,
  hideMyList,
  setSelectedProfileName,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/videoSuggestions/search/${query}`);
      if (!response.ok) throw new Error("Lỗi khi gọi API");

      const data = await response.json();
      setSearchResults(data);
      setShowResults(true);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm phim:", error);
      setSearchResults([]);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <Navbar className="nav-bar" variant="dark">
        <Container className="navbar-masterhead">
          <Navbar.Brand 
            onClick={() => window.location.href = '/'}
            style={{ cursor: 'pointer' }}
          >
            <div className="masterhead-logo-container">
              <FontAwesomeIcon 
                icon={fa500px} 
                className="masterhead-logo-icon"
              />
              <span className="masterhead-logo-text">
                MovieHub
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={hideMyList} className="tab-navBar">Home</Nav.Link>
              <Nav.Link onClick={hideMyList} className="tab-navBar">TV Show</Nav.Link>
              <Nav.Link onClick={hideMyList} className="tab-navBar">Movies</Nav.Link>
              <Nav.Link onClick={hideMyList} className="tab-navBar">New & Popular</Nav.Link>
              <Nav.Link onClick={showMyList} className="tab-navBar">My List</Nav.Link>
            </Nav>

            <Nav className="right-nav">
              <div className="search-container">
                <button className="search-btn"><i className="bi bi-search"></i></button>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Tìm kiếm phim..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />

                {/* Kết quả tìm kiếm */}
                {showResults && searchResults.length > 0 && (
                  <div className="search-dropdown">
                    {searchResults.map((movie) => (
                      <div key={movie.videoID} className="search-result-item">
                        <img src={movie.thumbnail} className="result-thumbnail" />
                        <div className="result-info">
                          <div className="result-title">{movie.videoTitle}</div>
                          <div className="result-subtitle">{movie.releaseYear}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Nav.Link className="right-btn-nav tab-navBar"><i className="bi bi-bell"></i></Nav.Link>
              <div className={`navBar-profileIcon ${selectedProfile}`}></div>

              <NavDropdown
                className="dropProfile custom-dropdown"
                id="collapsible-nav-dropdown"
                show={showDropdown}
                onToggle={handleDropdownToggle}
              >
                {profilesNavBar.map((profile) => (
                  <DropDownProfile
                    key={profile.profileName}
                    profileName={profile.profileName}
                    profilePicture={profile.profilePicture}
                    setSelectedProfile={setSelectedProfile}
                    setSelectedProfileName={setSelectedProfileName}
                    closeDropdown={closeDropdown}
                  />
                ))}
                <NavDropdown.Item onClick={showProfilePick}>
                  <i className="bi bi-pencil"></i> Manage Profiles
                </NavDropdown.Item>
                <hr className="divider-dropmenu2" />
                <a className="logout-dropItem" href="/signup/logout">Sign out of Netflix</a>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
  