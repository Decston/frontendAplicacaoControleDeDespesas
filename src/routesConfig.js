import Home from "./pages/home";
import Ativos from "./pages/ativos";
import Passivos from "./pages/passivos";

const routesConfig = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/ativos",
        component: Ativos,
        exact: true
    },
    {
        path: "/passivos",
        component: Passivos,
        exact: true
    }
];

export default routesConfig;