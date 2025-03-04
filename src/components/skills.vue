<template>
	<div>
		<section id="skills" class="section--2">
			<div class="section__body">
				<div class="section__title">
					<h3 style="font-size: 36px">Skills</h3>
					<!-- <span class="box-1"> </span> -->
				</div>
				<div class="centered skill-grid" style="font-family:Jost, sans-serif">
          <!-- new skills layout -->
					<div class="skill-cols">
						<div class="col-sk-1">
							<h3 style="font-size: 36px">Front-end</h3>
						</div>
						<div class="col-sk-2">
							<h3 style="font-size: 36px">Backend</h3>
						</div>
						<div class="col-sk-3">
							<h3 style="font-size: 36px">Team</h3>
						</div>
					</div>
					<div id="wordcloud">
						<vue-word-cloud
							:words="[
								['three.js', 1.5],
								['JavaScript', 2],
								['Vue.js', 2],
								['WordPress', 2],
								['Photoshop', 2.25],
								['CSS/Sass', 2.25],
								['Figma', 1.5],
								['Illustrator', 2.25],
								['InDesign', 1.5],
							]"
							:color="
								([, weight]) =>
									weight > 3
										? '#023183'
										: weight > 2
										? '#4276CF'
										: weight > 1
										? '#056299'
										: '#04808F'
							"
							:spacing="0.5"
							font-family="Jost, sans-serif"
						/>
					</div>
				</div>
			</div>
			<!-- <div class="section__title section__title--right">Skills</div> -->
		</section>
	</div>
</template>

<script>
import vueWordCloud from "vuewordcloud";
export default {
	components: {
		vueWordCloud,
	},
};
</script>

<style lang="scss" scoped>
#skills {
	.section__body {
		border-top: 1px solid $color-border;
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
	width: 100%;
	height: 70%;
	// margin: 10rem 15px;
}

#wordcloud {
	width: 65%;
	height: 50vh;
	margin: auto;
}
</style>
