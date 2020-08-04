import React, {Component, FC, FunctionComponent} from 'react';

const withMenu = (wrappedComponent: Component | FC) => {
  const WrappedComponent = wrappedComponent as any;
  const hocComponent: FC = ({...props}) => (
    <section>
      <WrappedComponent {...props} />
    </section>
  );
  return hocComponent;
};

export default withMenu;
