import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, createRef, useEffect } from "react";
import { ButtonBase } from "@mui/material";
import "../styles/header.css";

export default function Header() {
	const navSmall = useMediaQuery("(min-width:1000px)");
	const navSmallest = useMediaQuery("(min-width:720px)");
	const [burger, setBurger] = useState(false);
	const [navSearch, setNavSearch] = useState(navSmall);
	const searchRef = createRef();
	const iconRef = createRef();

	const handleSearchFocus = () => {
		searchRef.current.focus();
	};

	const handleSearchClick = () => {
		setNavSearch(true);
		iconRef.current.style.display = "none";
	}

	// const handleSearchClickAway = () => {
	// 	iconRef.current.style.display = "inherit";
	// 	setNavSearch(false);
	// }


	document.onclick = function (event) {
		let myBox = iconRef.current
		if (event.target.contains(myBox) && event.target !== myBox) {
			console.log("as")
			iconRef.current.style.display = "inherit";
			setNavSearch(false);
		}
	}

	useEffect(()=>{
		setNavSearch(navSmall);
	}, [navSmall])

	return (
		<header>
			<nav className="navbar navbar-expand-lg" style={{minHeight: "66px"}} >
				<div className="container-fluid align-items-center">
					<div className="vector-header-start align-items-center" ref={iconRef}>
						<button
							onClick={() => setBurger(!burger)}
							className="nav-burger button-icon"
							role="button"
							data-bs-toggle="button"
							aria-pressed={burger}
						>
							{burger ? <KeyboardDoubleArrowLeftIcon fontSize="small" className="icons" /> : <MenuIcon className="icons" fontSize="small" />}
						</button>

						<a href="/">
							<div className="nav-title">
								<img src="src\resources\wikipedia-globe.png" alt="" height="50" width="50" />
								<div className="nav-title-logo">
									<img src="src\resources\wikipedia-wordmark-en.svg" alt="" width="120" height="18" />
									<img src="src\resources\wikipedia-tagline-en.svg" alt="" width="117" height="13" />
								</div>
							</div>
						</a>
					</div>

					<div className="d-flex flex-grow-1 justify-content-end align-items-center">
						{navSearch ? (
							<form className="search-input" onClick={handleSearchFocus} noValidate autoComplete="none">
								<div className="search-icon-wrapper">
									<SearchIcon className="search-icon" />
								</div>
								<input
									type="search"
									id="search"
									ref={searchRef}
									className="search-text-area"
									placeholder="Search Wikipedia"
									aria-label="Search"
								/>
								<input type="button" value="Search" className="search-button" />
							</form>
						) : (
							<></>
						)}

						<div className="d-inline-flex flex-row flex-nowrap align-items-center" style={{ gap: "0.2rem" }}>
							{navSearch ? (
								<></>
							) : (
								<ButtonBase className="button-icon" onClick={handleSearchClick}>
									<SearchIcon className="search-icon" />
								</ButtonBase>
							)}
							{!navSmallest ? (
								<></>
							) : (
								<>
									<a className="nav-links" aria-current="page" href="">
										Create account
									</a>
									<a className="nav-links" aria-current="page" href="">
										Log in
									</a>
								</>
							)}

							<div className="d-inline-block">
								<div className="btn-group">
									<button className="button-icon " role="button" data-bs-toggle="dropdown" aria-expanded="false">
										<MoreHorizIcon fontSize="small" />
									</button>
									<ul className="dropdown-menu dropdown-menu-end nav-bar-dropdown">
										{!navSmallest ? (
											<>
												<div className="nav-bar-dropdown-heading nav-bar-dropdown-elemen">
													<a href="" title="You are encouraged to create an account and log in; however, it is not mandatory">
														<PersonAddAlt1Icon fontSize="small" className="icons" />
														&nbsp;Create account
													</a>
												</div>
												<div className="nav-bar-dropdown-heading nav-bar-dropdown-elemen">
													<a href="" title="You're encouraged to log in; however, it's not mandatory. [Alt+Shift+o]">
														<LoginIcon fontSize="small" className="icons" />
														&nbsp;Log in
													</a>
												</div>
												<hr />
											</>
										) : (
											<></>
										)}

										<div className="nav-bar-dropdown-heading nav-bar-dropdown-elemen">
											Pages for logged out editors
											<a href="" aria-label="Learn more about editing">
												{" "}
												(learn more)
											</a>
										</div>
										<div className="nav-bar-dropdown-element" style={{ marginTop: "0.4rem" }}>
											<a href="" title="A list of edits made from this IP address [Alt+Shift+y]">
												Contributions
											</a>
										</div>
										<div className="nav-bar-dropdown-element" style={{ marginBottom: "-0.3rem" }}>
											<a href="" title="Discussion about edits from this IP address [Alt+Shift+n]">
												Talk
											</a>
										</div>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
