import React from 'react'

export const Section = (props) => {
  const {
    marginTop = 0,
    marginBottom = 0,
    children,
  } = props
  const styles = {
    marginTop,
    marginBottom,
  }
  return <div style={styles}>{children}</div>
}
