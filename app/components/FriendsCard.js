import UserCard from "./UserCard";


const FriendsCard = ({ friends }) => {

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h1 className="text-3xl font-bold mb-6">Accosiated Friends</h1>
      <hr className="border-t border-gray-300 mb-4" />
      <div className="grid gap-4">
        {(friends.length) > 0 ? friends.map((user) => (
          <UserCard key={user.id} user={user} />
        )) : (<p className="text-gray-600">No accosiated friends.</p>
        )}
      </div>
    </div>
  );
};

export default FriendsCard;
