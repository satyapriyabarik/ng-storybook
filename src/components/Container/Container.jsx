import React from 'react';
import styles from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ direction, justify, align, gap, wrap, children, style }) => {
    const containerStyle = {
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
    };

    return (
        <div className={styles.container} style={containerStyle}>
            {children}
        </div>
    );
};

Container.propTypes = {
    direction: PropTypes.oneOf(['row', 'column']),
    justify: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
    ]),
    align: PropTypes.oneOf(['stretch', 'flex-start', 'center', 'flex-end']),
    gap: PropTypes.string,
    wrap: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
};

Container.defaultProps = {
    direction: 'row',
    justify: 'flex-start',
    align: 'stretch',
    gap: '8px',
    wrap: false,
};

export default Container;
