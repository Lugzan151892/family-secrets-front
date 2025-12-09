import { Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	users,
	user,
	friendRequests,
	friends,
	blockedUsers,
	chats,
	chatMembers,
	chatMessages,
} from "@/mocks/chatsMock";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { changeSelectedChat } from "@/features/chats/chatsSlice";

const MainView = () => {
	// const { id } = useParams<{ id?: string }>();
	// const selectedChat = chats.find((chat) => chat.id === (id ? +id : 0));

	const selectedChat = useAppSelector((state) => state.chats.selectedChat);
	const dispatch = useAppDispatch();

	const choosenChat = chats.find((chat) => chat.id === selectedChat);

	const messages = useMemo(() => {
		if (!choosenChat) {
			return [];
		}

		return chatMessages.filter((message) => message.chat_id === choosenChat.id);
	}, [selectedChat]);

	const changeChat = (chatId: number) => {
		dispatch(changeSelectedChat(chatId));
	};

	return (
		<div className="flex">
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel defaultSize={25} minSize={10}>
					<aside className="hidden md:flex flex-col">
						<div className="flex items-center gap-4 border-b p-4">
							<Menu />
							<Input placeholder="search" value={selectedChat} />
						</div>
						<nav className="flex flex-col gap-2">
							{chats.map((chat) => (
								<div
									key={chat.id}
									className="hover:bg-accent p-2 rounded-lg"
									onClick={() => changeChat(chat.id)}>
									{chat.title ||
										chatMembers
											.filter((member) => member.chat_id === chat.id)
											.map((member) => member.id)
											.join(", ")}
								</div>
							))}
						</nav>
					</aside>
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={75}>
					<div className="flex-1 flex flex-col">
						<header className="border-b p-4 flex justify-between items-center">
							<h2 className="text-lg font-semibold">Мессенджер</h2>
							<div className="w-8 h-8 bg-accent rounded-full" />
						</header>

						<main className="flex-1 overflow-y-auto p-4">
							{selectedChat ? (
								<div className="space-y-4">
									<div className="space-y-1">
										<p className="text-sm text-muted-foreground">Чат</p>
										<h3 className="text-xl font-semibold">{choosenChat?.id}</h3>
									</div>

									<div className="flex flex-col gap-2">
										{messages.map((message) => (
											<div key={message.id} className="rounded-lg border p-3">
												<p>{message.content}</p>
											</div>
										))}
									</div>
								</div>
							) : (
								<div className="h-full flex items-center justify-center text-muted-foreground">
									Чат не выбран
								</div>
							)}
						</main>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
};

export default MainView;
