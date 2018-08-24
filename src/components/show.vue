<template>
	<div v-if="show">
		<div class="show-info flexi-c r">
			<div class="show-poster">
				<img :src="$api+show.poster_image">
			</div>

			<div class="flexi-i">
				<h1 class="show-title">{{ show.title }}</h1>
				<p class="show-subtitle">{{ show.release | '-' }} | {{ show.tag_list }}</p>
				<p class="show-description">{{ show.description }}</p>
			</div>
		</div>

		<div class="show-info" v-for="s in show.seasons">
			<h1 class="show-title">{{ s.title }}</h1>
			<p class="show-subtitle">{{ show.release | '-' }} | {{s.episodes.length}} episodes</p>
			<p class="show-description">{{ s.description }}</p>

			<template v-for="e in s.episodes">
				<a :href="'/shows/'+show.id+'/episodes/'+e.id" class="episode-info flexi-c r">
					<div class="episode-preview">
						<img :src="$api+e.cover_image">
					</div>

					<div class="flexi-i">
						<h1 class="episode-title">{{ e.title }}</h1>
						<p class="episode-subtitle"></p>
						<p class="episode-description">{{ e.description }}</p>
					</div>
				</a>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.show-info {
		padding: 20px;
		margin-bottom: 10px;
		border-radius: 3px;
		box-shadow: 0 1px 3px rgba(0,0,0,.5);
		background: white;

		.show-poster {
			flex: 0 0 120px;
			margin-right: 20px;
		  border-radius: 3px;
		  box-shadow: 0 1px 2px rgba(0,0,0,.2);
		  background: lightgray;
		  overflow: hidden;

			img {
				display: block;
	  		width: 100%;
	  		height: 100%;
	  		object-fit: cover;
			}
		}

		.show-title {
			padding-bottom: 2px;
			font: 500 24px/24px sans-serif;
		}
		.show-subtitle {
			padding-bottom: 5px;
			font: 500 14px/14px sans-serif;
		}
		.show-description {
			font: 500 14px/16px sans-serif;
			padding-bottom: 5px;
		}
		.episode-info {
			margin-bottom: 10px;
			border-radius: 3px;
			box-shadow: 0 1px 3px rgba(0,0,0,.5);
			overflow: hidden;
			background: white;

			.episode-preview {
				flex: 0 0 120px;
				margin-right: 20px;
			  background: lightgray;

				img {
					display: block;
		  		width: 100%;
		  		height: 100%;
		  		object-fit: cover;
				}
			}

			> .flexi-i {
				padding: 10px;
				padding-left: 0;
			}
			.episode-title {
				padding-bottom: 5px;
				font: 500 18px/18px sans-serif;
				color: #222222;
			}
			.episode-description {
				font: 500 14px/14px sans-serif;
				color: #222222;
			}
		}
	}
</style>

<script>
  export default {
    data() {
    	return {
    		show: false
    	}
    },
    mounted() {
    	this.$util.api("/shows/"+this.$route.params.id, "GET")
    	.then(data=> this.$data.show=data.result)
    }
  }
</script>