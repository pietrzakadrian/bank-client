/**
 *
 * Toggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

export default function Toggle({ values, value, messages, onToggle }) {
  let content = <Select.Option>--</Select.Option>;

  if (values) {
    content = values.map((val) => (
      <Select.Option key={val} value={val}>
        {val.message
          ? val.intl.formatMessage(messages[value])
          : val.toUpperCase()}
      </Select.Option>
    ));
  }

  return (
    <Select defaultValue={value} onChange={onToggle}>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};
