/* eslint-disable react/no-deprecated, react/no-string-refs, react/no-unescaped-entities, react/jsx-no-target-blank */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const GITHUB_REPO = 'https://github.com/reduxjs/redux'

export default class Explore extends Component {
  constructor(props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleGoClick = this.handleGoClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  getInputValue() {
    return this.refs.input.value
  }

  setInputValue(val) {
    // Generally mutating DOM is a bad idea in React components,
    // but doing this for a single uncontrolled field is less fuss
    // than making it controlled and maintaining a state for it.
    this.refs.input.value = val
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick() {
    this.props.onChange(this.getInputValue())
  }

  render() {
    return (
      <div>
        <p>Type a username or repo full name and hit 'Go':  <br></br> <b>Example: gittysachin</b></p>
        <input size="45" ref="input" defaultValue={this.props.value} onKeyUp={this.handleKeyUp} />
        <button onClick={this.handleGoClick}>Go!</button>
        <p>
          Code on{' '}
          <a href={GITHUB_REPO} target="_blank">
            Github
          </a>.
        </p>
        <p>Hide DevTools with Ctrl+H.</p>
      </div>
    )
  }
}

Explore.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
