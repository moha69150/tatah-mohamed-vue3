<script>
import axios from 'axios';

export default {
  data() {
    return {
      monsters: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://metallo.ew.r.appspot.com/monsters');
      this.monsters = response.data;
    } catch (error) {
      console.error('Erreur Axios', error);
    }
  },
};
</script>

<template>
    <section class="my-5">
      <div class="container">
        <h2 class="mbr-section-title mbr-fonts-style display-2 text-center"><strong>Tous les Monstres</strong></h2>
        <div class="row justify-content-center mt-4">
          <div class="col-md-4 mb-4" v-for="monster in monsters" :key="monster._id">
            <div class="card h-100 shadow-sm">
              <img :src="monster.image" alt="" class="card-img-top centered-img"> <!-- Classe personnalisée ajoutée ici -->
              <div class="card-body">
                <h3 class="card-title mbr-section-subtitle mbr-fonts-style text-center">
                  <strong>{{ monster.name }}</strong>
                </h3>
                <div class="d-grid">
                  <router-link :to="{ name: 'monster-detail', params: { id: monster._id } }" class="btn btn-primary">
                    Détails
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .centered-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 50%; 
    object-fit: cover center;
    margin-top: 50px;
  }
  </style>
  
  