<template>
	<div>
		<resultsGroup title="New Releases" :results="recent" feature="true"></resultsGroup>
		<resultsGroup title="Action" :results="action" feature="true"></resultsGroup>
		<resultsGroup title="Drama" :results="drama" feature="true"></resultsGroup>
		<resultsGroup title="Comedy" :results="comedy" feature="true"></resultsGroup>
	</div>
</template>

<script>
  import resultsGroup from './shared/resultsGroup.vue'
  
  export default {
    components: {
      resultsGroup,
    },
    data() {
    	return {
    		recent: [],
    		action: [],
    		drama: [],
    		comedy: []
    	}
    },
    mounted() {
    	this.$util.api("/movies", "GET").then(data=> this.$data.recent=data.results)
    	this.$util.api("/search?genre=action", "GET").then(data=> this.$data.action=data.results)
    	this.$util.api("/search?genre=drama", "GET").then(data=> this.$data.drama=data.results)
    	this.$util.api("/search?genre=comedy", "GET").then(data=> this.$data.comedy=data.results)
    }
  }
</script>