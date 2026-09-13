import React from 'react';

export function ScrambleText({
  text,
  as: Component = 'span',
  className = '',
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {text}
    </Component>
  );
}

export default ScrambleText;
