import React from 'react';
import Navbar from './misc/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        {React.Children.map(children, child => React.cloneElement(child))}
      </main>
    </div>
  );
};

export default Layout;