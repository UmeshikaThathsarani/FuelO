import React from 'react';
import {
//   CalculatorFilled,
  HomeFilled
//   MedicineBoxFilled,
//   QuestionCircleFilled
} from '@ant-design/icons';

export const ICONS = {
  home: <HomeFilled />
//   healthcare: <MedicineBoxFilled />,
//   calc: <CalculatorFilled />,
//   question: <QuestionCircleFilled />,
};

export const PAGES = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    icon: ICONS.home,
//   },
//   {
//     id: 2,
//     name: 'Prediction',
//     path: '/prediction',
//     icon: ICONS.question,
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
