<template>
	<div>
		<section id="contact" class="section--5">
			<div class="section__body section_body--contact">
				<div class="hv-centered centered contact-info text">
					<div class="contact--top">
						<p style="font-size: 24px">Let's work together</p>
						<p class="mail">
							hello@<span style="display: none">eat this robot</span>noelynstephens.com
						</p>
						<a href="https://github.com/confettibird" target="_blank"
							><i class="fab fa-github fa-2x"></i
						></a>
						<p style="font-size: 16px">
							Based in
							<span style="text-decoration: underline">Illinois, USA</span>
						</p>
					</div>
				</div>
			</div>
		</section>
		<div class="slope slope--footer">
			<!--Waves Container-->
			<div>
				<svg
					class="waves"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
					shape-rendering="auto"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
						/>
					</defs>
					<g class="parallax">
						<use
							xlink:href="#gentle-wave"
							x="48"
							y="3"
							id="footer-wave"
							fill="#fad84c"
						/>
					</g>
				</svg>
			</div>
			<!--Waves end-->
		</div>
		<div class="copyright-statement">
			<div>Made by me &#128526;</div>
			<div>&#169; {{ new Date().getFullYear() }}</div>
		</div>
		<!-- <div class="footer-img-wrapper">
			<div class="footer-img-relative">
				<div class="footer-img"></div>
			</div>
		</div> -->
	</div>
</template>


<style lang="scss" scoped>
#contact {
	@include backgroundPttrn;
}
.section_body--contact {
	height: 250px;
}

.slope--footer {
	@include backgroundPttrn;

	position: relative;
	width: 100%;
	height: max-content;
	opacity: 1;

	.waves {
		position: relative;
		width: 100%;
		height: 150px;
		margin-bottom: -7px; /*Fix for safari gap*/
		z-index: 2; /*place this layer in front of footer-img*/
	}
	/* Animation */

	#footer-wave {
		// transition: color 0.2s ease-in-out;
		-webkit-transition: all 3s ease-in-out;
		-moz-transition: all 3s ease-in-out;
		-o-transition: all 3s ease-in-out;
		-ms-transition: all 3s ease-in-out;
		transition: all 3s ease-in-out;
	}
	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}
	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
	/*Shrinking for mobile*/
	@media (max-width: 768px) {
		.waves {
			height: 40px;
			min-height: 40px;
		}
		.content {
			height: 30vh;
		}
		h1 {
			font-size: 24px;
		}
	}
}

.contact-info {
	width: 65%;
	max-width: 400px;

	.contact--top {
		border: solid 1px $color-font;
		background-color: #fdf3c8;
		padding: 10% 5%;
	}

	i {
		color: $color-font;
		padding: 8%;
	}
	a {
		text-decoration: none;
		&:hover {
			color: #f2c407;
		}
		&:active,
		&:link {
			color: #0c233b;
		}
	}
	p {
		padding-bottom: 3%;
		@media (max-width: $lrg-screen) {
			font-size: 18px !important;
		}
		@media (max-width: $md-screen) {
			font-size: 18px !important;
		}
	}
	p.mail {
		@media (max-width: $md-screen) {
			font-size: 14px !important;
		}
	}
}
.copyright-statement {
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	position: absolute;
	bottom: 0;
	color: $color-logo;
	font-family: $font-content;
	z-index: 3;
	width: 100%;
	margin-bottom: 25px;
}
.footer-img-wrapper {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 300px;
	background: transparent;
	overflow: hidden;

	.footer-img-relative {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.footer-img {
		position: absolute;
		bottom: 0;
		left: -100px;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: $color-logo;
		animation: swim 15s linear infinite;
		animation-delay: 2s;
	}
	@keyframes swim {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}

		0%,
		20% {
			/* start lower down on the screen */
			transform: translateY(0);
			transform: translateX(0);
		}
		50%,
		70% {
			/* simulates pause -- move back to orginal y cordinate */
			transform: translateY(-10px);
			transform: translateX(50%);
		}
		90%,
		100% {
			/* move down */
			transform: translateY(0);
			transform: translateX(100%);
		}
	}
}
</style>
