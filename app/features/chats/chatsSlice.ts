import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IChatsState {
	chats: Array<any>;
	selectedChat: number;
}

const initialState: IChatsState = {
	chats: [],
	selectedChat: 0,
};

export const chatsSlice = createSlice({
	name: "chats",
	initialState,
	reducers: {
		changeSelectedChat: (state, action: PayloadAction<number>) => {
			state.selectedChat = action.payload;
		},
	},
});

export const { changeSelectedChat } = chatsSlice.actions;

export default chatsSlice.reducer;
