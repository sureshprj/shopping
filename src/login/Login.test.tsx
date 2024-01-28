import React from 'react';
import { act, findByText, getByText, render, screen, waitFor } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () =>mockedNavigator
}));


describe('Test Login page', () => {

    test('Login page initial render', () => {
        const { container } =  render(<BrowserRouter><Login></Login></BrowserRouter>);
        const header = screen.getByText(/Login App/i);
        expect(header).toBeInTheDocument();
        const user = screen.getByTestId("username")
        const nameLabel =  getByText(user,"User name");
        expect(nameLabel).toBeInTheDocument();
        const submitBtn:any = container.querySelector(".btn-sec button");
        expect(submitBtn).toBeInTheDocument();
      });

      test("Login page form validations", async ()=>{
        const { container } =  render(<BrowserRouter><Login></Login></BrowserRouter>);
        const userNameInput = screen.getByRole("username") as HTMLInputElement;
        const passwordInput = screen.getByRole("password") as HTMLInputElement;
        const subBtn =  screen.getByRole("login");
        (global.fetch as any) = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ mockedData: 'Mocked Response' }),
            })
        );

        act(()=>{
            userEvent.type(userNameInput,"test1");
            userEvent.type(passwordInput,"test1");
        })
        expect(userNameInput.value).toBe("test1")
        expect(passwordInput.value).toBe("test1")
        
        act(()=>{
            userEvent.click(subBtn);
        })
        //const erroMsg = await screen.findByText(/Invalid username or password/i);
        //expect(erroMsg).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText(/Invalid username or password/i)).toBeInTheDocument();
        });
        
      })
      test("Login success", async ()=>{
        const { container } =  render(<BrowserRouter><Login></Login></BrowserRouter>);
        const userNameInput = screen.getByRole("username") as HTMLInputElement;
        const passwordInput = screen.getByRole("password") as HTMLInputElement;
        const subBtn =  screen.getByRole("login");
        (global.fetch as any) = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ mockedData: 'Mocked Response' }),
            })
        );

        act(()=>{
            userEvent.type(userNameInput,"test");
            userEvent.type(passwordInput,"test");
        })
        expect(userNameInput.value).toBe("test")
        expect(passwordInput.value).toBe("test")
        
        act(()=>{
            userEvent.click(subBtn);
        })
        //expect(mockedNavigator).toHaveBeenCalled();
        //const erroMsg = await screen.findByText(/Invalid username or password/i);
        //expect(erroMsg).toBeInTheDocument();
        await waitFor(() => {
            expect(mockedNavigator).toHaveBeenCalled();
        });
        
      })
})
