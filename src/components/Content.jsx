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
					<div>
						<div id="mp-bottom" className="mp-box normak-body">
							<h2 id="mp-other" className="mp-h2 normak-header">
								<span id="Other_areas_of_Wikipedia" className="mw-headline ">
									Peeter Normak
								</span>
							</h2>
							<div id="mp-other-content">
								<figure>
									<img src="/src/resources/media/petja_bling_bling.png" alt="" width="150" />
									<figcaption>Peeter Normak TLÜ hoones</figcaption>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>

			</main>
		</div>
	);
}
