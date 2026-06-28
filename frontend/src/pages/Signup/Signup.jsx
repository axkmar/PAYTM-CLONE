export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>

        <p className="text-gray-500 text-center text-sm mt-2 mb-6">
          Enter your information to create an account
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span className="font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}