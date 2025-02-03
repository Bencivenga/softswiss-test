function Button({
  children,
  variant = 'primary',
  className,
  as = 'button',
  ...props
}) {
  const buttonClass = `button button--${variant} ${className || ''}`.trim();
  const Element = as;

  return (
    <Element className={buttonClass} {...props}>
      {children}
    </Element>
  );
}

export default Button;
