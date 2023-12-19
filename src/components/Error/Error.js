import { Warning, ErrorWraper } from './Error.styled';

export const Error = () => {
  return (
    <ErrorWraper>
      <Warning>
        Oops! Something went wrong! Please try reloading this page!
      </Warning>
    </ErrorWraper>
  );
};
