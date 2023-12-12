<template>
  <div class="h-[100vh]">
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center mb-[50px]">
        <h1 class="font-[JetBrains] text-[#EBD7C6] text-[50px] mt-[50%]">Menu Principal</h1>
        <h2 class="font-[Inter] text-[#EBD7C6] text-[15px]">Selecione o que deseja utilizar abaixo</h2>
      </div>
      
      <div class="container h-[50vh] w-[70%]">
        <botaoMenu onclick="my_modal_3.showModal()"/>
        <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <p class="m-[30px]">Deseja Iniciar um novo lançe ou visualizar os existentes?</p>
            <div class="flex justify-center space-x-10">
              <RouterLink to="/calculador_de_dividas/novo" class="btn bg-[#75E837] text-[black]">Criar</RouterLink>
              <RouterLink to="/calculador_de_dividas/existentes" class="btn bg-[blue] text-[black]">Existentes</RouterLink>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  </div>
  <rodape />
</div>
</template>
 
<script setup>
import { RouterLink } from 'vue-router';
import Rodape from '../components/base/rodape.vue';
import botaoMenu from '../components/botaoMenu.vue';
</script>

<style scoped>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
}

</style>
