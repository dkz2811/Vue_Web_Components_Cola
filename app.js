const { createApp } = Vue;

const Header = {
    props:{
        titulo: String
    },
    template: `
    <div>
        <h1 class="text-bold">{{titulo}}</h1>
    </div>
    `
}

const UnCard = {
    props: {
        titulo: String,
        costo: Number,
        portada: String,
        id: Number
    },
    template:`
    <div>
        <p :class="pri"  >{{titulo}}</p>
        <img class="img-thumbnail img-cropped" :src="portada" :title="titulo">
        <p :class="sec" >$ {{costo}}</p>
    </div>
    `
}
//
const MainCard = {
    
    components:{
        'card-component':UnCard
    },
    props: {
        codermeals: Array,
    },
    template:  
        `
    <div class="card" align="center">
    <table class="table">
        <tbody>
            <tr v-for="(unPlato, i) of codermeals" :class="(i%2) == 0 ? 'bg-color-pri' : 'bg-color-sec'">
                <td>
                    <card-component 
                        :key = "unPlato.id"
                        :titulo="unPlato.titulo" 
                        :costo="unPlato.costo"
                        :portada="unPlato.portada" 
                        :id="unPlato.id"
                   ></card-component>
                   </td>
            </tr>
        </tbody>
    </table>
    </div>
    `
}




createApp({
    components:{
        'header-component': Header,
        'tabla-component':MainCard,
        'card-component':UnCard
    },
    data(){
        
        return{ 
            codermeals: [
            {
            id: 1,
            titulo: "Spaghetti alla puttanesca",
            costo: 575.00,
            portada: "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg"
            },
            {
            id: 2,
            titulo: "Pizza Napoletana ai carciofi",
            costo: 675.00,
            portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg"
            },
            {
            id: 3,
            titulo: "Porchetta umbra a cottura lunga",
            costo: 845.00,
            portada: "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg"
            },
            {
            id: 4,
            titulo: "Orecchiette alle cime di rapa",
            costo: 845.00,
            portada: "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg"
            }
        ]
        }
    }
}).mount("#app")