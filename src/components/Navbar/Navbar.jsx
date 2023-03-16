import ButtonComp from "../ButtonComp/ButtonComp";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header>
			<Link to='/'>
				<div className="logo">
					<img src={logo} alt="" />
				</div>
			</Link>
			<div className="search-bar">
				<input
					type="search"
					placeholder="O que deseja encontrar ?"
				/>
				<AiOutlineSearch />
			</div>
			<div className="button-header">
				<Link to='/login'>
					<ButtonComp
						text={"Login"}
					/>
				</Link>
			</div>
		</header>
	);
}
