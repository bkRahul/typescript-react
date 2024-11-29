import Playground from './components/Autocomplete'
import { MuiButton } from './components/Button'
import { MuiSelect } from './components/Select'
import { MuiTextField } from './components/TextField'
import { MuiTypography } from './components/Typography'
import { Heading } from './Heading'

export const Mui = () => {
  return (
    <div style={{ margin: '0 2rem' }}>
      <Heading>Typography</Heading>
      <MuiTypography />
      <Heading>Button</Heading>
      <MuiButton />
      <Heading>Text Field</Heading>
      <MuiTextField />
      <Heading>Select</Heading>
      <MuiSelect />
      <Heading>Autocomplete</Heading>
      <Playground />
    </div>
  )
}
