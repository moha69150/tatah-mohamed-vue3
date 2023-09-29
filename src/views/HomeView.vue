<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const monsters = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://metallo.ew.r.appspot.com/monsters');
    monsters.value = response.data.slice(0, 3); 
  } catch (error) {
    console.error('Erreur Axios', error);
  }
});
</script>


<template>
  <section data-bs-version="5.1" class="features05 cid-sRQcud4Jjb" id="features05-2">
    <div class="container-fluid">
      <div class="wrapper">
        <div class="row title-section">
          <h2 class="mbr-section-title mbr-fonts-style display-2">
            <strong>Monsters</strong>
          </h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-4 col-md-2 mb-2 mb-md-5" v-for="monster in monsters" :key="monster._id">
            <div class="card">
              <img :src="monster.image" alt="" class="card-img-top h-100">
              <div class="card-body">
                <h3 class="card-title mbr-section-subtitle mbr-fonts-style">
                  <strong>{{ monster.name }}</strong>
                </h3>
                <ul class="list mbr-fonts-style display-7">
                  <li v-for="drop in monster.drops" :key="drop">{{ drop }}</li>
                </ul>
                <div class="mbr-section-btn">
                  <router-link :to="{ name: 'monster-detail', params: { id: monster._id } }" class="btn btn-primary display-4">
  VOIR
</router-link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>


</style>