'use client';

import { InputField, PasswordField } from '@ui/components';

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <InputField name={''} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <PasswordField name={''} />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
