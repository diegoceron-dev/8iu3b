import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Pokemon from '../pages/Pokemon'
import { MemoryRouter, Route } from 'react-router-dom';

test('renders content', () => {
    const component = render(<MemoryRouter initialEntries={['blogs/1']}> 
        <Route path='pokemon/:name'> <Pokemon /> </Route> 
    </MemoryRouter>)
})
