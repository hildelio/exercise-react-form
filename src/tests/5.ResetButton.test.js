/* eslint-disable max-len */
import {
  render,
  screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import {
  fillOutForm,
  mockAlert,
  testDataIsShowing,
  testDataIsNotShowing,
} from './helpers';

describe('5 - Crie um botão `Limpar` que limpa todos os campos do formulário e a `<div>` com seu currículo também', () => {
  it('Será verificado se existe um botão com o texto `Limpar`', () => {
    render(<App />);

    const buttonReset = screen.getByRole('button', { name: 'Limpar' });
    expect(buttonReset).toBeInTheDocument();
  });

  it('Ao clicar no botão de "reset" os dados consolidados somem da tela', async () => {
    mockAlert();

    render(<App />);

    await fillOutForm();

    const buttonSubmit = screen.getByRole('button', { name: 'Enviar' });
    await userEvent.click(buttonSubmit);

    testDataIsShowing();

    const buttonReset = screen.getByRole('button', { name: 'Limpar' });

    await userEvent.click(buttonReset);

    testDataIsNotShowing();
  });
});
