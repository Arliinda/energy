import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import * as api from '../api/index.tsx'

export default function AddHouse(props) {
  const [open, setOpen] = useState(true);
  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    zip: "",
  });

  props.func(open);
  // open(props.open)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is fomr handeleSubmit", postData)
    api.addHouse(postData)
    setPostData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      streetAddress: "",
      city: "",
      zip: "",
    })
    setOpen(false)

  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                <div></div>
                <form method="POST" onSubmit={handleSubmit}>
                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-base font-semibold leading-6 text-gray-900">
                            Personal Information
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            Use a permanent address where you can receive mail.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="overflow-hidden shadow sm:rounded-md">
                          <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="firstName"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  First name
                                </label>
                                <input
                                  type="text"
                                  name="firstName"
                                  value={postData.firstName}
                                  id="firstName"
                                  autoComplete="given-name"
                                  onChange={(e) =>
                                    setPostData({
                                      ...postData,
                                      firstName: e.target.value,
                                    })
                                  }
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="lastName"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  name="lastName"
                                  value={postData.lastName}
                                  id="lastName"
                                  autoComplete="family-name"
                                  onChange={(e) =>
                                    setPostData({
                                      ...postData,
                                      lastName: e.target.value,
                                    })
                                  }
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-4">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Email address
                                </label>
                                <input
                                  type="text"
                                  name="email"
                                  value={postData.email}
                                  id="email"
                                  autoComplete="email"
                                  onChange={(e) =>
                                    setPostData({
                                      ...postData,
                                      email: e.target.value,
                                    })
                                  }
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="country"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Country
                                </label>
                                <select
                                  id="country"
                                  name="country"
                                  value={postData.country}
                                  autoComplete="country"
                                  onChange={(e) =>
                                    setPostData({
                                      ...postData,
                                      country: e.target.value,
                                    })
                                  }
                                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                  <option>Germany</option>
                                  <option>Switzerland</option>
                                  <option>Kosovo</option>
                                  <option>Austria</option>
                                </select>
                              </div>

                              <div className="col-span-6">
                                <label
                                  htmlFor="streetAddress"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Street address
                                </label>
                                <input
                                  type="text"
                                  name="streetAddress"
                                  value={postData.streetAddress}
                                  id="streetAddress"
                                  autoComplete="streetAddress"
                                  onChange={(e) =>
                                    setPostData({
                                      ...postData,
                                      streetAddress: e.target.value,
                                    })
                                  }
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label
                                  htmlFor="city"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  City
                                </label>
                                <input
                                  type="text"
                                  name="city"
                                  value={postData.city}
                                  id="city"
                                  autoComplete="city"
                                  onChange={(e) =>
                                    setPostData({
                                      ...postData,
                                      city: e.target.value,
                                    })
                                  }
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  htmlFor="zip"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Zip
                                </label>
                                <input
                                  type="text"
                                  name="zip"
                                  value={postData.zip}
                                  id="zip"
                                  autoComplete="zip"
                                  onChange={(e) =>
                                    setPostData({
                                      ...postData,
                                      zip: e.target.value,
                                    })
                                  }
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                {/* <label
                                  htmlFor="postal-code"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  ZIP / Postal code
                                </label> */}
                                {/* <input
                                  type="text"
                                  name="postal-code"
                                  id="postal-code"
                                  autoComplete="postal-code"
                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
                  <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                      <div className="border-t border-gray-200" />
                    </div>
                  </div> */}

                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-base font-semibold leading-6 text-gray-900">
                            Energy
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            Select which type of Energy consumption your
                            household uses.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="overflow-hidden shadow sm:rounded-md">
                          {/* <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <fieldset>
                              <legend className="sr-only">Electricity</legend>
                              <div
                                className="text-sm font-semibold text-gray-900"
                                aria-hidden="true"
                              >
                                Electricity
                              </div>
                              <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="grid"
                                      name="grid"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="grid"
                                      className="font-medium text-gray-700"
                                    >
                                      Grid
                                    </label>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="candidates"
                                      name="candidates"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="candidates"
                                      className="font-medium text-gray-700"
                                    >
                                      Solar
                                    </label>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="offers"
                                      name="offers"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="offers"
                                      className="font-medium text-gray-700"
                                    >
                                      Other
                                    </label>
                                    <p className="text-gray-500">
                                      You can later specify in the settings your
                                      particualar system.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <fieldset>
                              <legend className="sr-only">Heating</legend>
                              <div
                                className="text-sm font-semibold text-gray-900"
                                aria-hidden="true"
                              >
                                Heating
                              </div>
                              <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="grid"
                                      name="grid"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="grid"
                                      className="font-medium text-gray-700"
                                    >
                                      Gas
                                    </label>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="candidates"
                                      name="candidates"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="candidates"
                                      className="font-medium text-gray-700"
                                    >
                                      Heat pump
                                    </label>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="offers"
                                      name="offers"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="offers"
                                      className="font-medium text-gray-700"
                                    >
                                      Other
                                    </label>
                                    <p className="text-gray-500">
                                      You can later specify in the settings your
                                      particualar system.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                            <fieldset>
                              <legend className="sr-only">Water</legend>
                              <div
                                className="text-sm font-semibold text-gray-900"
                                aria-hidden="true"
                              >
                                Water
                              </div>
                              <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="grid"
                                      name="grid"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="grid"
                                      className="font-medium text-gray-700"
                                    >
                                      Tap water
                                    </label>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="candidates"
                                      name="candidates"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="candidates"
                                      className="font-medium text-gray-700"
                                    >
                                      Well
                                    </label>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <div className="flex h-5 items-center">
                                    <input
                                      id="offers"
                                      name="offers"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label
                                      htmlFor="offers"
                                      className="font-medium text-gray-700"
                                    >
                                      Other
                                    </label>
                                    <p className="text-gray-500">
                                      You can later specify in the settings your
                                      particualar system.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div> */}
                          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
