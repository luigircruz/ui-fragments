import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'
import styled from 'styled-components'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  appearance: 'primary',
}

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`

export const Sizes = () => {
  return (
    <>
      <ButtonRow>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </ButtonRow>
      <ButtonRow>
        <Button appearance="primary" size="sm">
          Small
        </Button>
        <Button appearance="primary" size="md">
          Medium
        </Button>
        <Button appearance="primary" size="lg">
          Large
        </Button>
        <Button appearance="primary" size="xl">
          Extra Large
        </Button>
      </ButtonRow>
    </>
  )
}
