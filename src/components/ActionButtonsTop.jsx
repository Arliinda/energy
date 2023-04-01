import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import * as api from "../api/index.tsx";
import AddHouse from "./AddHouse";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ActionButtonsTop = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(people[3]);
  const [houses, setHouses] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const fetchedHouses = await api.fetchHouses();
      setHouses(fetchedHouses);
    };

    fetchData();

    houses.map((house) => {
      console.log(house.streetAddress);
    })
  }, []);

  const pull_data = (data) => {
    setOpen(data);

    console.log(data);
  };


  return (
    <>
      
      <div className="border-b border-gray-200 px-4 py-4 
      lg:flex lg:items-center lg:justify-between 
      md:flex md:items-center md:justify-between md:px-6
      sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Home
          </h1>
        </div>
        <div className="mt-4 flex justify-between gap-[10px]   sm:mt-0 sm:ml-4">
          <Listbox
            value={selected}
            onChange={setSelected}
            className="inline-block"
          >
            {({ open }) => (
              <>
                {/* <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Assigned to
                </Listbox.Label> */}
                <div className="flex mt-1">
                  <Listbox.Button className="flex  w-full cursor-default rounded-md border border-gray-300 bg-white py-2 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <p className=" block   pl-6 pr-6">{selected.name}</p>
                 
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter= "ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-4"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {houses.map((house) => (
                        <Listbox.Option
                          key={house._id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={house.streetAddress}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {house.streetAddress}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <></>
          <div className="flex mt-1">
          <Menu as="div" className="flex w-full cursor-default rounded-md border border-gray-300 bg-white py-2 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className=" block w-[105px]  pl-6 pr-6"
            >
              Share
            </button>
          </Menu>
        </div>
        <div className="flex mt-1 ">
          <Menu as="div" className="flex inline-block items-center ">
            
              <Menu.Button className="flex  w-full text-white cursor-default  bg-purple-700 rounded-md border border-gray-300  py-2 pl-3 pr-3 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <p className="-mr-1 ml-2 h-5 w-5"></p>  
              +Add
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>

            <Transition
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 "
              enterTo="opacity-100 translate-y-0 "
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 "
              leaveTo="opacity-0 translate-y-4 "
            >
              <Menu.Items className="absolute right-0 z-10 mt-[118px] mr-[32px]  w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Add new household
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="www.apple.com"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Add new data
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          </div>
        </div>
      </div>
      {open && <AddHouse func={pull_data} />}
    </>
  );
};

export default ActionButtonsTop;
