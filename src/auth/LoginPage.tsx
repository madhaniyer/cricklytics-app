import { Link } from 'react-router-dom';
import { LoginForm } from 'wasp/client/auth';
import { AuthPageLayout } from './AuthPageLayout';
import loginBanner from '../client/static/login-banner.avif';

export default function Login() {
  return (
    <AuthPageLayout>
      <div className="h-[90vh] justify-center flex flex-col">
        {/* Top half with the background image */}
            <div
              className="flex-1 h-[50vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${loginBanner})`,
              }}
            ></div>
        {/* Login form container */}
        <div className="flex items-center justify-center h-auto bg-white dark:bg-gray-800 p-4 md:p-4">
          <div className="bg-gray-100 dark:bg-gray-700 bg-opacity-90 p-6 md:p-10 rounded-lg shadow-lg max-w-md w-full">
            <LoginForm />
            <br />
            <span className="text-xs md:text-sm font-medium text-gray-900 dark:text-gray-100">
              Don't have an account yet?{' '}
              <Link to="/signup" className="underline">
                go to signup
              </Link>.
            </span>
            <br />
            <span className="text-xs md:text-sm font-medium text-gray-900 dark:text-gray-100">
              Forgot your password?{' '}
              <Link to="/request-password-reset" className="underline">
                reset it
              </Link>.
            </span>
          </div>
        </div>
      </div>
    </AuthPageLayout>
  );
}
