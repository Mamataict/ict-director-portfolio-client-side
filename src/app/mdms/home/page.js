export default function AdminDashboard() {
  return (
    <>
      <div className="rounded-md shadow-md p-4 bg-white w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-1 text-lg"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-xs transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <button
          type="submit"
          className="w-full btn-primary-cus text-white py-2 px-4 rounded-md transition-colors cursor-pointer"
        >
          Submit
        </button>
      </div>
    </>
  );
}
