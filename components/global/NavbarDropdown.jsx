"use client";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  NewspaperIcon,
  PhotographIcon,
  DocumentIcon,
  ChatIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";

const navigation = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "About", href: "/about", icon: InformationCircleIcon },
  { name: "Products", href: "/products", icon: BriefcaseIcon },
  { name: "Industry", href: "/industry", icon: BriefcaseIcon },
  { name: "Latest News", href: "/latest-news", icon: NewspaperIcon },
  { name: "Gallery", href: "/gallery", icon: PhotographIcon },
  { name: "Brochure", href: "/brochure", icon: DocumentIcon },
  { name: "More", href: "#", icon: Bars3Icon },
  { name: "Contact", href: "/contact", icon: ChatIcon },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* mobile sidebar  */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <nav className="flex flex-1 flex-col py-6">
                      <NavbarDropdown />
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name} className="pb-4">
                                <Link
                                  href={item.href}
                                  className={`${
                                    item.href === pathName
                                      ? "bg-gray-50 text-red-600"
                                      : "text-gray-700 hover:text-red-600  hover:bg-gray-50"
                                  }
                                    group flex gap-x-3 rounded-md p-4 text-sm leading-6 font-semibold`}
                                >
                                  <item.icon
                                    className={`
                                      ${
                                        item.href === pathName
                                          ? "text-red-600"
                                          : "text-gray-400 group-hover:text-red-600"
                                      }
                                      h-6 w-6 shrink-0`}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <button className="flex items-center space-x-3 rounded-lg text-base p-4 font-semibold transition-colors duration-300 w-full hover:bg-red-50 cursor-pointer">
                            <span>
                              <ArrowRightOnRectangleIcon
                                size={26}
                                weight="bold"
                                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600"
                              />
                            </span>
                            <span>Logout</span>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/* desktop sidebar  */}
        {/* <div className="hidden h-full   lg:z-50 lg:w-72 ">
          <div className="   border-r bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <h1 className="text-2xl font-extrabold">Test My Skills</h1>
            </div>
            <nav className="flex flex-1 flex-col">
              <NavbarDropdown />
              <ul role="list" className="flex flex-1 flex-col">
                <li>
                  <ul role="list" className="space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name} className="pb-4">
                        <Link
                          href={item.href}
                          className={`${item.href === pathName
                            ? "bg-gray-50 text-red-600"
                            : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                            }
                            transition-colors duration-500 group flex gap-x-3 rounded-md p-4 text-sm leading-6 font-semibold`}
                        >
                          <item.icon
                            className={`
                              ${item.href === pathName
                                ? "text-red-600"
                                : "text-gray-400 group-hover:text-red-600"
                              }
                              h-6 w-6 shrink-0 transition-colors duration-500`}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <button
                    className="flex items-center space-x-3 mb-4 rounded-lg text-base p-4 font-semibold transition-colors duration-300 w-full hover:bg-red-50 cursor-pointer"
                  >
                    <span>
                      <ArrowRightOnRectangleIcon
                        size={26}
                        weight="bold"
                        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-red-600"
                      />
                    </span>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}

        <div>
          <div className="fixed top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
