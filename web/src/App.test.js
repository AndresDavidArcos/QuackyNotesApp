import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notes from './components/Notes';
import { MemoryRouter } from 'react-router-dom';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import axios from 'axios';
import ChangeData from './components/ChangeData';

describe("Pruebas con JEST", () => {
  test("renderiza 3 elementos de tipo li", ()=>{
    const user = { id: '1', nombre: "andres", apellidos: "prueba" };
    render(
      <MemoryRouter initialEntries={[{ pathname: '/notes', search: '?value=teresa_teng', state: user }]}>
        <Notes />
      </MemoryRouter>
    );
    const elementosLi = screen.getAllByRole('listitem');
    expect(elementosLi.length).toBe(3);
  })
})

const server = setupServer(
  rest.put('/api/users/:id', (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('handleUpdate', () => {
  it('should update user data', async () => {
    const spy = jest.spyOn(axios, 'put');
    const { getByRole } = render(<ChangeData />);
    const updateButton = getByRole('button', { name: /Actualizar/i });
    fireEvent.click(updateButton);
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});