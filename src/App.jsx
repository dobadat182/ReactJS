import { styled } from 'styled-components';
import NewTab from './components/Example/CustomHook/NewTab';

const Container = styled.div``;

function App() {
    return (
        <div className="container lg mx-auto h-screen flex items-center justify-center">
            <NewTab />
        </div>
    );
}

export default App;
