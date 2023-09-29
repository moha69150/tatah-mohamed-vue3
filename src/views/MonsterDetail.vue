<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const monster = ref({});
const route = useRoute();

onMounted(async () => {
  const id = route.params.id; // Récupérer l'id du monstre depuis les paramètres de la route
  try {
    const response = await axios.get(`https://metallo.ew.r.appspot.com/monsters/${id}`);
    monster.value = response.data; // Stocker le monstre reçu dans la variable réactive
  } catch (error) {
    console.error('Erreur Axios', error);
  }
});
</script>

<template>
  <section>
    <div class="container">
      <h1>{{ monster.name }}</h1> 
      <img :src="monster.image" alt="Image de {{ monster.name }}" />
      <div class="monster-details">
        <p><strong>Catégorie:</strong> {{ monster.category }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.monster-details {
  margin-top: 20px;
}
</style>
