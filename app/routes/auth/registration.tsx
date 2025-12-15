import RegistrationView from "@/views/auth/registration/RegistrationView";
import type { Route } from "./+types/registration";

export function meta({}: Route.MetaArgs) {
	return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Registration() {
	return <RegistrationView />;
}
