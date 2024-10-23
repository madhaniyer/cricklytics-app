import { ReactNode } from 'react';
export function AuthPageLayout({children} : {children: ReactNode }) {
  return (
    <div className='flex  flex-col justify-center pt-20 sm:px-6 lg:px-8 '>
      <div className='sm:mx-auto sm:w-full sm:max-w-lg'>
        <div className='bg-white shadow-xl ring-1 ring-gray-900/10 sm:rounded-lg  dark:bg-white dark:text-gray-900'>
          
            { children }

        </div>
      </div>
    </div>
  );
}
