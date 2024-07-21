import React, { useState } from 'react';
import miniRobo from '../assets/miniRobo.jpg';
import PopupComponent from './PopupComponent';
import styles from './LogoComponents.module.css';

export default function LogoComponent() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className={styles.mainContainer}>
      <img 
        src={miniRobo} 
        alt="Mini Robo" 
        className={styles.logoImage} 
        onClick={handleImageClick}
      />
      <PopupComponent 
        isVisible={isPopupVisible} 
        onClose={handleClosePopup}
      >
        <h2>Popup Content</h2>
        <p>This is the pop-up content!</p>
      </PopupComponent>
    </div>
  );
}
