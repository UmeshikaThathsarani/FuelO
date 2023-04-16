import React from 'react';
import {
//   CalculatorFilled,
  HomeFilled,
  FundOutlined
//   QuestionCircleFilled
} from '@ant-design/icons';

export const ICONS = {
  home: <HomeFilled />,
  prediction: <FundOutlined />
//   calc: <CalculatorFilled />,
//   question: <QuestionCircleFilled />,
};

export const PAGES = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    icon: ICONS.home,
  },
  {
    id: 2,
    name: 'Prediction',
    path: '/prediction',
    icon: ICONS.prediction,
//   },
//   {
//     id: 3,
//     name: 'BMI Calculator',
//     path: '/calculator',
//     icon: ICONS.calc,
//   },
//   {
//     id: 4,
//     name: 'Healthcare Center',
//     path: '/healthcare',
//     icon: ICONS.healthcare,
  }
];
