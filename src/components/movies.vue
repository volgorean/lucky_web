<template>
  <resultsList :results="results" v-if="results"></resultsList>
</template>

<script>
	import resultsList from "./shared/resultsList.vue"
  
  export default {
  	components: {resultsList},
    data() {
    	return {
    		results: false
    	}
    },
    mounted() {
    	this.$util.api("/movies", "GET").then(data=> this.$data.results=data.results)
    }
  }
</script>