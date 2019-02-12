import Vue from "vue"
import Router from "vue-router"
import FrontPage from "@/views/FrontPage"
import Page404 from "@/views/Page404"

Vue.use(Router);

export default new Router({
  routes: 
  [
    {
      path: "/Home",
      component: FrontPage,
    },
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: "/404",
      component: Page404,
    },
    {
      path: "*",
      redirect: "/404",
    }
  ]
})