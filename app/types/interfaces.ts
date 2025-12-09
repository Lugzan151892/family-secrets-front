interface IUser {
	id: number;
	/** (уникальный публичный ID) — как @username */
	username: string;
	display_name: string;
	avatar_url?: string;

	sent_requests?: IFriendRequest[];
	received_requests?: IFriendRequest[];
	friends?: IFriend[];
	blocks?: IBlockedUser[];

	bio: string;
	created_at: string;
	updated_at: string;
}

interface IFriendRequest {
	id: number;
	/** IUser */
	requester_id: number;
	requester: IUser;
	/** IUser */
	addressee_id: number;
	addressee: IUser;
	created_at: string;
	updated_at: string;
	status: "pending" | "accepted" | "declined";
}

interface IFriend {
	id: number;
	user_id: number;
	friend_id: number;
	user: IUser;
	friend: IUser;
	created_at: string;
}

interface IBlockedUser {
	id: number;
	user_id: number;
	target_user_id: number;
	user: IUser;
	created_at: string;
}

interface IChat {
	id: number;
	type: "private" | "group";
	title: string | null;
	/** IUser */
	creator_id: number;
	created_at: string;
	updated_at: string;
}

interface IChatMember {
	id: number;
	/** IChat */
	chat_id: number;
	/** IUser */
	user_id: number;
	role: "member" | "admin";
	joined_at: string;
}

interface IChatMessage {
	id: number;
	/** IChat */
	chat_id: number;
	/** IUser */
	sender_id: number;
	content: string;
	/** IChatMessage */
	reply_to_message_id: number;
	created_at: string;
	edited_at: string;
}

export type { IUser, IFriendRequest, IFriend, IBlockedUser, IChat, IChatMember, IChatMessage };
