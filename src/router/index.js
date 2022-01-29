import Vue from "vue";
import VueRouter from "vue-router";
import Articulo from "@/views/Articulo";
//import Contacto from "@/views/Contacto";
import NotFound from "@/views/NotFound";
//import Portada from "@/views/Portada";
//import SobreMi from "@/views/SobreMi";
//import Post from "@/views/Post";
import Administrador from "@/views/Administrador";
import Simple from "@/views/Administrador/TipoAdministrador/Simple";
import Avanzado from "@/views/Administrador/TipoAdministrador/Avanzado";

Vue.use(VueRouter);

const routes = [
    /** Public Routes */
    {
        path: "/contacto",
        name: "Contacto",
        component: () => import("@/views/Contacto"),
        alias: ["/contactame"],
    },
    {
        path: "/",
        name: "Portada",
        component: () => import("@/views/Portada")
    },
    {
        path: "/sobremi",
        name: "SobreMi",
        component: () => import("@/views/SobreMi"),
        alias: ["/acerca"],
    },
    {
        path: "/post",
        name: "Post",
        component: () => import("@/views/Post"),
        children: [
            {
                path: ':id',
                component: Articulo,
            }
        ]
    },
    {
        path: "*",
        name: "NotFound",
        component: NotFound
    },
    /** End Public Routes */
    /** Administrator Routes */
    {
        path: "/administrador",
        name: "Administrador",
        component: Administrador,
        children: [
            {
                path: 'simple',
                name: "AdministradorSimple",
                component: Simple,
            },
            {
                path: 'avanzado',
                name: "AdministradorAvanzado",
                component: Avanzado,
            },
        ]
    },
    /** End Administrator Routes */
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
