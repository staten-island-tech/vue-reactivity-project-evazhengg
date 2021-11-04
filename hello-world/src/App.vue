<template>
<div id="app">
  <section id="user-choices">
     <div id="user-selections">
      <div id="cake-selections">
        <div class = "selections" v-for="cake in cakeChoices" :key="cake">
	      <button @click="updateOrder()"> {{ cake }} </button>
      </div>
  </div>
  
<div id="drink-selections" class ="selections" v-for="drink in latteChoices" :key="drink">
  <img class="image" :src="drink.flavorImage"> 
</div>
   


</section>

 <section id="order-total">
<h2> Amount in Cart </h2>
<p> {{ subtotal  }} </p>

 </section>
</template>

<script>
export default {
  name: 'app',
  data(){
     return {
        subtotal: 0,
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
},
methods: {
	updateOrder() {
		this.subtotal = subtotal++
}
}
}
</script>

<style lang ="css">
.choice { 
  display:flex; 
  flex-direction: column;
}
#cakeChoices,
#latteChoices {
  display:flex;
  flex-direction: row; 
}
</style>