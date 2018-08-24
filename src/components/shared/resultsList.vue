<template>
	<div v-if="groupedResults">
		<template v-for="g in groupedResults">
			<resultsGroup :title="g.group" :results="g.children" feature="false"></resultsGroup>
		</template>
	</div>
</template>

<style lang="scss" scoped>

</style>

<script>
	import resultsGroup from "./resultsGroup.vue"
  
  export default {
  	components: {resultsGroup},
    props: ["results"],
    computed: {
    	groupedResults: function() {
    		if (!this.results) { return false }

    		let data = this.results.reduce((r, e) => {
    		  let group = e.title[0];
    		  if(!r[group]) r[group] = {group, children: [e]}
    		  else r[group].children.push(e);
    		  return r;
    		}, {})
    		return Object.values(data)
    	}
    }
  }
</script>