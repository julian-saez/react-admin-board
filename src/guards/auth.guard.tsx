import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PublicRoutes from '../models/routes/public_routes';
import PrivateRoutes from '../models/routes/private_routes';
import { AppStore } from '../redux/store';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
