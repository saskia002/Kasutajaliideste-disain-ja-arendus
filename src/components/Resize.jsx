import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

import { useState } from "react";

export default function Resize() {
	const [isFullscreen, setIsFullscreen] = useState(false);

	const handleFullscreen = (e) => {
		e.preventDefault();
		setIsFullscreen(!isFullscreen);
		if (!isFullscreen) {
			document.querySelector(".page-container").style.minWidth = "100%";
		} else {
			document.querySelector(".page-container").style.minWidth = "inherit";
		}
	};

	return (
		<>
			<style>
				{`
					.resize-button {
						position: fixed;
						bottom: 8px;
						right: 8px;
						outline: 1px solid #72777d;
						color: #72777d;
						width: 32px;
						height: 32px;
					}

					@media screen and (max-width: 1385px) {
						.resize-button {
							display: none;
						}
					}
				`}
			</style>
			<button className="button-icon resize-button" onClick={handleFullscreen}>
				{!isFullscreen ? <FullscreenIcon size="small" sx={{ color: "inherit" }} /> : <FullscreenExitIcon size="small" sx={{ color: "inherit" }} />}
			</button>
		</>
	);
}
