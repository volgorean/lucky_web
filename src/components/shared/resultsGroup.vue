<template>
	<div class="group">
		<div class="flexi-c r">
			<h2 class="group-title">{{title}}</h2>
			<p class="group-button" @click="left">left</p>
			<p class="group-button" @click="right">right</p>
		</div>

		<div id="results">
			<div :class="{result: true, featured: i==1&&results.length>=8&&feature}" v-for="(r, i) in activeResults">
				<router-link :to="link(r)" class="result-image">
					<img :src="$api+r.poster_image">
				</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.group {
		margin-bottom: 10px;

		.group-title {
			margin-bottom: 5px;
			margin-right: auto;

			flex: 0 0 20px;
			height: 20px;
			white-space: nowrap;
			font: 500 18px/20px sans-serif;
			color: white;
		}
		.group-button {
			flex: 0 0 20px;
			height: 20px;
			padding: 0;
			margin-left: 5px;
			text-align: center;
			border-radius: 20px;
			box-shadow: 0 1px 3px rgba(0,0,0,.5);
			background: white;
			color: black;

			i {
				height: 20px !important;
				line-height: 20px !important;
				font-size: 12px !important;
				font-weight: 800;
				color: black;
			}
		}
		#results {
	    display: grid;
	    grid-gap: 10px;
	    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

		  .result {
		  	padding-bottom: 153.33%;
		    border-radius: 3px;
		    box-shadow: 0 1px 2px rgba(0,0,0,.2);
		    background: black;
		    color: white;
		    overflow: hidden;

		    &.featured {
	        grid-row-end: span 2;
	        grid-column-end: span 2;
		    }
		    .result-image {
		    	position: absolute;
		    	top: 0;
		    	left: 0;
		    	width: 100%;
		    	height: 100%;
		    	overflow: hidden;
		    	z-index: 200;
		    	
		    	img {
		    		display: block;
		    		width: 100%;
		    		height: 100%;
		    		object-fit: cover;
		    	}
		    }
		  }
		}
	}
</style>

<script>
  export default {
    props: ["title", "results", "feature"],
    data() {
    	return {
    		active: 0
    	}
    },
    computed: {
    	activeResults: function() {
    		let a = this.$data.active
    		return this.results.slice(a*this.sSize, a*this.sSize+this.sSize)
    	},
    	sSize: function() {
    		return this.feature ? 9 : 12
    	},
    	sSlots: function() {
    		return Math.ceil(this.results.length/this.sSize)
    	}
    },
    methods: {
    	left: function() {
    		this.$data.active = (this.$data.active==0?this.sSlots-1:this.$data.active-1)
    	},
    	right: function() {
    		this.$data.active = (this.$data.active==this.sSlots-1?0:this.$data.active+1)
    	},
    	link: function(r) {
    		return (r.kind=="MOVIE" ? "/movies/" : "/shows/") + r.id
    	}
    }
  }
</script>