<template>
    <div class="h-[100vh]">
        <RouterLink to="/" class="btn bg-[#EBD7C6] text-[black] font-[Inter]"><img
                src="../../assets/icons/back-square-svgrepo-com.svg" alt="icone voltar" class="h-[4vh]">Voltar para o inicio
        </RouterLink>

        <div class="flex justify-center">
            <h1 class="font-[Inter] text-[#EBD7C6] text-[25px] mb-[50px]">Nome do Lançamento</h1>
        </div>

        <section class="flex justify-center h-[vh]">
            <div class="grid grid-cols-[60%_1fr] w-[95%] h-[35vh]">
                <div class="flex justify-center h-[35vh]">
                    <div class="flex justify-center overflow-y-auto w-[95%]">
                        <table class="table w-[80%]">
                            <thead>
                                <tr class="bg-[black] text-[#EBD7C6]">
                                    <th>Nome</th>
                                    <th>Data</th>
                                    <th>Valor</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody class="text-[black] text-[20px]">
                                <tr>
                                    <td>Mercado</td>
                                    <td>09/04/2002</td>
                                    <td>R$ 498,33</td>
                                    <td><button><img src="../../assets/icons/shield-xmark-svgrepo-com (1).svg"
                                                alt="botao de excluir"></button></td>
                                </tr>
                                <tr>
                                    <td>Mercado</td>
                                    <td>09/04/2002</td>
                                    <td>R$ 498,33</td>
                                    <td><button><img src="../../assets/icons/shield-xmark-svgrepo-com (1).svg"
                                                alt="botao de excluir"></button></td>
                                </tr>
                                <tr>
                                    <td>Mercado</td>
                                    <td>09/04/2002</td>
                                    <td>R$ 498,33</td>
                                    <td><button><img src="../../assets/icons/shield-xmark-svgrepo-com (1).svg"
                                                alt="botao de excluir"></button></td>
                                </tr>
                                <tr>
                                    <td>Mercado</td>
                                    <td>09/04/2002</td>
                                    <td>R$ 498,33</td>
                                    <td><button><img src="../../assets/icons/shield-xmark-svgrepo-com (1).svg"
                                                alt="botao de excluir"></button></td>
                                </tr>
                                <tr>
                                    <td>Mercado</td>
                                    <td>09/04/2002</td>
                                    <td>R$ 498,33</td>
                                    <td><button><img src="../../assets/icons/shield-xmark-svgrepo-com (1).svg"
                                                alt="botao de excluir"></button></td>
                                </tr>
                                <tr>
                                    <td>Mercado</td>
                                    <td>09/04/2002</td>
                                    <td>R$ 498,33</td>
                                    <td><button><img src="../../assets/icons/shield-xmark-svgrepo-com (1).svg"
                                                alt="botao de excluir"></button></td>
                                </tr>
                                <tr>
                                    <td>Mercado</td>
                                    <td>09/04/2002</td>
                                    <td>R$ 498,33</td>
                                    <td><button><img src="../../assets/icons/shield-xmark-svgrepo-com (1).svg"
                                                alt="botao de excluir"></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="flex flex-col justify-center place-items-center text-[black]">
                    <h2 class="text-[150%]">Total Inserido</h2>
                    <h2 class="text-[400%]">R$ 1495,00</h2>
                    <p>Total Lançamentos: 12</p>
                </div>
            </div>
        </section>
        <section>
            <div class="flex justify-center">
                <h2 class="text-[20px] text-[#EBD7C6] font-[Inter] m-[25px]">Pessoas Cadastradas</h2>
            </div>
            <div class="grid grid-cols-[25vh_25vh_25vh_25vh_25vh] gap-24 place-content-center place-items-center">
                <div class="card bg-[black] h-[200px] w-[200px]">
                    <div class="flex justify-center">
                        <h2 class="text-[#EBD7C6] font-[inter]">Nome da pessoa</h2>
                    </div>
                    <table class="table">
                        <thead>
                            <tr class="bg-[black] place-content-center">
                                <th class="text-[#EBD7C6]">Titulo</th>
                                <th class="text-[#EBD7C6]">Valor</th>
                            </tr>
                        </thead>
                        <tbody class="bg-[#EBD7C6]">
                            <tr class="hover text-[black] font-[inter]">
                                <td>Riot Points</td>
                                <td>R$ 79,90</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex h-[25vh] justify-center border-[10px] border-[#EBD7C6] rounded h-[70px] w-[70px]">
                    <button><img src="../../assets/icons/user-plus-alt-1-svgrepo-com.svg" alt=""></button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style></style>