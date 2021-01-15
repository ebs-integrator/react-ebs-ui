import * as React from 'react';
import cn from 'classnames';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={cn(`ebs-card`, className)} {...props}>
    {children}
  </div>
);

export interface HeaderProps {
  className?: string;
  title?: React.ReactNode;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  count?: number;
}

export const CardHeader: React.FC<HeaderProps> = ({ className, count = 0, title, leftSide, rightSide }) => (
  <div className={cn(`ebs-card__header`, className)}>
    <div className="ebs-card__header-side--left">
      {title && (
        <div className="ebs-card__header-title">
          {title}

          {count > 0 ? ` (${count})` : ''}
        </div>
      )}

      {leftSide}
    </div>

    {rightSide && <div className="ebs-card__header-side--right">{rightSide}</div>}
  </div>
);

export interface FooterProps {
  className?: string;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  currentLabel?: string;
}

export const CardFooter: React.FC<FooterProps> = ({ className, leftSide, rightSide }) => (
  <div className={cn(`ebs-card__footer`, className)}>
    {leftSide && <div className="ebs-card__footer-side--left">{leftSide}</div>}

    {rightSide ? <div className="ebs-card__footer-side--right">{rightSide}</div> : null}
  </div>
);
