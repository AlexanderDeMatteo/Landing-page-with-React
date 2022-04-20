import React from "react";

export const Navbar = () => {
	return (
		<ul class="nav justify-content-end navbar-color">
			<li class="nav-item">
				<a
					class="nav-link active"
					aria-current="page"
					href="#"
					id="bottom-home">
					Home
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">
					About
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">
					Link
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="#">
					contact
				</a>
			</li>
		</ul>
	);
};
