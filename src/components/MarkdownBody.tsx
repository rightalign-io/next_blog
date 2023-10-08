import React from 'react'
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'

/*
* Creating component that will turn the mark down content into the UI stuff.
* Take the string from the 
*/
interface Props {
    markdown: string;
}

function MarkdownBody(props: Props) {
    const { markdown } = props

    return (
        <Markdown>{markdown}</Markdown>
    )
}

export default MarkdownBody
