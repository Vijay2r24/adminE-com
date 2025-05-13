import React, { useRef, useState } from 'react';
import { Plus, ArrowLeft, ArrowRight, Trash2, MoreVertical } from 'lucide-react';
import { IoIosSearch } from 'react-icons/io';

const initialBanners = [
  {
    BannerID: 1,
    BannerName: 'Summer Sale',
    Status: 'Active',
    BannerImages: [
      { BannerImageID: '1-1', BannerImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=600' },
      { BannerImageID: '1-2', BannerImage: 'https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&w=600' },
    ],
  },
  {
    BannerID: 2,
    BannerName: 'New Arrivals',
    Status: 'Inactive',
    BannerImages: [
      { BannerImageID: '2-1', BannerImage: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=600' },
      { BannerImageID: '2-2', BannerImage: 'https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg?auto=compress&w=600' },
      { BannerImageID: '2-3', BannerImage: 'https://images.pexels.com/photos/2983462/pexels-photo-2983462.jpeg?auto=compress&w=600' },
    ],
  },
  {
    BannerID: 3,
    BannerName: 'Festive Offers',
    Status: 'Active',
    BannerImages: [
      { BannerImageID: '3-1', BannerImage: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&w=600' },
    ],
  },
  {
    BannerID: 4,
    BannerName: 'Clearance',
    Status: 'Inactive',
    BannerImages: [
      { BannerImageID: '4-1', BannerImage: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=600' },
      { BannerImageID: '4-2', BannerImage: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&w=600' },
    ],
  },
  {
    BannerID: 5,
    BannerName: 'Flash Deals',
    Status: 'Active',
    BannerImages: [
      { BannerImageID: '5-1', BannerImage: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&w=600' },
      { BannerImageID: '5-2', BannerImage: 'https://images.pexels.com/photos/325877/pexels-photo-325877.jpeg?auto=compress&w=600' },
    ],
  },
  {
    BannerID: 6,
    BannerName: 'Winter Collection',
    Status: 'Inactive',
    BannerImages: [
      { BannerImageID: '6-1', BannerImage: 'https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&w=600' },
    ],
  },
];

const Banners = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const rowsPerPage = 6;
  const [activeMenu, setActiveMenu] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState({});
  const fileInputRef = useRef();

  // Search
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const filteredBanners = banners.filter(b =>
    b.BannerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(b.BannerID).includes(searchQuery)
  );

  // Pagination
  const paginatedBanners = filteredBanners.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  // Carousel controls
  const handleCarouselLeft = (id, images) => {
    setCarouselIndex(idx => ({
      ...idx,
      [id]: idx[id] > 0 ? idx[id] - 1 : images.length - 1
    }));
  };
  const handleCarouselRight = (id, images) => {
    setCarouselIndex(idx => ({
      ...idx,
      [id]: idx[id] < images.length - 1 ? idx[id] + 1 : 0
    }));
  };

  // Dropdown menu
  const toggleMenu = (id) => setActiveMenu(activeMenu === id ? null : id);

  // Edit/Delete handlers (simulate)
  const handleEditBanner = (id) => alert('Edit banner: ' + id);
  const handleDeleteBanner = (id) => {
    setBanners(prev => prev.filter(b => b.BannerID !== id));
    setActiveMenu(null);
  };

  // Status toggle
  const handleToggleStatus = (id, status) => {
    setBanners(prev => prev.map(b => b.BannerID === id ? { ...b, Status: status === 'Active' ? 'Inactive' : 'Active' } : b));
  };

  return (
    <div className="main-container px-4 py-6">
      {/* Header */}
      <div className="body-container">
        <h2 className="heading text-2xl font-bold text-gray-900">Banners</h2>
        <div className="flex justify-end mb-4">
          <ul>
            <li>
              <button
                type="button"
                className="action-button flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-not-allowed opacity-60"
                disabled
              >
                <Plus className="icon h-5 w-5 mr-1" />
                <span>Create Banner</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex flex-wrap justify-end gap-2 mt-2">
        <div className="flex justify-center items-center w-full mt-4">
          <div className="relative flex items-center">
            <label htmlFor="searchName" className="sr-only">Search</label>
            <input
              id="searchName"
              type="text"
              placeholder=" Search by   Banner Number / Banner Name "
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 pr-10 border border-gray-400 rounded-md w-full sm:w-[400px] md:w-[500px] text-sm leading-6 h-[40px]"
            />
            <div className="absolute right-3 text-gray-500">
              <IoIosSearch />
            </div>
          </div>
        </div>
      </div>
      {/* Banner Grid */}
      <div>
        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedBanners.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">No banners found.</div>
          )}
          {paginatedBanners.map((project) => (
            <div
              key={project.BannerID}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105"
            >
              {/* Carousel Section */}
              <div className="relative w-full">
                {project.BannerImages && project.BannerImages.length > 0 ? (
                  <div className="relative">
                    <img
                      src={project.BannerImages[carouselIndex[project.BannerID] || 0].BannerImage}
                      alt={`Banner ${project.BannerName}`}
                      className="w-full aspect-[16/9] object-cover"
                    />
                    {project.BannerImages.length > 1 && (
                      <>
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                          onClick={() => handleCarouselLeft(project.BannerID, project.BannerImages)}
                          aria-label="Previous"
                          type="button"
                        >
                          <ArrowLeft className="h-5 w-5 text-gray-700" />
                        </button>
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                          onClick={() => handleCarouselRight(project.BannerID, project.BannerImages)}
                          aria-label="Next"
                          type="button"
                        >
                          <ArrowRight className="h-5 w-5 text-gray-700" />
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <img
                    src="/placeholder.jpg"
                    alt="Placeholder"
                    className="w-full aspect-[16/9] object-cover"
                  />
                )}
              </div>
              {/* Content Section */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="flex items-start justify-between">
                  {/* Banner Name */}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate max-w-[80%]">
                    {project.BannerName || "Unnamed Banner"}
                  </h3>
                  {/* Dropdown Icon & Menu */}
                  <div className="relative">
                    <button
                      className="text-gray-500 text-xl cursor-pointer focus:outline-none"
                      onClick={() => toggleMenu(project.BannerID)}
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>
                    {activeMenu === project.BannerID && (
                      <div className="absolute top-[-350%] right-0 mt-2 bg-white shadow-md rounded-md z-10">
                        <ul className="text-sm text-gray-700">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleEditBanner(project.BannerID)}
                          >
                            Edit
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleDeleteBanner(project.BannerID)}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {/* Status Switch */}
                <div className="flex items-center justify-between mt-4">
                  <div
                    onClick={() => handleToggleStatus(project.BannerID, project.Status)}
                    className={`relative w-14 h-6 rounded-full cursor-pointer transition ${project.Status === "Active" ? "bg-green-500" : "bg-red-500"}`}
                  >
                    <div
                      className={`absolute top-1/2 left-1 transform -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${project.Status === "Active" ? "translate-x-8" : "translate-x-0"}`}
                    ></div>
                  </div>
                  <span
                    className={`text-sm font-medium ${project.Status === "Active" ? "text-green-500" : "text-red-500"}`}
                  >
                    {project.Status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            disabled={(page + 1) * rowsPerPage >= filteredBanners.length}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banners; 