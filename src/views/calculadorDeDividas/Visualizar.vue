<template>
  <div class="h-[100vh]">
    <RouterLink to="/" class="btn bg-[#EBD7C6] text-[black]"><img src="../../assets/icons/back-square-svgrepo-com.svg"
        alt="icone voltar" class="h-[4vh]">Voltar para o inicio</RouterLink>
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center justify-center mb-[20px]">
        <h1 class="font-[Inter] text-[#EBD7C6] text-[50px]">Historico</h1>
      </div>
      <p class="text-[black] font-[Inter]">Escreva em somente em <span style="color: #f00;">um</span> ou nos <span style="color: #f00;">dois</span> campos abaixo e clique em <span style="color: #f00;">Pesquisar</span>.</p>
      <div class="flex space-x-8 m-[20px] text-[#EBD7C6]">
        <label for="nome" class="flex flex-col justify-center items-center">Nome
          <input type="text" placeholder="Pesquisar por nome" class="input input-bordered w-full max-w-xs text-[white] placeholder:text-[#EBD7C6]" />
        </label>
        <label for="nome" class="flex flex-col justify-center items-center">Data
          <input type="text" placeholder="Pesquisar por data" class="input input-bordered w-full max-w-xs text-[white] placeholder:text-[#EBD7C6]" />
        </label>
      </div>
      <button type="submit" class="btn mb-[10px] text-[#EBD7C6]">Pesquisar<img src="../../assets/icons/magnifying-glass-svgrepo-com.svg" alt="lupa de pequisar" class="h-[30px]"></button>
      <span v-if="loading == true" class="loading loading-spinner loading-lg mt-[100px] bg-[black]"></span >
      <div v-else="loading == false" class="overflow-x-auto h-[40vh] w-[70%]">
        <table class="table text-[black] place-content-center">
          <thead>
            <tr class="bg-[black] place-content-center">
              <th class="text-[#EBD7C6]">#</th>
              <th class="text-[#EBD7C6]">Titulo do Lançamento</th>
              <th class="text-[#EBD7C6] w-[200px]">Valor</th>
              <th class="text-[#EBD7C6] w-[200px]">Data</th>
              <th class="text-[#EBD7C6] w-[200px]">Ação</th>
            </tr>
          </thead>
          <tbody class="bg-[#EBD7C6]">
            <tr v-for="lancamento in lancamentos" :key="lancamento.id" class="hover">
              <td>{{ lancamento.id }}</td>
              <td>{{ lancamento.nome_lancamento }}</td>
              <td>{{ lancamento.valor }}</td>
              <td>{{ lancamento.data }}</td>
              <td><button>VISUALIZAR</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <rodape />
  </div>
</template>

<script>
import rodape from '../../components/base/rodape.vue';
import Produto from '../../service/produtos'
import { RouterLink } from 'vue-router';
export default {
  components: {
    rodape
  },
  data() {
    return {
      lancamentos: [],
      loading: false
    }
  },
  mounted() {
    this.loading = true
    Produto.listar().then(resposta => {
    console.log(resposta.data)
    this.lancamentos = resposta.data
    this.loading = false
    })
  }
}
</script>