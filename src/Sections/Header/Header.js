import Navbar from "../../Components/Navbar/Navbar";
import Logo from "../../Components/logo/Logo";
import "./Header.css";
const Header = () => {
	const navItems = [
		{ title: "About" },
		{
			title: "Services",
		},
		{ title: "Work" },
		{ title: "Contact" },
		,
	];
	return (
		<>
			<header className="header">
				<div className="container">
					<Logo logo={"Marco Spijkerman"} />
					<Navbar navItems={navItems} />
				</div>
			</header>
		</>
	);
};
export default Header;
