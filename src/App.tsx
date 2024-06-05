import { TodosContent } from './components/TodosContent';
import { Container } from './styles/Container';

export const App = () => {
  return (
    <Container>
      <main>
        <section>
          <TodosContent />
        </section>
      </main>
    </Container>
  );
}