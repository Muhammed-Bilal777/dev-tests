import { render, screen } from "@testing-library/react"
import { Header } from "./Header"


test('should render the heading',()=>{
    render(<Header/>);
    const txt = screen.getByText(/This is header component/i)
    expect(txt).toBeInTheDocument()
})