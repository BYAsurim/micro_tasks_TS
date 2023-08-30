import { Star } from './Star';

export default {
    title: 'Raiting',
    component: Star,
};

// 1 звезда
export const OneStar = () => (
    <Star
        star={1}
        setStar={() => {}}
    />
)

// 2 звезды
export const TwoStars = () => (
    <Star
        star={2}
        setStar={() => {}}
    />
)

// 3 звезды
export const ThreeStars = () => (
    <Star
        star={3}
        setStar={() => {}}
    />
)

// 4 звезды
export const FourStars = () => (
    <Star
        star={4}
        setStar={() => {}}
    />
)

// 5 звезд
export const FiveStars = () => (
    <Star
        star={5}
        setStar={() => {}}
    />
)

// С обработчиком
export const Controlled = () => (
    <Star
        star={3}
        setStar={value => console.log('New value:', value)}
    />
)

// Без значения star
export const Empty = () => (
    <Star star={0}
        setStar={() => {}}
    />
)