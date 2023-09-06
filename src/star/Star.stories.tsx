import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Star} from './Star';

const meta: Meta<typeof Star> = {
    component: Star,
};
export default meta;

const onChangeHandler = action('onChange')
type Story = StoryObj<typeof Star>;

export const OneStarDemo: Story = {
    args: {
        star: 1,
        setStar: () => {
        }
    },
};

// 1 звезда
export const OneStar = () => (
    <Star
        star={1}
        setStar={() => {
        }}
    />
)

// 2 звезды
export const TwoStars = () => (
    <Star
        star={2}
        setStar={() => {
        }}
    />
)

// 3 звезды
export const ThreeStars = () => (
    <Star
        star={3}
        setStar={() => {
        }}
    />
)

// 4 звезды
export const FourStars = () => (
    <Star
        star={4}
        setStar={() => {
        }}
    />
)

// 5 звезд
export const FiveStars = () => (
    <Star
        star={5}
        setStar={() => {
        }}
    />
)

// С обработчиком
export const Controlled = () => (
    <Star
        star={3}
        setStar={onChangeHandler}
    />
)

// Без значения star
export const Empty = () => (
    <Star star={0}
          setStar={() => {
          }}
    />
)