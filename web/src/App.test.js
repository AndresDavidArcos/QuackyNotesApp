import { render, screen } from '@testing-library/react';
import Notes from './components/Notes';
import axios from 'axios';
import { mount } from 'enzyme';
import ChangeData from './ChangeData';

describe("Pruebas con JEST", () => {
  test("renderiza 3 elementos de tipo li", ()=>{
      render(<Notes/>);
      const elementosLi = screen.getAllByRole('listitem');
      expect(elementosLi.length).toBe(3);
  })
})

jest.mock('axios');

describe('ChangeData component', () => {
  it('should handle submitting form with nonexistent user id', async () => {
    axios.put.mockRejectedValueOnce({ message: 'User not found' });

    const wrapper = mount(<ChangeData />);
    wrapper.find('input[type="text"]').at(0).simulate('change', { target: { value: 'John' } });
    wrapper.find('input[type="text"]').at(1).simulate('change', { target: { value: 'Doe' } });
    wrapper.find('input[type="text"]').at(2).simulate('change', { target: { value: '1234567890' } });
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'johndoe@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });

    wrapper.find('form').simulate('submit');
    await new Promise((resolve) => setImmediate(resolve));
    wrapper.update();

    expect(axios.put).toHaveBeenCalledWith('/api/users/', {
      nombre: 'John',
      apellidos: 'Doe',
      celular: '1234567890',
      correo: 'johndoe@example.com',
      contrasena: 'password'
    });

    expect(wrapper.text()).toContain('Error al actualizar los datos');
  });
});