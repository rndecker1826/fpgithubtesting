<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import HourlyView from './views/HourlyView.vue'
import ForecastView from './views/ForecastView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/hourly', name: 'Hourly', component: HourlyView },
    { path: '/forecast', name: 'Forecast', component: ForecastView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

=======
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import HourlyView from './views/HourlyView.vue'
import ForecastView from './views/ForecastView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/hourly', name: 'Hourly', component: HourlyView },
    { path: '/forecast', name: 'Forecast', component: ForecastView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

>>>>>>> 8587aca021366b3fe5997389957fc33f1c1d8a2c
export default router