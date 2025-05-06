import { useState } from 'react';
import { Tab } from '@headlessui/react';
import BrandList from './Brands/BrandList';
import BrandCreate from './Brands/CreateBrand';
import CategoryList from './Categories/CategoryList';
import CategoryCreate from './Categories/CreateCategory';
import AttributeTypeList from '../../Components/browse/AttributeTypes/AttributeTypeList';
import AttributeTypeCreate from './AttributeTypes/CreateAttributeType';
import ColorList from './Colors/ColorList';
import ColorCreate from './Colors/CreateColor';
import AttributeList from './Attributes/AttributeList';
import AttributeCreate from './Attributes/CreateAttribute';
import { Plus, List, Package, Tag, Palette, Layers, Settings } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Browse = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [viewMode, setViewMode] = useState('list');

  const tabs = [
    { name: 'Brands', list: BrandList, create: BrandCreate, icon: Package },
    { name: 'Categories', list: CategoryList, create: CategoryCreate, icon: Tag },
    { name: 'Attribute Types', list: AttributeTypeList, create: AttributeTypeCreate, icon: Settings },
    { name: 'Colors', list: ColorList, create: ColorCreate, icon: Palette },
    { name: 'Attributes', list: AttributeList, create: AttributeCreate, icon: Layers },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-2">
      {/* Header and Button */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Browse</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your brands, categories, attributes, and more
          </p>
        </div>
        <button
          onClick={() => setViewMode(viewMode === 'list' ? 'create' : 'list')}
          className="w-full md:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#5B45E0] hover:bg-[#4c39c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B45E0] transition"
        >
          {viewMode === 'list' ? (
            <>
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </>
          ) : (
            <>
              <List className="h-4 w-4 mr-2" />
              View List
            </>
          )}
        </button>
      </div>
  
      {/* Tabs Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <div className="overflow-x-auto">
            <Tab.List className="flex space-x-4 min-w-max border-b border-gray-200 bg-gray-50 px-4 sm:px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        'flex items-center px-3 sm:px-5 py-2 sm:py-3 text-sm font-medium rounded-t-md border-b-2 transition duration-150 ease-in-out whitespace-nowrap',
                        selected
                          ? 'border-[#5B45E0] text-[#5B45E0] bg-white'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      )
                    }
                  >
                    <Icon className="h-4 w-4 mr-1.5" />
                    {tab.name}
                  </Tab>
                );
              })}
            </Tab.List>
          </div>
  
          <Tab.Panels>
            {tabs.map((tab, idx) => (
              <Tab.Panel key={idx} className="p-4 sm:p-6 animate-fadeIn">
                {viewMode === 'list' ? <tab.list /> : <tab.create />}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
 
  </div>
  
  );
};

export default Browse; 