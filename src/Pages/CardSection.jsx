// Card Section Component
const CardSection = ({ title, data }) => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-base md:text-lg font-bold mb-2 md:mb-0">{title}</h2>
        <button className="bg-slate-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600">
          Reassign
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <img
              src={item.avatar}
              alt={item.role}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold text-sm">{item.role}</p>
              <p className="text-xs text-gray-400">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add-Ons Section Component.
const AddOnsSection = ({ addons }) => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-4 mt-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-base md:text-lg font-bold mb-2 md:mb-0">Add-Ons</h2>
        <button className="bg-slate-500 text-white px-4 py-2 rounded-3xl hover:bg-teal-600">
          Add
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="text-sm font-semibold text-gray-600">Name</th>
              <th className="text-sm font-semibold text-gray-600">Spend</th>
              <th className="text-sm font-semibold text-gray-600">Reference</th>
            </tr>
          </thead>
          <tbody>
            {addons.map((addon, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-2 flex items-center">
                  <span className="mr-2 text-teal-500">✏️</span>
                  {addon.name}
                </td>
                <td className="py-2">{addon.spend}</td>
                <td className="py-2">
                  <button className="bg-slate-500 px-3 py-1 rounded-3xl text-sm text-white">
                    {addon.reference}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


// Main Component
const AssignmentReporting = () => {
  const assignmentData = [
    {
      role: "Sales Rep",
      name: "Jayesh Sonawane",
      avatar: "/girl.png", // Replace with real image
    },
    {
      role: "Account Manager",
      name: "Jayesh CRM Testing",
      avatar: "/boy.png",
    },
    {
      role: "Project Owner",
      name: "Jayesh Sonawane",
      avatar: "/boy2.png",
    },
    {
      role: "SEO Strategist",
      name: "Jayesh CRM Testing",
      avatar: "/girl2.png",
    },
  ];

  const reportingData = [
    {
      role: "Sales Rep",
      name: "Jayesh Sonawane",
      avatar: "/boy2.png",
    },
    {
      role: "Account Manager",
      name: "Jayesh CRM Testing",
      avatar: "/girl2.png",
    },
    {
      role: "Project Owner",
      name: "Jayesh Sonawane",
      avatar: "/girl.png",
    },
    {
      role: "SEO Strategist",
      name: "Jayesh CRM Testing",
      avatar: "/boy.png",
    },
  ];

  const addons = [
    {
      name: "SEO Spanish",
      spend: "500.00",
      reference: "TN-22411",
    },
    {
      name: "SEO Spanish",
      spend: "500.00",
      reference: "TN-22411",
    },
  ];

  return (
    <div className="w-8/12 bg-gray-200 p-6 space-y-6">
      {/* Assignment and Reporting Sections */}
      <div className="grid grid-cols-2 gap-6">
        <CardSection title="Assignment Section" data={assignmentData} />
        <CardSection title="Reporting Section" data={reportingData} />
      </div>
      {/* Add-Ons Section */}
      <AddOnsSection addons={addons} />
    </div>
  );
};

export default AssignmentReporting;
