<template>
	<nav class="flexi-c r">
		<router-link to="/" id="logo">
			<span class="circle">L</span>
			<span class="circle">U</span>
			<span class="circle">C</span>
			<span class="circle">K</span>
			<span class="circle">Y</span>
		</router-link>
		
		<div id="search">
			<form @submit.prevent="submit">
				<input v-model="search">
			</form>
		</div>
		
		<router-link to="/movies" class="nav-link">MOVIES</router-link>
		<router-link to="/shows" class="nav-link">SHOWS</router-link>
		<router-link to="#" class="nav-link no">AUDIOBOOKS</router-link>
		<router-link to="#" class="nav-link no">LIVE</router-link>
		<p class="nav-link" id="logout" @click="$s.commit('logout')">
			<i class="fa fa-key"></i>
		</p>
	</nav>
</template>

<style lang="scss" scoped>
	nav {
	width: 100%;
	padding: 10px;
	margin: 10px 0;
	border-radius: 3px;
	box-shadow: 0 1px 3px rgba(0,0,0,.5);
	background: white;

	#logo {
		flex: 0 0;
		margin-right: 5px;
		white-space: nowrap;

		.circle {
			display: inline-block;
			width: 20px;
			height: 20px;
			text-align: center;
			font: 400 10px/20px sans-serif;
			border-radius: 50px;
			box-shadow: 0 1px 3px rgba(0,0,0,.5);
			background: black;
			color: white;
		}
	}
	#search {
		flex: 1 1;
		height: 20px;
		border-radius: 50px;
		box-shadow: 0 1px 3px rgba(0,0,0,.5);
		background: white;

		form {
			width: 100%;
			height: 100%;

			input {
				width: 100%;
				height: 100%;
				padding-left: 10px;
				padding-right: 5px;
				background: transparent;
				border: none;
				font: 400 10px/20px sans-serif;
			}
		}
	}
	.nav-link {
		flex: 0 0 20px;
		height: 20px;
		margin-left: 5px;
		padding: 0 10px;
		text-align: center;
		white-space: nowrap;
		font: 400 10px/20px sans-serif;
		border-radius: 20px;
		box-shadow: 0 1px 3px rgba(0,0,0,.5);
		background: black;

		&.no {
			cursor: not-allowed;
		}
	}
	#logout {
		padding: 0;
		cursor: pointer;

		i {
			height: 20px !important;
			line-height: 20px !important;
			font-size: 10px !important;
			color: white;
		}
	}
	a {
		height: 20px;
		line-height: 20px;
	}
}
</style>

<script>
  
  export default {
    data() {
    	return {
    		search: ""
    	}
    },
    methods: {
    	submit: function() {
    		this.$router.push({path: "/search", query: {term: this.$data.search}})
    	}
    },
    mounted() {
    	this.$data.search = this.$route.query.term
    }
  }
</script>