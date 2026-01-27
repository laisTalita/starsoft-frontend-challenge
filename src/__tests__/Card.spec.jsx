import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('testando renderizações, o card é chamado em 3 componentes, incluindo adição, remoção e exclusão de produtos', () => {
  it('teste de renderização', () => {
    render(
      <Card
        item={{ id: 1, nome: 'teste', image: '/image/test.png' }}
        variant={'default'}
      >
        <p>teste de filhos</p>
        <button>teste para botões</button>
      </Card>,
    );

    expect(screen.getByText(/teste de filhos/i)).toBeInTheDocument();
    expect(screen.getByText(/teste para botões/i)).toBeInTheDocument();
  });
});
