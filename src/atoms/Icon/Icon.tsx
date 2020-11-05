import * as React from 'react';

export interface Props {
  onClick?: () => void;
  type?: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({ onClick, type, className = '' }) => {
  switch (type) {
    case 'eye':
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="none"
          className={`ebs-icon ebs-icon-${type} ${className}`}
          onClick={onClick}
        >
          <path
            d="M7.99996 9.33335C8.73634 9.33335 9.33329 8.7364 9.33329 8.00002C9.33329 7.26364 8.73634 6.66669 7.99996 6.66669C7.26358 6.66669 6.66663 7.26364 6.66663 8.00002C6.66663 8.7364 7.26358 9.33335 7.99996 9.33335Z"
            stroke="#494F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M1.33337 8L2.33337 9.33333C3.02129 10.1708 3.88628 10.8454 4.86612 11.3085C5.84595 11.7717 6.91626 12.0119 8.00004 12.0119C9.08382 12.0119 10.1541 11.7717 11.134 11.3085C12.1138 10.8454 12.9788 10.1708 13.6667 9.33333L14.6667 8"
            stroke="#494F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M1.33337 8.00002L2.33337 6.66668C3.02129 5.82922 3.88628 5.15464 4.86612 4.69148C5.84595 4.22832 6.91626 3.9881 8.00004 3.9881C9.08382 3.9881 10.1541 4.22832 11.134 4.69148C12.1138 5.15464 12.9788 5.82922 13.6667 6.66668L14.6667 8.00002"
            stroke="#494F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'arrow-up':
    case 'arrow-right':
    case 'arrow-down':
    case 'arrow-left':
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 10 5"
          fill="none"
          className={`ebs-icon ebs-icon-${type} ${className}`}
          onClick={onClick}
        >
          <path d="M4.64645 0.353553C4.84171 0.158291 5.15829 0.158291 5.35355 0.353553L9.14645 4.14645C9.46143 4.46143 9.23835 5 8.79289 5L1.20711 5C0.761654 5 0.538571 4.46143 0.853553 4.14645L4.64645 0.353553Z" />
        </svg>
      );
    case 'check':
      return (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="none"
          className={`ebs-icon ebs-icon-${type} ${className}`}
          onClick={onClick}
        >
          <path
            d="M3.33325 8.00008L6.66659 11.3334L13.3333 4.66675"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      console.warn(`<Icon /> couldn't find ${type} icon.`);
      return null;
  }
};
