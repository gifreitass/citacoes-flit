import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"
import QuotesList from "./QuotesListSass"

const mockedAxiosResponse = {"anime":"Assassination Classroom","character":"Korosensei","quote":"The world will always be filled with injustice. If you have time to give up or hold a grudge against that injustice, then use that time to enjoy battling those injustices instead."}
const expectedApiUrl = "https://animechan.vercel.app/api/random"

describe("QuoteList", () => {
    test("Should make request on click button", () => {
        jest.spyOn(axios, "get")
            .mockImplementationOnce(jest.fn(() => mockedAxiosResponse) as jest.Mock)

        render(<QuotesList />)

        const button = screen.getByTestId("buttonStart");

        userEvent.click(button);

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith(expectedApiUrl)
    })
})