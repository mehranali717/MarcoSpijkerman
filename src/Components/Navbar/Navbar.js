import "./Navbar.css";
const Navbar = ({ navItems }) => {
	console.log({ navItems });
	return (
		<>
			<nav>
				<ul className="nav-list">
					{navItems.map((item) => (
						<li className="list-item">
							<a href="#" className="nav-links">
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};
export default Navbar;
