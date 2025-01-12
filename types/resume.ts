import { ReactNode } from 'react'

export interface Theme {
  background: string
  text: string
  primary: string
  secondary: string
  button: string
  buttonRipple: string
  iconBackground: string
  icon: string
  card: string
  skillCard: string
  activityCard: string
  header: string
  headerLink: string
  timeline: {
    line: string
    dot: string
  }
  timelineAnimation: string
  heroPattern: string
  floatingIcons: string
  backgroundStyle: string

}

export interface Job {
  title: string
  company: string
  year: string
  description: string[] // Ensure this is always an array of strings
}

export interface Service {
  icon: ReactNode
  title: string
  description: string
}

export interface Skill {
  category: string
  icon: ReactNode
  items: string[]
}

export interface Activity {
  icon: ReactNode
  title: string
  description: string
}

