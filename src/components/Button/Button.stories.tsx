import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../Wrapper';

type argsType = {
  btnType?: string;
  btnName: string;
} & React.ComponentProps<'button'>;

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    story => (
      <Wrapper style={{ display: 'flex', justifyContent: 'center' }}>
        {story()}
      </Wrapper>
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Auth = () => <Button btnType='auth' btnName='Auth' />;
export const Counter = () => <Button btnType='counter' btnName='Counter' />;
export const Timer = () => <Button btnType='timer' btnName='Timer' />;
export const Fetch = () => <Button btnType='fetch' btnName='Fetch' />;

const Template: ComponentStory<typeof Button> = (args: argsType) => (
  <Button {...args}></Button>
);

export const AuthButton = Template.bind({});
AuthButton.args = {
  btnType: 'auth',
  btnName: 'Login',
};
