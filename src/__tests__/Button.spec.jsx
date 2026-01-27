import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('como testei as funções principais, e como meu botão é o gatilho responsável por chamar-las em qualquer tela, o botão deve receber onclick, realizar a funções e exibir children', () => {
  it('deve renderizar as children e realizar o onClick', () => {
    const handleTeste = jest.fn();
    render(<Button onClick={handleTeste}>Testando</Button>);

    const button = screen.getByText(/testando/i);

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleTeste).toHaveBeenCalled();
  });
});
