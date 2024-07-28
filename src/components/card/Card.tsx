// src/components/Card.tsx
import React from 'react'
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
} from './Card.styled'

export interface CardProps {
  image: string
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ image, title, description }) => (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </CardContainer>
)

export default Card
