import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

import './Topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = () => {
      setVisible(true);          // mostra a topbar
      clearTimeout(timeout);     // limpa qualquer timeout anterior
      timeout = setTimeout(() => {
        setVisible(false);       // esconde depois de 2 segundos de inatividade
      }, 2000);                  // 2000ms = 2s de delay
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <nav className={visible ? 'visible' : ''}>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Topbar;
