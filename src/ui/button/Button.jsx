/* eslint-disable react/button-has-type */
import { twMerge } from 'tailwind-merge';

export default function Button({ children, ...restProps }) {
  const { className } = restProps;

  return (
    <button
      {...restProps}
      className={twMerge(
        'bg-primary text-secondary px-6 py-2 rounded-md font-semibold button-press',
        className,
      )}
    >
      {children}
    </button>
  );
}
