import "../styles/content.css";

export default function Content() {
	return (
		<div className="content-container">
			<main className="main-body">

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

				<div id="bodyContent" className="vector-body">
					<div className="content-text">
					</div>
				</div>

			</main>
		</div>
	);
}
