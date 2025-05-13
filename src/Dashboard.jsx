

// import React, { useState } from "react";
// import mockData from "./Data/MOCK_DATA.json"; // ✅ Import like this

// function Dashboard() {
//   const [data] = useState(mockData); // Directly use imported data

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
//         User Dashboard
//       </h1>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.map((user) => (
//           <div
//             key={user.id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
//           >
//             <img
//               src={`https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}`}
//               alt={`${user.first_name} ${user.last_name}`}
//               className="w-24 h-24 rounded-full mx-auto mb-4"
//             />
//             <h2 className="text-xl font-semibold mb-2 text-center">
//               {user.first_name} {user.last_name}
//             </h2>
//             <p className="text-gray-600 text-center">Email: {user.email}</p>
//             <p className="text-gray-600 text-center">Gender: {user.gender}</p>
//             <p className="text-gray-600 text-center">Job: {user.job_tile}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



























































import React, { useState } from "react";
import mockData from "./Data/MOCK_DATA.json";

function Dashboard() {
  const [data] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const maxVisiblePages = 7; // Limit to 7 pages visible at a time

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Logic for showing a range of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Determine the range of visible page numbers
  const startPage =
    Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  const visiblePages = pageNumbers.slice(startPage - 1, endPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        User Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {currentItems.map((user) => (
          <div
            key={user.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}`}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-28 h-28 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-3 text-center">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-600 text-center text-lg mb-2">
              Email: {user.email}
            </p>
            <p className="text-gray-600 text-center text-lg mb-2">
              Gender: {user.gender}
            </p>
            <p className="text-gray-600 text-center text-lg">
              Job: {user.job_tile}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-1 mt-4">
        {/* Previous Button */}
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded border ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
          }`}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded border ${
              currentPage === page
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded border ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
