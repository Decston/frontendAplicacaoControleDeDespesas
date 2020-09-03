import Home from "./pages/home";
import Ativos from "./pages/ativos";
import Passivos from "./pages/passivos";
import Hooks from "./pages/testHooks";

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
    },
    {
        path: "/hooks",
        component: Hooks,
        exact: true
    }
];

export default routesConfig;