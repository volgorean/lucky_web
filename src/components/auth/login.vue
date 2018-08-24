<template>
	<div class="middle">
	  <div id="login">
	    <form @submit.prevent="submit">
	      <h1>Login</h1>
		  	<p id="error" v-if="error">{{error}}</p>

	      <label>Email</label>
	      <input type="email" v-model="email" placeholder="bilbo@swaggins.org" required></input>
	      
	      <label>Password</label>
	      <input type="password" v-model="password" placeholder="●●●●●●●●" required></input>

	      <div class="flexi-c rr">
	        <input class="login-button" type="submit" value="Login"></input>
	      </div>
	    </form>
	  </div>
	</div>
</template>

<style lang="scss" scoped>
	#login {
		width: 100%;
		max-width: 340px;
		margin: 40px auto;
		padding: 20px;
		border-radius: 5px;
		background: white;

		#error {
			top: -10px;
			display: block;
			text-align: center;
			font: 400 14px/24px sans-serif;
			border-radius: 3px;
			background: #e74c3c;
			color: white;
		}
		h1 {
			padding-bottom: 20px;
			text-align: center;
			font: 600 22px/22px sans-serif;
			color: gray;
		}
		label {
			font: 400 14px/20px sans-serif;
		}
		input {
			width: 100%;
			margin-bottom: 10px;
			padding-left: 5px;
			font: 400 14px/20px sans-serif;
			background: white;
		}
		.login-button {
			flex: 0 1 200px;
			margin-bottom: 0;
			font: 400 16px/20px sans-serif;
			cursor: pointer;
		}
	}
</style>

<script>
	export default {
		data () {
			return {
				email: "",
				password: "",
				error: false
			}
		},
		methods: {
			submit: function() {
				this.$util.api("/login", "POST", {
					email: this.$data.email,
					password: this.$data.password
				})
				.then(data=> {
					this.$s.commit("login", data.user)
				})
				.catch(error=> {
					this.$data.email = ""
					this.$data.password = ""
					this.$data.error = error.message
				})
			}
		}
	}
</script>