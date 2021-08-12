import React from 'react';
import { useTheme } from 'styled-components';
import {
  NoQuestionsContainer,
  NoQuestionsImage,
  NoQuestionsText,
  NoQuestionsTitle
} from './NoQuestions.style';

const NoQuestions: React.FC = () => {
  const theme = useTheme();

  return (
    <NoQuestionsContainer>
      <NoQuestionsImage>
        <svg
          width="154"
          height="150"
          viewBox="0 0 154 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.1"
            cx="75"
            cy="75"
            r="75"
            fill={theme.colors.main}
          />
          <path
            d="M9 29.7229V62.7836V65.145C9 67.7534 11.1145 69.868 13.7229 69.868H44.4221L57.0363 81.5118C57.883 82.2934 59.2331 81.5235 58.9917 80.3968L56.2295 67.5065H64.4946C67.103 67.5065 69.2175 65.392 69.2175 62.7836V29.7229C69.2175 27.1145 67.103 25 64.4946 25H13.7229C11.1145 25 9 27.1145 9 29.7229Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M153.218 54.7229V87.7836V90.145C153.218 92.7534 151.103 94.868 148.495 94.868H117.796L105.182 106.512C104.335 107.293 102.985 106.524 103.226 105.397L105.988 92.5065H97.7232C95.1148 92.5065 93.0002 90.392 93.0002 87.7836V54.7229C93.0002 52.1145 95.1148 50 97.7232 50H148.495C151.103 50 153.218 52.1145 153.218 54.7229Z"
            fill="url(#paint1_linear)"
          />
          <circle cx="109.5" cy="71.5" r="3.5" fill="#F8F8F8" />
          <circle cx="122.5" cy="71.5" r="3.5" fill="#F8F8F8" />
          <circle cx="135.5" cy="71.5" r="3.5" fill="#F8F8F8" />
          <path
            d="M45 100.41V117.281V118.486C45 119.817 46.0886 120.896 47.4314 120.896H63.2353L69.7291 126.838C70.1649 127.237 70.86 126.844 70.7357 126.269L69.3137 119.691H73.5686C74.9114 119.691 76 118.612 76 117.281V100.41C76 99.079 74.9114 98 73.5686 98H47.4314C46.0886 98 45 99.079 45 100.41Z"
            fill="#D67EE2"
          />
          <circle cx="25.5" cy="46.5" r="3.5" fill="#F8F8F8" />
          <circle cx="38.5" cy="46.5" r="3.5" fill="#F8F8F8" />
          <circle cx="51.5" cy="46.5" r="3.5" fill="#F8F8F8" />
          <circle
            opacity="0.7"
            cx="53.0151"
            cy="109.334"
            r="2.01515"
            fill="#F8F8F8"
          />
          <circle
            opacity="0.7"
            cx="60.5"
            cy="109.334"
            r="2.01515"
            fill="#F8F8F8"
          />
          <circle
            opacity="0.7"
            cx="67.9849"
            cy="109.334"
            r="2.01515"
            fill="#F8F8F8"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="39.1088"
              y1="25"
              x2="39.1088"
              y2="81.8297"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={theme.colors.main} />
              <stop offset="1" stopColor={theme.colors.main} />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="123.109"
              y1="50"
              x2="123.109"
              y2="106.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={theme.colors.pink} />
              <stop offset="1" stopColor="#E554FA" />
            </linearGradient>
          </defs>
        </svg>
      </NoQuestionsImage>
      <NoQuestionsTitle>No questions around here...</NoQuestionsTitle>
      <NoQuestionsText>Be the first person to ask!</NoQuestionsText>
    </NoQuestionsContainer>
  );
};

export default NoQuestions;
