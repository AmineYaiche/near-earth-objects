import React from "react"
import ReactSelect from "react-select"
import styled from "styled-components"


type SelectPropsType = {
  options: any[]
  [restProps: string]: any
}

export default function Select({options, ...restProps}: SelectPropsType) {
  return (
    <SelectStyled>
      <ReactSelect
        className="basic-single"
        classNamePrefix="select"
        isSearchable
        options={options}
        {...restProps}
      />
    </SelectStyled>
  )
}

const SelectStyled = styled.div`
  width: 20%;
  margin-top: 50px;
`