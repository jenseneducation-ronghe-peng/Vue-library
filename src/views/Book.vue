<template>
  <div class="main">
    <router-link to="/">
      <button>Go back</button>
    </router-link>
    <div
      class="book-pic"
      v-bind:style="'background:radial-gradient(circle at 140% -40%, rgba(0,0,0,0),' + book.color+')'"
    >
      <h4 class="title">{{book.title}}</h4>
      <h5 class="author">{{book.author}}</h5>
    </div>
    <div class="black">
      <h4>{{book.title}}</h4>
      <h5>{{book.author}}</h5>
      <p>{{book.plot}}</p>
      <div class="info">
        <p>
          <strong>audience:</strong>
          {{book.audience}}
        </p>
        <p>
          <strong>pages:</strong>
          {{book.pages}}
        </p>
        <p>
          <strong>publisher:</strong>
          {{book.publisher}}
        </p>
        <p>
          <strong>year:</strong>
          {{book.year}}
        </p>
      </div>
      <button>Oh, I want to read it!</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    book() {
      return this.$root.$data.books.find(
        book => book.id == this.$route.params.id
      );
    }
  }
};
</script>

<style>
.main {
  background: black;
  display: flex;
  flex-direction: row;
}
.book-pic {
  width: 45%;
  height: 400px;
}
.author .title {
  color: white;
}
.black {
  margin-left: 2rem;
  max-width: 45%;
  color: white;
}
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(30px, auto);
  grid-gap: 0.3rem;
  margin: 1rem;
  padding: 1rem;
  background: darkgray;
  border-radius: 10px;
}
button {
  background: white;
  padding: 1rem 2rem;
}
</style>