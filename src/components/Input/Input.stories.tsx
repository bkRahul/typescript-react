import { Input } from './Input';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const onChange = (val: string | undefined) => console.log(val);

export const Small = () => (
  <Input label='Small' size='small' onChange={onChange} />
);
export const Medium = () => (
  <Input label='Medium' size='medium' onChange={onChange} />
);
export const Large = () => (
  <Input label='Large' size='large' onChange={onChange} />
);

Small.storyName = 'Small Input';

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const AuthInput = Template.bind({});
AuthInput.args = {
  label: 'Name',
  size: 'medium',
};
