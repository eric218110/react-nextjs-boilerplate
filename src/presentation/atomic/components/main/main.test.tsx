import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should text Main to be in Main component', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument()
  })
})
