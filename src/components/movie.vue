<template>
	<div id="video" v-if="v">
		<video controls :poster="$api+v.cover_image" preload="none">
		  <source :src="$api+v.content_path" :type="v.content_type">
		</video>

		<div class="video-info flexi-c r">
			<div class="video-poster">
				<img :src="$api+v.poster_image">
			</div>

			<div class="flexi-i">
				<h1 class="video-title">{{ v.title }}</h1>
				<p class="video-subtitle">{{ v.release }} | {{ v.genres.join(", ") }}</p>
				<p class="video-description">{{ v.description }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	#video {
		width: 100%;
		margin-bottom: 10px;
		border-radius: 3px;
		box-shadow: 0 1px 3px rgba(0,0,0,.5);
		background: white;
		overflow: hidden;	

		video {
			width: 100%;
			height: auto;
		}

		.video-info {
			padding: 20px;

			.video-poster {
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
			.video-title {
				padding-bottom: 2px;
				font: 500 24px/24px sans-serif;
			}
			.video-subtitle {
				padding-bottom: 5px;
				font: 500 14px/14px sans-serif;
			}
			.video-description {
				font: 500 14px/16px sans-serif;
			}
		}
	}
</style>

<script>
  export default {
    data() {
    	return {
    		v: false
    	}
    },
    mounted() {
    	this.$util.api("/movies/"+this.$route.params.id, "GET")
    	.then(data=> this.$data.v=data.result)
    }
  }
</script>