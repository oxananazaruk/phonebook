import { Circles } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWraper>
      <Circles
        height="80"
        width="80"
        color="#0390fc"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWraper>
  );
};
