import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Book from "../views/Book.vue";

Vue.use(VueRouter);

/*const book = {
  template: "<div>title {{$route.book.title}}</div>"
};*/

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/books/:id",
    name: "BookId",
    component: Book //() =>
    //import(/* webpackChunkName: "BookId" */ "../assets/books.json")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
