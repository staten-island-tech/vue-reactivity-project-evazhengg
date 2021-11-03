<template>
 <div id="app">
   <nav class="navbar"> </nav>

<section id="user-choices">
  

      <div id="user-selections">
      <div id="cake-selections">
       <div class = "selections" v-for="cake in cakeChoices" :key="cake"> </div> 
    <button> @click="updateCakes(cake)"> {{cake, cakes }} </button>

<div id="drink-selections">
<div class = "selections" v-for="drink in drinkChoices" :key="drink"> </div>
<button> @click="updatedrinks (Drink)"> {{drink, drinks }} </button>
      </div>
      </div>


</section>

  <section id="order-total"> 
<h2> Amount in Cart </h2>
<li class="info" v-for="order in order" :key="order">{{ ordered }}</li>  

  </section>
</template>

<script>

export default {
 	data(){
      return {
        cakeChoices: [
          {
          typeName: "Chocolate",
          typeImage: ("./assets/Chocolate-cake.jpg"),
 				},
        {
        typeName: "Strawberry",
        typeImage: ("./assets/strawberry-cake.jpg"),
        },
        {
        typeName: "Vanilla",
        typeImage: ("./assets/vanilla-cake.jpg"),
        },
        {
        typeName: "Matcha",
        typeImage: ("./assets/matcha-cake.jpg"),
        },
],
latteChoices: [
{
flavorName: "Jollypong",
flavorImage: ("./assets/milk-tea.jpg"),
},
{
flavorName: "Blueberry",
flavorImage: ("./assets/blueberry.jpg"),
},
{
flavorName: "Banana",
flavorImage: ("./assets/banana.jpg"),
},
{
flavorName: "Popcorn",
flavorImage: ("./assets/popcorn.jpg"),
  },
],
}


</script> 

<style lang ="scss"> 

section {
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}
.image {
  width: 7rem;
  height: 7rem; 
}


</style>