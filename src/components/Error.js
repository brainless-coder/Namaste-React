import { useRouteError } from 'react-router-dom';
import ErrorImage from '../assets/img/bhau.gif';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!! Something went wrong</h1>
      <h3>{err.status} : {err.statusText} : {err.data}</h3>
      <img src={ErrorImage} />
    </div>
  );
}

export default Error;