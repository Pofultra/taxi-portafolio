// StickyActionBar.js
import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ActionBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  padding: 0.5rem 0;
  color: white;
  z-index: 20;
`;

const IconButton = styled.a`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #ffcc00;
  }
`;

const StickyActionBar = () => (
  <ActionBar>
    <IconButton href="tel:+4155777700" aria-label="Llamar"><FaPhone /></IconButton>
    <IconButton href="mailto:service@martintogomez-taxi.com" aria-label="Enviar mensaje"><FaEnvelope /></IconButton>
    <IconButton href="https://facebook.com" aria-label="Facebook"><FaFacebook /></IconButton>
    <IconButton href="https://twitter.com" aria-label="Twitter"><FaTwitter /></IconButton>
    <IconButton href="https://instagram.com" aria-label="Instagram"><FaInstagram /></IconButton>
  </ActionBar>
);

export default StickyActionBar;
