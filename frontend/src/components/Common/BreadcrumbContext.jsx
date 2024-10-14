import React, { createContext, useContext, useState } from 'react';

const BreadcrumbContext = createContext();

export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  const updateBreadcrumb = (newBreadcrumb) => {
    setBreadcrumb(newBreadcrumb);
  };

  const addBreadcrumb = (label, path) => {
    setBreadcrumb((prevBreadcrumb) => {
      const existingIndex = prevBreadcrumb.findIndex(item => item.label === label);

      if (existingIndex === -1) {
        return [...prevBreadcrumb, { label, path }];
      }

      return prevBreadcrumb.slice(0, existingIndex + 1);
    });
  };

  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, updateBreadcrumb, addBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => useContext(BreadcrumbContext);
