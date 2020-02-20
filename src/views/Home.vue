<template>
  <div class="home" id="home">
    <div class="allBooks">
      <router-link v-for="book in books" v-bind:key="book" v-bind:to="'/books/'+ book.id">
        <div
          class="book"
          v-bind:style="'background:radial-gradient(circle at 140% -40%, rgba(0,0,0,0),' + book.color+')'"
        >
          <h4>{{book.title}}</h4>
          <h5>{{book.author}}</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld
  },
  data: () => ({}),
  computed: {
    books() {
      return this.$root.$data.books;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#home {
  width: 80%;
  margin: auto;
}
.allBooks {
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: minmax(300px, auto);
  grid-gap: 0.5rem;
  list-style-type: none;
}
.book {
  width: 200px;
  height: 250px;
  text-decoration: none;
  color: white;
}
</style>