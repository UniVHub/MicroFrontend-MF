import '../index.scss';

export const Comments = () => {
  return (
    <div className="bg-[#141414] p-4 rounded-lg">
      <h2 className="text-xl font-bold">Comments</h2>
      <textarea
        className="w-full h-32 mt-2 p-2 rounded-lg bg-[#222]"
        placeholder="Write your comment here..."
      />
      <button className="mt-2 bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 active:scale-110">
        Send
      </button>
    </div>
  );
};
