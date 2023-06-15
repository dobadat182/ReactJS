import { styled } from 'styled-components';
import MovieSearchApp from './components/MovieSearch/MovieSearchApp';

const Container = styled.div``;

function App() {
    return (
        <div className="container lg mx-auto h-screen flex my-10">
            <MovieSearchApp />
        </div>
    );
}

export default App;
