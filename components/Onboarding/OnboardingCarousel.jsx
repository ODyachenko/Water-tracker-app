import React, { useState, useRef } from 'react';
import { View, Button, SafeAreaView, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { OnboardingSlide } from './OnboardingSlide';
import { Pagination } from './Pagination';
import { Btn } from '../../UI/Btn';

const slidesList = [
  {
    id: 1,
    img: require('../../assets/onboarding_1.png'),
    title: 'Track your daily water intake with Us.',
    text: 'Achieve your hydration goals with a simple tap!',
  },
  {
    id: 2,
    img: require('../../assets/onboarding_2.png'),
    title: 'Smart Reminders Tailored to You',
    text: 'Quick and easy to set your hydration goal & then track your daily water intake progress.',
  },
  {
    id: 3,
    img: require('../../assets/onboarding_3.png'),
    title: 'Easy to Use – Drink, Tap, Repeat',
    text: 'Staying hydrated every day is easy with Drops Water Tracker.',
  },
];

export const OnboardingCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleOnViewableItemsChange = useRef(({ viewableItems }) =>
    setIndex(viewableItems[0].index)
  ).current;
  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

  return (
    <SafeAreaView>
      <FlatList
        data={slidesList}
        renderItem={({ item }) => <OnboardingSlide {...item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onViewableItemsChanged={handleOnViewableItemsChange}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slidesList} index={index} />
      {index == 2 && <Btn text="Get started" />}
    </SafeAreaView>
  );
};
