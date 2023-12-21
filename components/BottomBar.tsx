import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface MenuItem {
  title: string;
  placeholder: string;
  inputType: string;
  options?: string[];
  icon?: React.ElementType;
}

const menuItems: MenuItem[] = [
  { title: 'Name', placeholder: 'Enter patient name', inputType: 'text' },
  { title: 'Date of Birth', placeholder: 'DD/MM/YYYY', inputType: 'date' },
  { title: 'Gender', placeholder: 'Enter patient gender', inputType: 'text' },
  { title: 'Address', placeholder: 'Enter patient address', inputType: 'text' },
  { title: 'City', placeholder: 'Enter patient city', inputType: 'text' },
  { title: 'Zip Code', placeholder: 'Enter patient city', inputType: 'text' },
  { title: 'State', placeholder: 'Select patient State', inputType: 'select',
   options: [
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chhattisgarh',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'Jharkhand',
      'Karnataka',
      'Kerala',
      'Madhya Pradesh',
      'Maharashtra',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Tamil Nadu',
      'Telangana',
      'Tripura',
      'Uttar Pradesh',
      'Uttarakhand',
      'West Bengal',
      'Andaman and Nicobar Islands',
      'Chandigarh',
      'Dadra and Nagar Haveli and Daman and Diu',
      'Delhi',
      'Lakshadweep',
      'Puducherry',
    ],
  },
  { title: 'Phone', placeholder: '+91', inputType: 'number' },
];

export const BottomBar = () => {
  const [selectedState, setSelectedState] = useState('');

  return (
    <div className='border-2 rounded-3xl p-2'>
      <h3>Basic Details</h3>
      <div className="grid lg:grid-cols-[1fr_1fr] gap-8 p-3 ">
        <div className="flex items-center gap-x-2">
          <div className="p-4 bg-white rounded-[30px] border border-stone-200 justify-start items-center gap-2 flex">
            <FaArrowLeft size={20} />
          </div>
          <div className="text-xl font-semibold">Create new appointment</div>
        </div>
        <div></div>

        {menuItems.map((menuItem) => (
          <div key={menuItem.title} className="items-center gap-x-1">
            <div className="text-xl font-semibold">{menuItem.title}</div>
            {menuItem.inputType === 'select' ? (
              <select
                className="pl-3.5 w-11/12 lg:w-9/12 py-4 white-nowrap bg-white rounded-2xl border border-stone-200 justify-center items-center  inline-flex"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="" disabled hidden>
                  {menuItem.placeholder}
                </option>
                {menuItem.options && menuItem.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className="pl-2.5 w-11/12 lg:w-9/12 py-4 white-nowrap bg-white rounded-2xl border border-stone-200 justify-center items-center gap-2.5 inline-flex"
                placeholder={menuItem.placeholder}
                type={menuItem.inputType}
              />
            )}
          </div>
        ))}

        <div className="flex flex-col">
          <div className="w-[135px] h-[55px] px-[36px] py-[3px] bg-gray-900 bg-opacity-60 rounded-[30px] justify-start items-center gap-2 inline-flex">
            <div className="text-white text-lg font-semibold">Next</div>
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
