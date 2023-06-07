import { styled } from 'styled-components';
import Game from './components/Tictactoe/Game';

const Container = styled.div``;

function App() {
    return (
        <div className="container lg mx-auto ">
            <Game />
        </div>
    );
}

export default App;
