import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Search from "../../components/Search";

const mockStore = configureStore([thunk]);

describe('MyComponent', () => {
    let store;
    let initialState

    beforeEach(() => {
        jest.clearAllMocks()
        jest.useFakeTimers()
        jest.spyOn(global, 'setTimeout')

        initialState = {
            dog: {
                "weight": {
                    "imperial": "40 - 65",
                    "metric": "18 - 29"
                },
                "height": {
                    "imperial": "22 - 26",
                    "metric": "56 - 66"
                },
                "id": 38,
                "name": "Belgian Tervuren",
                "bred_for": "Guarding, Drafting, Police work.",
                "breed_group": "Herding",
                "life_span": "10 - 12 years",
                "temperament": "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
                "reference_image_id": "B1KdxlcNX",
                "image": {
                    "id": "B1KdxlcNX",
                    "width": 645,
                    "height": 380,
                    "url": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
                }
            },
            dogs: [{
                "weight": {
                    "imperial": "40 - 65",
                    "metric": "18 - 29"
                },
                "height": {
                    "imperial": "22 - 26",
                    "metric": "56 - 66"
                },
                "id": 38,
                "name": "Belgian Tervuren",
                "bred_for": "Guarding, Drafting, Police work.",
                "breed_group": "Herding",
                "life_span": "10 - 12 years",
                "temperament": "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
                "reference_image_id": "B1KdxlcNX",
                "image": {
                    "id": "B1KdxlcNX",
                    "width": 645,
                    "height": 380,
                    "url": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
                }
            },
            {
                "weight": {
                    "imperial": "40 - 65",
                    "metric": "18 - 29"
                },
                "height": {
                    "imperial": "22 - 26",
                    "metric": "56 - 66"
                },
                "id": 3,
                "name": "Belgian Tervuren",
                "bred_for": "Guarding, Drafting, Police work.",
                "breed_group": "Herding",
                "life_span": "10 - 12 years",
                "temperament": "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
                "reference_image_id": "B1KdxlcNX",
                "image": {
                    "id": "B1KdxlcNX",
                    "width": 645,
                    "height": 380,
                    "url": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg"
                }
            },
            ],
            loading: false,
        }

        store = mockStore(initialState);
    });

    it('should display data fetched from API', async () => {
        const { asFragment } = render(
            <Provider store={store}>
                <Search />
            </Provider>

        );
        expect(asFragment()).toMatchSnapshot()

    });



    it('should debounce a function', () => {

        const { asFragment } = render(
            <Provider store={store}>
                <Search />
            </Provider>

        );
        const { getByTestId } = render(<asFragment />);
        const input = getByTestId("search");

        fireEvent.change(input, { target: { value: "Belgian Tervuren" } });
        expect(setTimeout).toHaveBeenCalledTimes(1);

        fireEvent.change(input, { target: { value: "Belgian T" } });
        expect(setTimeout).toHaveBeenCalledTimes(2);

        jest.advanceTimersByTime(1000);

        waitFor(() => {
            expect(console.log).toHaveBeenCalledWith("searching for: Belgian Tervu");
        });
    });
});
