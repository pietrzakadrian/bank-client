/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

export default function Toggle(props) {
  let content = <Select.Option>--</Select.Option>;

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <Select.Option key={value} value={value}>
        {value.message
          ? value.intl.formatMessage(props.messages[value])
          : value.toUpperCase()}
      </Select.Option>
    ));
  }

  return (
    <Select defaultValue={props.value} onChange={props.onToggle}>
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
