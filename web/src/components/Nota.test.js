import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Nota from '../components/Nota';
import { MemoryRouter } from 'react-router-dom';

describe('Nota component', () => {
  it('renderiza correctamente el titulo de una nota', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Nota nota={{
          id: 1,
          titulo: "Cita Odontologica",
          descripcion: "Miercoles 5 de Julio",
        }} />
      </MemoryRouter>
    );

    await waitFor(() => {
      const titulo = getByText('Cita Odontologica');
      const descripcion = getByText('Miercoles 5 de Julio');
      expect(titulo).toBeInTheDocument();
      expect(descripcion).toBeInTheDocument();
    });
  })

})

