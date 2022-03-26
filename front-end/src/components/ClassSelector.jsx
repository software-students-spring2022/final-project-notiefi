import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { FaCheck, FaAngleDown } from 'react-icons/fa';

const SelectClass = ({ classes }) => {
  const [selected, setSelected] = useState(classes[0]);
  const [query, setQuery] = useState('');

  const filteredClasses =
    query === ''
      ? classes
      : classes.filter(
          (c) =>
            c.name
              .toLowerCase()
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, '')) ||
            c.classCode
              .toLowerCase()
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative z-[2] mt-1 w-full ">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="text-gray- w-full rounded-lg border-none py-4 pl-6 pr-10 leading-5 focus:outline-none focus:ring-0"
            displayValue={(c) => `${c.classCode} ${c.name}`}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4">
            <FaAngleDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}>
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredClasses.length === 0 ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredClasses.map((c) => (
                <Combobox.Option
                  key={c.classCode}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-teal-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={c}>
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}>
                        {c.classCode} {c.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}>
                          <FaCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default SelectClass;
