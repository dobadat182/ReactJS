import { styled } from 'styled-components';
import FormInput from './components/Form/Input';

const Container = styled.div``;

function App() {
    return (
        <div className="container lg mx-auto h-screen flex items-center justify-center">
            <FormInput />
        </div>
    );
}

export default App;
