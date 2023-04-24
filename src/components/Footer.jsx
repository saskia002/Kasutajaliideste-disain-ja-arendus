import "../styles/footer.css";
export default function Footer() {
	return (
		<div className="mw-footer-container">
			<footer id="footer" className="mw-footer" role="contentinfo">
				<ul id="footer-info">
					<li id="footer-info-copyright">
						Text is available under the{" "}
						<a rel="license" href="//en.wikipedia.org/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">
							{" "}
							Creative Commons Attribution-ShareAlike License 3.0
						</a>
						; additional terms may apply. By using this site, you agree to the{" "}
						<a href="//foundation.wikimedia.org/wiki/Terms_of_Use">Terms of Use</a> and{" "}
						<a href="//foundation.wikimedia.org/wiki/Privacy_policy">Privacy Policy</a>. Wikipedia® is a registered trademark of the{" "}
						<a href="//www.wikimediafoundation.org/">Wikimedia Foundation, Inc.</a>, a non-profit organization.
					</li>
				</ul>
				<ul id="footer-places">
					<li id="footer-places-privacy">
						<a href="https://foundation.wikimedia.org/wiki/Privacy_policy">Privacy policy</a>
					</li>
					<li id="footer-places-about">
						<a href="">About Wikipedia</a>
					</li>
					<li id="footer-places-disclaimers">
						<a href="">Disclaimers</a>
					</li>
					<li id="footer-places-contact">
						<a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us">Contact Wikipedia</a>
					</li>
					<li id="footer-places-mobileview">
						<a href="">Mobile view</a>
					</li>
					<li id="footer-places-developers">
						<a href="">Developers</a>
					</li>
					<li id="footer-places-statslink">
						<a href="https://stats.wikimedia.org/#/en.wikipedia.org">Statistics</a>
					</li>
					<li id="footer-places-cookiestatement">
						<a href="https://foundation.wikimedia.org/wiki/Cookie_statement">Cookie statement</a>
					</li>
				</ul>
				<ul id="footer-icons">
					<li id="footer-coprightico">
						<a href="https://wikimediafoundation.org/">
							<img src="/resources/wikimedia-button.png" alt="Wikimedia Foundation" loading="lazy" width="88" height="31" />
						</a>
					</li>
					<li id="footer-poweredbyico">
						<a href="https://www.mediawiki.org/">
							<img src="/resources/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" loading="lazy" width="88" height="31" />
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}
