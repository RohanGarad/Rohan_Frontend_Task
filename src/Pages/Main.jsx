const ProjectPage = () => {
  return (
    <div className="p-4 bg-slate-200">
      {/* Heading Section */}
      <div className="bg-white mb-4 rounded-3xl p-4 sm:p-8">
        <div className="flex flex-wrap justify-between items-start gap-4">
          {/* Left Section */}
          <div className="w-full sm:w-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">#12: Rohan Garad</h1>
            <div className="flex flex-wrap items-center space-x-2 sm:gap-11">
              <p className="text-sm sm:text-base">Hinjewadi</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-300 text-white px-2 py-1 rounded-full text-sm">● Cancelled</span>
                <span className="bg-orange-300 text-white px-2 py-1 rounded-full text-sm">● Pause</span>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col items-end w-full sm:w-auto space-y-4">
            {/* Top Right Section */}
            <div className="flex flex-wrap justify-end sm:justify-start items-center gap-3">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm sm:text-base">Pause</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
            </div>
            {/* Bottom Section - Buttons */}
            <div className="flex flex-wrap justify-end gap-2">
              <button className="bg-gray-300 text-black px-4 py-2 rounded-full text-xs sm:text-sm">View Sitemap</button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-full text-xs sm:text-sm">View CS</button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-full text-xs sm:text-sm">KW Main</button>
              <button className="bg-teal-800 text-white px-4 py-2 rounded-full text-xs sm:text-sm">Update Increment</button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-full text-xs sm:text-sm">
                Upgrade / Downgrade
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="flex">
        {/* Project Details Section */}
        <div className="w-full lg:w-8/12 p-4 bg-white rounded-3xl m-2">
          {/* Heading */}
          <h2 className="text-lg lg:text-xl font-bold mb-4 bg-slate-500 p-5 lg:p-7 text-white rounded-3xl">
            Project Details
          </h2>
          <div className="flex flex-wrap">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 pr-0 lg:pr-2 p-2">
              <p className="pb-2 font-semibold">
                <strong>Monthly Content Units:</strong> 1
              </p>
              <hr />
              <p className="py-2 font-semibold">
                <strong>Increment Month:</strong> 1
              </p>
              <hr />
              <p className="py-2">
                <strong>First Main Geographic Target:</strong>
                <h1 className="font-thin text-sm">Chisiago</h1>
              </p>
              <hr />
              <p className="py-2">
                <strong>Practice area or Area to Target:</strong>
                <h1 className="font-thin text-sm">None</h1>
              </p>
              <hr />
              <p className="py-2">
                <strong>Estimated Starting Month:</strong>
                <h1 className="font-thin text-sm">Jun 11, 2024</h1>
              </p>
              <hr />
              <p className="py-2">
                <strong>Notes:</strong>
                <h1 className="font-thin text-sm">
                  Impressive! Though it seems the drag feature could be improved.
                </h1>
              </p>
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-2 p-2">
              <p className="pb-2 font-semibold">
                <strong>Monthly Backlinks:</strong> 1
              </p>
              <hr />
              <p className="py-2 font-semibold">
                <strong>Total Spend:</strong> 1
              </p>
              <hr />
              <p className="py-2">
                <strong>Additional Geographic Target:</strong>
                <h1 className="font-thin text-sm">Nationwide</h1>
              </p>
              <hr />
              <p className="py-2">
                <strong>Target Practice Area:</strong>
                <h1 className="font-thin text-sm">Nationwide</h1>
              </p>
              <hr />
              <p className="py-2">
                <strong>Content Live date:</strong>
                <h1 className="font-thin text-sm">Jun 11, 2024</h1>
              </p>
              <hr />
              <p className="py-2">
                <strong>Free Consultations:</strong>
                <h1 className="font-thin text-sm">Yes</h1>
              </p>
            </div>
          </div>
        </div>

        {/* Attachment Section */}
        <div className="w-full sm:w-2/3 lg:w-1/3 p-4 m-2 bg-white rounded-3xl">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center pb-4">
            <h2 className="text-xl font-bold mb-4 pl-1 mt-2">Attachments</h2>
            <button className="bg-green-500 text-white px-4 py-1 rounded-full mt-2 sm:mt-0">Add</button>
          </div>

          {/* Attachment List */}
          {Array(6).fill(0).map((_, index) => (
            <div key={index}>
              <div className="my-2 flex flex-wrap items-center justify-between px-2 sm:px-5">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pr-2 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                {/* Text Information */}
                <div className="text-sm flex-1 pr-4">
                  <p><strong>Test File for SO</strong></p>
                  <p className="text-gray-500">jayeshson@incquet.com</p>
                </div>
                {/* Date */}
                <p className="text-xs text-gray-400">Feb 8, 2023 10:07:07 AM</p>
              </div>
              <hr />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectPage;