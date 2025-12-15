import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const LoginView = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState<string | React.ReactNode>("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState<string | React.ReactNode>("");

	const navigate = useNavigate();

	return (
		<div className={"flex flex-col w-full h-full items-center"}>
			<div className={"mb-16 text-center text-3xl lg:text-5xl font-bold"}>ВОЙТИ</div>
			<div className={"w-full max-w-xs"}>
				<Input
					className={"mb-3"}
					value={email}
					id={"email"}
					type={"email"}
					placeholder={"Введите e-mail"}
					onInput={(e) => {
						setEmail(e.currentTarget.value);
						setEmailError("");
					}}
				/>
				<Input
					type={"password"}
					id={"password"}
					placeholder={"Введите пароль"}
					value={password}
					onInput={(e) => {
						setPassword(e.currentTarget.value);
						setPasswordError("");
					}}
				/>
				<Button className={"w-full mt-6"} disabled={!!emailError || !!passwordError}>
					ВОЙТИ
				</Button>
				<Button className={"w-full mt-6"} onClick={() => navigate("/registration")}>
					Регистрация
				</Button>
			</div>
		</div>
	);
};

export default LoginView;
