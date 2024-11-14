import { Link, routes } from 'wasp/client/router';
import { useAuth } from 'wasp/client/auth';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { BiLogIn } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiBars3 } from 'react-icons/hi2';
import logo from '../static/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faWater, faGlobe, faChartLine , faBridgeWater,faEquals, faTrafficLight, faPlane, faPlaneDeparture, faComputer} from "@fortawesome/free-solid-svg-icons";
import DropdownUser from '../../user/DropdownUser';
import { UserMenuItems } from '../../user/UserMenuItems';
import { DocsUrl, BlogUrl } from '../../shared/common';
import DarkModeSwitcher from './DarkModeSwitcher';

const navigation = [
  { name: 'Applications', icon: faComputer, href: routes.AppDashboardRoute.build() },
  { name: 'Integrations', icon: faTree, href: routes.AppDashboardRoute.build() },
  { name: 'InFlight', icon: faPlaneDeparture, href: routes.InflightDashboardRoute.build() },
  { name: 'Admin', icon: faWater, href: routes.AdminRoute.build() },
];

const NavLogo = () => <img className='h-8 w-8' src={logo} alt='Your SaaS App' />;

export default function AppNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: user, isLoading: isUserLoading } = useAuth();

  return (
    <header className='absolute inset-x-0 top-0 z-50 shadow sticky bg-white bg-opacity-50 backdrop-blur-lg backdrop-filter dark:border dark:border-gray-100/10 dark:bg-boxdark-2'>
      <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <FontAwesomeIcon icon={faBridgeWater} className='text-green-600 w-15 h-15 mr-4' />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <HiBars3 className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-900 hover:text-green-700 dark:text-white transition duration-300 ease-in-out flex items-center gap-2'
            >
              <FontAwesomeIcon icon={item.icon} className='w-5 h-5' />
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 gap-3 justify-end items-center'>
          <ul className='flex justify-center items-center gap-2 sm:gap-4'>
            <DarkModeSwitcher />
          </ul>

          {isUserLoading ? null : !user ? (
            <a
              href={routes.LoginRoute.build()}
              className='text-sm font-semibold leading-6 ml-4 flex items-center gap-1'
            >
              Log in <BiLogIn size='1.1rem' />
            </a>
          ) : (
            <DropdownUser user={user} />
          )}
        </div>
      </nav>

      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-boxdark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <NavLogo />
              {/* <FontAwesomeIcon icon={faEquals} className='text-blue-600 w-15 h-15 mr-4 fa-sharp fa-solid fa-beat-fade' /> */}
            </a>  
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white'
              onClick={() => setMobileMenuOpen(false)}
            >
              <AiFillCloseCircle className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 flex items-center gap-2 text-gray-900 hover:bg-gray-50 dark:text-white hover:dark:bg-boxdark-2'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FontAwesomeIcon icon={item.icon} className='w-5 h-5' />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                {isUserLoading ? null : !user ? (
                  <Link to='/'>
                    <div className='flex justify-end items-center gap-1 text-gray-900 hover:text-green-700 dark:text-white transition duration-300 ease-in-out'>
                      Log in <BiLogIn size='1.1rem' />
                    </div>
                  </Link>
                ) : (
                  <UserMenuItems user={user} setMobileMenuOpen={setMobileMenuOpen} />
                )}
              </div>
              <div className='py-6'>
                <DarkModeSwitcher />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
