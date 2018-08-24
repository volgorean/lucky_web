import Vue from 'vue'
import Router from 'vue-router'

// routes
import index from './components/index.vue'
import search from './components/search.vue'
import movie from './components/movie.vue'
import movies from './components/movies.vue'
import show from './components/show.vue'
import shows from './components/shows.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: index },
    { path: '/search', component: search },
    { path: '/movies', component: movies },
    { path: '/movies/:id', component: movie },
    { path: '/shows', component: shows },
    { path: '/shows/:id', component: show },
    { path: '/shows/:show_id/episodes/:id', component: movie },
    { path: '*', redirect: '/' }
  ]
})