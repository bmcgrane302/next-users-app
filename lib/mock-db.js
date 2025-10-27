const mockUsers = [
  {
    id: 1,
    name: 'Alice Johnson',
    phone: '214-555-1234',
    email: 'alice@example.com',
    location: 'San Francisco, CA',
    occupation: 'Software Engineer',
    bio: 'Passionate about building scalable web applications and mentoring junior developers.',
    friendIds: [2, 3, 5],
  },
  {
    id: 2,
    name: 'Bob Smith',
    phone: '415-555-5678',
    email: 'bob@example.com',
    location: 'New York, NY',
    occupation: 'Product Manager',
    bio: 'Love connecting user needs with innovative solutions. Coffee enthusiast.',
    friendIds: [1, 4],
  },
  {
    id: 3,
    name: 'Carol Martinez',
    phone: '512-555-9012',
    email: 'carol@example.com',
    location: 'Austin, TX',
    occupation: 'UX Designer',
    bio: 'Creating delightful user experiences one pixel at a time.',
    friendIds: [1, 4, 5],
  },
  {
    id: 4,
    name: 'David Chen',
    phone: '206-555-3456',
    email: 'david@example.com',
    location: 'Seattle, WA',
    occupation: 'Data Scientist',
    bio: 'Turning data into insights. Machine learning and AI enthusiast.',
    friendIds: [2, 3],
  },
  {
    id: 5,
    name: 'Emma Wilson',
    phone: '617-555-7890',
    email: 'emma@example.com',
    location: 'Boston, MA',
    occupation: 'DevOps Engineer',
    bio: 'Building and maintaining robust infrastructure. Kubernetes expert.',
    friendIds: [1, 3],
  },
  {
    id: 6,
    name: 'Franklin Lee',
    phone: '303-555-2345',
    email: 'flee@example.com',
    location: 'Denver, CO',
    occupation: 'Full Stack Developer',
    bio: 'Enjoys working across the stack to deliver end-to-end solutions.',
    friendIds: []
  }
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getAllUsers = async () => {
  await delay(300);
  return mockUsers.map(({ id, name, occupation, location }) => ({
    id,
    name,
    occupation,
    location,
  }));
};

export const getUserById = async (id) => {
  await delay(300);
  return mockUsers.find((user) => user.id === Number(id)) || null;
};

export const getFriendsByIds = async (friendIds) => {
  await delay(300);
  return mockUsers.filter((user) => friendIds.includes(user.id));
};

export const getUserWithFriends = async (id) => {
  await delay(300);
  const user = mockUsers.find((u) => u.id === Number(id));
  if (!user) return null;
  const friends = mockUsers.filter((u) => user.friendIds.includes(u.id));
  return { ...user, friends };
};
