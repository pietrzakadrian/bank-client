import React from 'react';
import { Select } from 'antd';

export default function Testowanko() {
  return (
    <Select placeholder="Please select a country">
      <Select.Option value="china">China</Select.Option>
      <Select.Option value="usa">U.S.A</Select.Option>
    </Select>
  );
}
