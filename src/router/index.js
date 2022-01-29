import Vue from "vue";
import VueRouter from "vue-router";
import Articulo from "@/views/Articulo";
import Contacto from "@/views/Contacto";
import NotFound from "@/views/NotFound";
import Portada from "@/views/Portada";
import SobreMi from "@/views/SobreMi";
import Post from "@/views/Post";

Vue.use(VueRouter);

const routes = [
    {
        path: "/contacto",
        name: "Contacto",
        component: Contacto
    },
    {
        path: "/",
        name: "Portada",
        component: Portada
    },
    {
        path: "/sobremi",
        name: "SobreMi",
        component: SobreMi
    },
    {
        path: "/post",
        name: "Post",
        component: Post,
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
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
