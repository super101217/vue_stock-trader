// Set up our routes

import Overall from './components/Main/Content/Overview/AllOverall.vue'
import Futures from './components/Main/Content/Futures/AllFutures.vue'

export const routes = [
    { 
        path: '/', 
        component: Overall 
    },
    { 
        path: '/stocks', 
        component: Overall 
    },
    { 
        path: '/futures', 
        component: Futures
    }
]