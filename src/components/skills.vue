<template>
	<div>
		<section id="skills" class="section--2">
			<div class="section__body">
				<div class="section__title">
					<h3 style="font-size: 36px">Technical Skills</h3>
					<!-- <span class="box-1"> </span> -->
				</div>
				<div class="centered skill-grid" style="font-family: Jost, sans-serif">
					<!-- new skills layout -->
					<div class="skill-cols">
						<div class="skill-col">
							I have expertise building modern digital interfaces using 
							<strong>HTML, CSS,</strong> and <strong>JavaScript</strong> as well as
							experience with modern frameworks like <strong>Vue.js</strong>. My work
							spans everything from immersive 3D experiences built with
							<strong>Three.js</strong> and <strong>WebGL</strong> to developing
							scalable web solutions with <strong>WordPress</strong> and
							<strong>PHP</strong>.
						</div>
						<div class="skill-col">
							Additionally, my work frequently incorporates 
							<nobr><strong>REST APIs</strong></nobr>, and modern development workflows using
							<strong>Webpack, Docker,</strong> and <strong>npm</strong>. With a strong
							foundation in <strong>component-based development</strong> and
							collaboration tools like
							<strong>GitHub, Webflow, ClickUp, Jira,</strong>and
							<strong>Figma</strong> I deliver seamless and high-performing digital
							experiences.
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	components: {},
};
</script>

<style lang="scss" scoped>
#skills {
	@include backgroundPttrn;

	.section__body {
		margin: 0 2rem;
		position: relative;
		display: flex;
		flex-direction: row;
		padding: 5rem 0 10rem;
	}
	.section__title {
		display: flex;
		justify-content: start;
		font-size: 3rem;
		text-align: right;
		width: 79.5%;
		margin: 1rem auto 3rem;
		position: relative;
		h3 {
			z-index: 10;
		}
		.box-1 {
			position: absolute;
			background-color: #64faea;
			height: 3px;
			width: 33%;
			left: 0px;
			top: 32px;
		}
	}
}
.skill-grid {
	width: 79.5%;

	.skill-cols {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		border: solid 1px #3b3109;
		background-color: #fdf3c8;
		padding: 5%;

		.skill-col {
			font-size: 18px;
			text-align: left;
			margin-bottom: 25px;
			width: 45%;
			line-height: normal;

			@media (max-width: $lrg-screen) {
				width: 100%;
			}

			strong {
				font-size: 28px;
				text-align: left;
			}
		}
	}
}
</style>
