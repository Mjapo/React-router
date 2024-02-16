import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';


test('renders header with links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // bsuca pelos links 

  const homeLink = screen.getByRole('link', { name: /home/i });
  const cadastroLink = screen.getByRole('link', { name: /cadastro/i });
  const loginLink = screen.getByRole('link', { name: /login/i });
  const contatosLink = screen.getByRole('link', { name: /contatos/i });
  const cursosLink = screen.getByRole('link', { name: /cursos/i });

  // verifica os links estao presentes no componentes 
  expect(homeLink).toBeInTheDocument();
  expect(cadastroLink).toBeInTheDocument();
  expect(loginLink).toBeInTheDocument();
  expect(contatosLink).toBeInTheDocument();
  expect(cursosLink).toBeInTheDocument();
});
