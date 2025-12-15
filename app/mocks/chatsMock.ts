import type {
	IUser,
	IFriendRequest,
	IFriend,
	IBlockedUser,
	IChat,
	IChatMember,
	IChatMessage,
} from "@/types/interfaces";

// Моки пользователей
const users: IUser[] = [
	{
		id: 1,
		username: "test_user",
		display_name: "Test User",
		avatar_url: "https://example.com/avatar1.jpg",
		bio: "Тестовый пользователь",
		created_at: "2024-01-15T10:00:00Z",
		updated_at: "2024-01-20T15:30:00Z",
	},
	{
		id: 2,
		username: "alice",
		display_name: "Alice Smith",
		avatar_url: "https://example.com/avatar2.jpg",
		bio: "Привет! Я Алиса",
		created_at: "2024-01-10T08:00:00Z",
		updated_at: "2024-01-18T12:00:00Z",
	},
	{
		id: 3,
		username: "bob",
		display_name: "Bob Johnson",
		avatar_url: "https://example.com/avatar3.jpg",
		bio: "Разработчик и любитель кофе",
		created_at: "2024-01-12T14:00:00Z",
		updated_at: "2024-01-19T09:00:00Z",
	},
	{
		id: 4,
		username: "charlie",
		display_name: "Charlie Brown",
		bio: "",
		created_at: "2024-01-14T11:00:00Z",
		updated_at: "2024-01-14T11:00:00Z",
	},
];

const user: IUser = users[0];

// Моки запросов в друзья
const friendRequests: IFriendRequest[] = [
	{
		id: 1,
		requester_id: 2,
		requester: users[1],
		addressee_id: 1,
		addressee: users[0],
		created_at: "2024-01-20T10:00:00Z",
		updated_at: "2024-01-20T10:00:00Z",
		status: "pending",
	},
	{
		id: 2,
		requester_id: 1,
		requester: users[0],
		addressee_id: 3,
		addressee: users[2],
		created_at: "2024-01-19T15:00:00Z",
		updated_at: "2024-01-19T16:00:00Z",
		status: "accepted",
	},
	{
		id: 3,
		requester_id: 4,
		requester: users[3],
		addressee_id: 1,
		addressee: users[0],
		created_at: "2024-01-18T09:00:00Z",
		updated_at: "2024-01-18T10:00:00Z",
		status: "declined",
	},
];

// Моки друзей
const friends: IFriend[] = [
	{
		id: 1,
		user_id: 1,
		friend_id: 2,
		user: users[0],
		friend: users[1],
		created_at: "2024-01-15T12:00:00Z",
	},
	{
		id: 2,
		user_id: 1,
		friend_id: 3,
		user: users[0],
		friend: users[2],
		created_at: "2024-01-19T16:00:00Z",
	},
	{
		id: 3,
		user_id: 2,
		friend_id: 3,
		user: users[1],
		friend: users[2],
		created_at: "2024-01-16T10:00:00Z",
	},
];

// Моки заблокированных пользователей
const blockedUsers: IBlockedUser[] = [
	{
		id: 1,
		user_id: 1,
		target_user_id: 4,
		user: users[0],
		created_at: "2024-01-18T11:00:00Z",
	},
];

// Моки чатов
const chats: IChat[] = [
	{
		id: 1,
		type: "private",
		title: null,
		creator_id: 1,
		created_at: "2024-01-15T10:00:00Z",
		updated_at: "2024-01-20T15:30:00Z",
	},
	{
		id: 2,
		type: "private",
		title: null,
		creator_id: 2,
		created_at: "2024-01-16T08:00:00Z",
		updated_at: "2024-01-19T14:00:00Z",
	},
	{
		id: 3,
		type: "group",
		title: "Группа разработчиков",
		creator_id: 1,
		created_at: "2024-01-17T12:00:00Z",
		updated_at: "2024-01-20T10:00:00Z",
	},
	{
		id: 4,
		type: "group",
		title: "Семейный чат",
		creator_id: 2,
		created_at: "2024-01-18T09:00:00Z",
		updated_at: "2024-01-19T16:00:00Z",
	},
];

// Моки участников чатов
const chatMembers: IChatMember[] = [
	{
		id: 1,
		chat_id: 1,
		user_id: 1,
		role: "member",
		joined_at: "2024-01-15T10:00:00Z",
	},
	{
		id: 2,
		chat_id: 1,
		user_id: 2,
		role: "member",
		joined_at: "2024-01-15T10:00:00Z",
	},
	{
		id: 3,
		chat_id: 2,
		user_id: 2,
		role: "member",
		joined_at: "2024-01-16T08:00:00Z",
	},
	{
		id: 4,
		chat_id: 2,
		user_id: 3,
		role: "member",
		joined_at: "2024-01-16T08:00:00Z",
	},
	{
		id: 5,
		chat_id: 3,
		user_id: 1,
		role: "admin",
		joined_at: "2024-01-17T12:00:00Z",
	},
	{
		id: 6,
		chat_id: 3,
		user_id: 2,
		role: "member",
		joined_at: "2024-01-17T12:00:00Z",
	},
	{
		id: 7,
		chat_id: 3,
		user_id: 3,
		role: "member",
		joined_at: "2024-01-17T12:30:00Z",
	},
];

// Моки сообщений чатов
const chatMessages: IChatMessage[] = [
	{
		id: 1,
		chat_id: 1,
		sender_id: 1,
		content: "Привет! Как дела?",
		reply_to_message_id: 0,
		created_at: "2024-01-15T10:05:00Z",
		edited_at: "",
	},
	{
		id: 2,
		chat_id: 1,
		sender_id: 2,
		content: "Привет! Всё отлично, спасибо!",
		reply_to_message_id: 1,
		created_at: "2024-01-15T10:06:00Z",
		edited_at: "",
	},
	{
		id: 3,
		chat_id: 1,
		sender_id: 1,
		content: "Отлично, что слышать!",
		reply_to_message_id: 0,
		created_at: "2024-01-15T10:07:00Z",
		edited_at: "2024-01-15T10:08:00Z",
	},
	{
		id: 4,
		chat_id: 2,
		sender_id: 2,
		content: "Привет chat 2",
		reply_to_message_id: 0,
		created_at: "2024-01-16T08:10:00Z",
		edited_at: "",
	},
	{
		id: 5,
		chat_id: 3,
		sender_id: 1,
		content: "Добро пожаловать в группу разработчиков!",
		reply_to_message_id: 0,
		created_at: "2024-01-17T12:00:00Z",
		edited_at: "",
	},
	{
		id: 6,
		chat_id: 3,
		sender_id: 2,
		content: "Спасибо за приглашение!",
		reply_to_message_id: 5,
		created_at: "2024-01-17T12:05:00Z",
		edited_at: "",
	},
	{
		id: 7,
		chat_id: 3,
		sender_id: 3,
		content: "Рад быть здесь!",
		reply_to_message_id: 5,
		created_at: "2024-01-17T12:35:00Z",
		edited_at: "",
	},
];

export { users, user, friendRequests, friends, blockedUsers, chats, chatMembers, chatMessages };
