import Link from "next/link";


const UserCard = ({ user }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-lg font-semibold mb-1">{user.name}</h2>
      <p className="text-gray-600 text-sm mb-3">{user.occupation}</p>
      <p className="text-gray-600 text-sm mb-3">{user.location}</p>
      <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
        View Profile
      </Link>
    </div>
  );
};

export default UserCard;
