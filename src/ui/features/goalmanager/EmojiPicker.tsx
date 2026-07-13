import { Picker, EmojiData } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import React from 'react'
import styled from 'styled-components'

type Props = {
  onSelect: (emoji: string) => void
}

export default function EmojiPicker(props: Props) {
  const onSelect = (emoji: EmojiData) => {
    if ('native' in emoji) {
      props.onSelect(emoji.native)
    }
  }

  return (
    <PickerContainer>
      <Picker onSelect={onSelect} title="Pick an icon" emoji="point_up" />
    </PickerContainer>
  )
}

const PickerContainer = styled.div`
  position: absolute;
  z-index: 10;
`