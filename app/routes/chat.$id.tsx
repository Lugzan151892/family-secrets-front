import type { Route } from "./+types/chat.$id";
import MainView from "@/main/main";

export function meta({ params }: Route.MetaArgs) {
	return [{ title: params.id ? `Чат ${params.id}` : "Чат" }];
}

export default function ChatRoute() {
	return <MainView />;
}
