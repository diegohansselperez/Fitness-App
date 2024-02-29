import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children }: Props) => {
  return <AnchorLink className="rounded-md ">{children}</AnchorLink>;
};

export default ActionButton;
