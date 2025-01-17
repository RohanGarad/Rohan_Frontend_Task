// Timeline Component
const Timeline = ({ timelineData }) => {
  return (
    <div className="w-full md:w-8/12 bg-white shadow-md p-6 md:p-8 rounded-3xl">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-72">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-0">Project Timeline</h2>
        <button className="bg-slate-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
          Add
        </button>
      </div>
      <div className="relative pl-4 md:pl-8">
        <div className="absolute top-14 left-8 md:left-11 h-full border-l-2 border-gray-300"></div>
        {timelineData.map((item, index) => (
          <div key={index} className="mb-6 flex flex-col md:flex-row items-start">
            <div className="bg-gray-300 border-2 border-teal-800 w-6 h-6 rounded-full flex-shrink-0 mt-3 md:mt-12"></div>
            <div className="ml-4 md:ml-6 p-4 md:p-6 rounded-3xl bg-slate-200 w-full">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtext}</p>
                </div>
                <p className="text-sm text-gray-400 mt-1 md:mt-0">
                  {item.date} {item.time}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Comments Component
const Comments = ({ commentsData }) => {
  return (
    <div className="w-full md:w-1/3 bg-white shadow-md rounded-3xl h-auto md:h-4/6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-0">Comments</h2>
        <button className="bg-slate-500 text-white px-3 py-1 rounded-full hover:bg-teal-600">
          Add
        </button>
      </div>
      {commentsData.map((comment, index) => (
        <div
          key={index}
          className="mb-6 border-b border-gray-200 pb-4 last:border-b-0"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 mb-4">
            <div className="flex items-center">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold text-sm">{comment.name}</h3>
                <p className="text-xs text-gray-400">{comment.date}</p>
              </div>
            </div>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
              Reply
            </button>
          </div>

          <p className="text-sm text-gray-600">{comment.commentText}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {comment.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center"
              >
                {tag}
                <button className="ml-2 text-gray-400 hover:text-gray-600">
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


// App Component (Main Layout)
const App = () => {
    const timelineData = [
        {
          title: "Project Assign",
          subtext: "some subtext",
          description:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
          date: "Jan 31",
          time: "03:06:40 PM",
        },
        {
          title: "Project Active",
          subtext: "some subtext",
          description:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
          date: "Jan 31",
          time: "03:06:40 PM",
        },
        {
          title: "Project Added",
          subtext: "some subtext",
          description:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
          date: "Jan 31",
          time: "03:06:40 PM",
        },
        {
          title: "Project Added",
          subtext: "some subtext",
          description:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
          date: "Jan 31",
          time: "03:06:40 PM",
        },
        {
          title: "Project Added",
          subtext: "some subtext",
          description:
            "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
          date: "Jan 31",
          time: "03:06:40 PM",
        },
      ];

  const commentsData = [
    {
      avatar:
        "/girl.png",
      name: "Apeksha Ramteke",
      date: "Mar 8, 2024",
      commentText:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
      tags: ["Jayesh", "Rashmi", "Apeksha"],
    },
    {
      avatar:
        "/girl.png",
      name: "Jayesh Sonawane",
      date: "Mar 8, 2024",
      commentText:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
      tags: ["Rashmi", "Jayesh", "Apeksha"],
    },
  ];

  return (
    <div className="flex p-6 bg-gray-200 gap-5 rounded-3xl">
      <Timeline timelineData={timelineData} />
      <Comments commentsData={commentsData} />
    </div>
  );
};

export default App;