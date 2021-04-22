import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (WrappedComponent) => {
  return (props) => {
    return (
      <RestoServiceContext.Consumer>
        {
          (RestoService) => {
            return <WrappedComponent {...props} RestoService={RestoService}></WrappedComponent>
          }
        }
      </RestoServiceContext.Consumer>
    )
  }
};

export default WithRestoService;