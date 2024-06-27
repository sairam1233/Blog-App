/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  color: #0b69ff;
  font-weight: 650;
  font-size: 22px;
  font-family: 'Bree Serif';
`
export const LabelEL = styled.label`
  color: #616e7c;
  font-weight: 400;
`
export const InputEl = styled.input`
  border: 1px solid #616e7c;
  outline: none;
  padding: 10px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 5px;
`

export const FormEl = styled.form`
  min-width: 40%;
  max-width: 70%;
  color: #616e7c;
`
export const TextAreaEl = styled.textarea`
  border: 1px solid #616e7c;
  outline: none;
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
`
export const ButtonEl = styled.button`
  padding: 6px;
  width: 90px;
  border: 1px solid #0b69ff;
  background-color: #0b69ff;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`
