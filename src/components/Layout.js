// Layout.js

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row mb-auto h-full">
        <div>
          <Sidebar />
        </div>
        <div className="h-full w-screen flex-grow">{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
