import { styled } from 'styled-components';
import DropDown from './components/Example/UseRef/DropDown';

const Container = styled.div``;

function App() {
    return (
        <div className="container lg mx-auto h-screen flex items-center justify-center">
            <DropDown />
        </div>
    );
}

export default App;
