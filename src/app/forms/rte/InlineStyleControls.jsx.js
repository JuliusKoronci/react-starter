import React from 'react';
import StyleButton from './StyleButton';

const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();

    const INLINE_STYLES = [
        {label: 'B', style: 'BOLD',className: 'text-bold'},
        {label: 'I', style: 'ITALIC',className: 'text-italic'},
        {label: 'U', style: 'UNDERLINE',className: 'text-underline'}
    ];

    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map(type =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                    className={type.className}
                />
            )}
        </div>
    );
};

export default InlineStyleControls;