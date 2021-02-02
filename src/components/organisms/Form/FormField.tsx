import * as React from 'react';
import cn from 'classnames';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/es/Field';
import { Row, RowProps } from 'components/atoms/Grid/Row/Row';
import { Col } from 'components/atoms/Grid/Col/Col';
import { LabelOptions, ControlOptions } from './interface';
import { combineProps } from './utils';
import { FormContext } from './Form';
import { FieldError } from './FieldError';
import { FieldExtra } from './FieldExtra';

export interface FormFieldProps extends FieldProps {
  label?: string;
  labelOptions?: LabelOptions;
  controlOptions?: ControlOptions;
  fieldRow?: RowProps; // The layout for field columns
  extra?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  labelOptions,
  name,
  extra,
  className,
  style,
  controlOptions,
  fieldRow,
  children,
  ...props
}) => {
  const formCtx = React.useContext(FormContext);

  // Field's components props
  const labelProps = combineProps(formCtx.labelOptions, labelOptions);
  const controlProps = combineProps(formCtx.controlOptions, controlOptions);
  const fieldRowProps = combineProps(formCtx.fieldRow, fieldRow);

  return (
    <div className={cn(`ebs-form__field`, className)} style={style}>
      <Field name={name} {...props}>
        {(control, meta, form) => {
          const onChange = (...args): void => {
            // Reset field's errors
            if (meta.errors.length > 0) {
              form.resetFields([meta.name]);
            }

            control.onChange(...args);
          };

          const childNode =
            typeof children === 'function'
              ? children(control, meta, form)
              : React.cloneElement(children as React.ReactElement, {
                  ...control,
                  ...props,
                  onChange,
                });

          return (
            <>
              <Row className="ebs-form__field__wrapper" {...fieldRowProps}>
                {label && (
                  <Col {...labelProps.col}>
                    <div
                      className={cn('ebs-form__field__label', labelProps.className, {
                        [`align-items--${labelProps.align}`]: labelProps.align,
                        [`justify-content--${labelProps.justify}`]: labelProps.justify,
                      })}
                    >
                      {label}
                    </div>
                  </Col>
                )}
                <Col {...controlProps.col} className={cn('ebs-form__field__control', controlProps.className)}>
                  {childNode}
                </Col>
              </Row>

              {/* FIXME: Find a better way to display extra and errors below the input control  */}
              <Row className="ebs-form__field__footer" {...fieldRowProps}>
                <Col {...labelProps.col} />
                <Col {...controlProps.col}>
                  {extra && <FieldExtra>{extra}</FieldExtra>}
                  {meta.errors.length > 0 && <FieldError>{meta.errors}</FieldError>}
                </Col>
              </Row>
            </>
          );
        }}
      </Field>
    </div>
  );
};