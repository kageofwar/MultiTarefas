<template>
    <div class="h-[100vh]">
        <RouterLink to="/" class="btn bg-[#EBD7C6] text-[black] font-[Inter]"><img
                src="../../assets/icons/back-square-svgrepo-com.svg" alt="icone voltar" class="h-[4vh]">Voltar para o inicio
        </RouterLink>

        <div class="flex justify-center">
            <h1 class="text-[black] font-[Inter] mb-[30px]"> Nome do Lançamento </h1>
        </div>

        <section class="flex justify-center">
            <div class="grid grid-cols-2 w-[95%] h-[35vh]">
                <div class="flex bg-[white] justify-center">
                    <div class="overflow-x-auto w-[70%]">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                <tr>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                                <tr>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                                <tr>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                <tr>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                                <tr>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    
                <div class="bg-[white] flex flex-col justify-center place-items-center">
                    <h2 class="text-[150%]">Total Inserido</h2>
                    <h2 class="text-[400%]">R$ 1495,00</h2>
                    <p>Total Lançamentos: 12</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

</script>