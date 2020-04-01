import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.component.scss';


const PreviewCollection = ({title, items}) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(({id, ...collectionItemObject}) => (
                    <CollectionItem key={id} {...collectionItemObject} />
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;