import { Fragment } from 'react'; // la the chua chi tao ra the chua ao khi chay
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicroutes } from '~/routes/indext';
import { DefaultLayout } from './Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicroutes.map((route, index) => {
                        let Layout = DefaultLayout; //dat gt mac dinh
                        //kiem tra xem layout trong route co gia tri ko neu co thi gan bang gia tri day
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            //neu layout trong route === null thi dung the chua ao Fragment
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {/* <Route path="/" element={<Home />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
