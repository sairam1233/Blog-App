import styled from 'styled-components'

export const LiEl = styled.li`
  list-style-type: none !important;
  border: 1px solid #616e7c;
  font-family: 'roboto';
  min-height: 170px;
  width: 48%;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  gap: 10px;
  @media (max-width: 668px) {
    width: 100%;
  }
`

export const Heading1 = styled.h2`
  color: #0b69ff;
  padding: 0px;
  margin: 0px;
  font-size: 18px;
`
export const Container = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 90%;
  text-align: justify;
`
