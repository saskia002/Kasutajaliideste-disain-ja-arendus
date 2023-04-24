import "../styles/title.css";
export default function Ttile() {
	return (
		<>
			<div className="vector-page-toolbar">
				<div className="vector-page-toolbar-container">
					<div id="left-navigation">
						<nav aria-label="Namespaces">
							<div className="vector-menu vector-menu-tabs mw-portlet mw-portlet-associated-pages">
								<div className="vector-menu-content">
									<ul className="vector-menu-content-list">
										<li className="selected vector-tab-noicon mw-list-item">
											<a className="" data-mv="interface" href="">
												<span>Main Page</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
					<div id="right-navigation" className="vector-collapsible">
						<nav aria-label="Views">
							<div className="vector-menu vector-menu-tabs mw-portlet mw-portlet-views">
								<div className="vector-menu-content">
									<ul className="vector-menu-content-list">
										<li className="selected vector-tab-noicon mw-list-item">
											<a className="" data-mw="interface" href="">
												<span>Read</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
			<div id="mp-bottom" className="title-box">
				<h1 className="title-box-h1">
					Welcome to
					<a href=""> Wikipedia,</a>
				</h1>
				<p className="title-box-p">
					the <a href="">free encyclopedia</a> that <a href="">anyone can edit</a>.
				</p>
				<p className="title-box-p">
					<a href="">0,000,000</a> articles on this mock website :)
				</p>
			</div>
		</>
	);
}
