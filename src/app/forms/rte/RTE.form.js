import React, {PropTypes, Component} from 'react';
import {Editor, EditorState, RichUtils, ContentState, convertFromRaw, convertToRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';
import BlockStyleControls from './BlockStyleControls.jsx';
import InlineStyleControls from './InlineStyleControls.jsx';
import './rte.css';

class RTE extends Component {

    constructor(props, context) {
        super(props, context);
        let editorState;
        const content = this.props.defaultValue;
        if (content && content.trim() !== '') {
            const processedHTML = DraftPasteProcessor.processHTML(content);
            const contentState = ContentState.createFromBlockArray(processedHTML);
            //move focus to the end.
            editorState = EditorState.createWithContent(contentState);
            editorState = EditorState.moveFocusToEnd(editorState);
        }
        else {
            editorState = EditorState.createEmpty();
        }

        this.state = {
            editorState: editorState
        };

        this.handleKeyCommand = (command) => this._handleKeyCommand(command);

        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }

    onChange = (editorState) => {
        this.setState({editorState});

        const htmlState = stateToHTML(editorState.getCurrentContent());

        this.props.action(
            {
                [this.props.fieldName]: htmlState
            },
            this.props.taskId
        )

    };

    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const {editorState} = this.state;
        const styleMap = {
            CODE: {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
                fontSize: 16,
                padding: 2,
            },
        };
        let className = 'RichEditor-editor';
        let contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        return (
            <div className="RichEditor-root">
                <div className="RichEditor-controls-wrapper">
                    <BlockStyleControls
                        editorState={editorState}
                        onToggle={this.toggleBlockType}
                    />
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={this.toggleInlineStyle}
                    />
                    <div className="RichEditor-controls-title">
                        {this.props.label}
                    </div>
                </div>
                <div className={className} onClick={this.focus}>
                    <Editor
                        customStyleMap={styleMap}
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        placeholder={'Enter ' + this.props.label.toLowerCase() + '...' }
                        spellCheck={true}
                    />
                </div>
            </div>
        );
    }
}

RTE.propTypes = {
    taskId: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    fieldName: PropTypes.string,
    defaultValue: PropTypes.string
};

export default RTE;