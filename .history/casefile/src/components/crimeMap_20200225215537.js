import React, { Component } from 'react';
import { Button, Box } from 'react-bulma-components';

function crimeMap() {
    return (
        <Button
        fullwidth={boolean('Full width', false)}
        color={select('Color', colors)}
        loading={boolean('Loading', false)}
        outlined={boolean('Outlined', false)}
        inverted={boolean('Inverted', false)}
        disabled={boolean('Disabled', false)}
        text={boolean('Text', false)}
        remove={boolean('Remove', false)}
        isStatic={boolean('Static', false)}
        rounded={boolean('Rounded', false)}
        onClick={action('Button Click')}
        onMouseEnter={action('Hover')}
      >
    )
}

export default crimeMap;