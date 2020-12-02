import React from 'react'

export default function TagsList(props) {
    const {tags} = props;
    const tagUrl = (tag) => `/tag/${tag.name}`;

    const renderTag = (tag) => {
        return <a href={tagUrl(tag)}>{tag.name} </a>
    }

    return (<>
                {tags.map(renderTag)}
        </>
    )
}