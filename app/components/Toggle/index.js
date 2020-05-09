/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

function Toggle(props) {
  let content = <option>--</option>;

  // If we have items, render them
  if (props.values) {
    content = props.values.map((value) => (
      <Select.Option key={value} value={value}>
        {value.message
          ? value.intl.formatMessage(props.messages[value])
          : value}
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

export default Toggle;
