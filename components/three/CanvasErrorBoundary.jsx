'use client'

import { Component } from 'react'

export default class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('[HeroCanvas]', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <CanvasFallback style={this.props.fallbackStyle} />
      )
    }

    return this.props.children
  }
}

function CanvasFallback({ style }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(ellipse at 60% 40%, #FDF5E6 0%, #FAFAF8 55%, #F3F1EC 100%)',
        ...style,
      }}
      aria-hidden
    />
  )
}
