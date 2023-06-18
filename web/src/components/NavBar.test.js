import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import NavBar from '../components/NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('NavBar component', () => {
  it('renderiza correctamente el nombre y apellidos del usuario', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <NavBar user={{
          nombre: "Christian",
          apellidos: "Villanueva",
        }} />
      </MemoryRouter>
    );

    await waitFor(() => {
      const nombre = getByText('Christian Villanueva');
      expect(nombre).toBeInTheDocument();
    });
  })

})
