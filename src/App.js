import LandingLayout from "./layouts/landing.layout";
import 'antd/dist/antd.less';
import GlobalStyles from "./styles";

function App() {
    return (
        <div>
            <GlobalStyles/>
            <LandingLayout/>
        </div>
    );
}

export default App;
