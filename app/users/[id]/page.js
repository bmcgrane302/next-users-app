import UserProfile from '../../components/UserProfile';
import FriendsCard from '../../components/FriendsCard';



const UserPage = async ({ params }) => {
  const { id } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  let res, user;

  try {
    res = await fetch(`${baseUrl}/api/users/${id}`, { cache: "no-store" });
  } catch (err) {
    console.error("Network error fetching user:", err);
    return (
      <div className="text-center text-red-400 p-6">
        Network error. Please try again later.
      </div>
    );
  }

  if (!res.ok) {
    return (
      <div className="text-center text-red-400 p-6">
        {res.status === 404 ? "User not found." : "Failed to load user data."}
      </div>
    );
  }

  try {
    user = await res.json();
  } catch (err) {
    console.error("JSON parse error:", err);
    return (
      <div className="text-center text-red-400 p-6">
        Invalid data received from server.
      </div>
    );
  }

  return (
    <>
      <UserProfile user={user} />
      <FriendsCard friends={user?.friends} />
    </>
  );
}


export default UserPage;
