const UserProfile = ({ user }) => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow mb-6">
        <h1 className="text-3xl font-bold mb-6">{user.name}</h1>
        <hr className="border-t border-gray-300 mb-4" />
        <p className="text-gray-600 mb-1">
          <strong>Occupation:</strong> {user.occupation}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Location:</strong> {user.location}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-gray-600 mb-1">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Bio:</strong> {user.bio}
        </p>
      </div>
    </>
  );
};

export default UserProfile;
