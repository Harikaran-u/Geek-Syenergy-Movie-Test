import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <header className="header-container">
    <Popup
      trigger={
        <button type="button" className="menu-btn">
          <span className="menu-title">Company Info</span> <GiHamburgerMenu />
        </button>
      }
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button type="button" className="close" onClick={close}>
            &times;
          </button>
          <div className="modal-header"> Company Info </div>
          <div className="modal-content">
            <h1 className="info">
              <span className="info-title">Company: </span> Geeksynergy
              Technologies Pvt Ltd
            </h1>
            <h1 className="info">
              <span className="info-title">Address: </span> Sanjayanagar,
              Bengaluru-56
            </h1>
            <h1 className="info">
              <span className="info-title">Phone: </span> XXXXXXXXX09
            </h1>
            <h1 className="info">
              <span className="info-title">Email: </span> XXXXXX@gmail.com
            </h1>
          </div>
          <div className="actions">
            <button
              type="button"
              className="close-button"
              onClick={() => {
                close()
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
    </Popup>
  </header>
)

export default Header
