import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ContactUs from "./components/ContactUs";


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/service/:id",
            element: <Service />
        },
        {
            path: "/contact",
            element: <ContactUs />
        }
    ]);

    return (
        <section>
            <Provider store={appStore}>
                <RouterProvider router={appRouter} />
            </Provider>
        </section>
    );
}

export default Body;