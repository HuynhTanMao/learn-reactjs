import React from 'react';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
    item: PropTypes.array,
};

function TodoItem({item}) {
    return (
        <li key={item.id}>
            {item.title} <br/> {'=>'} <strong>{item.result}</strong>
            { item.milestones && <>
                <ul>
                    {item.milestones.map( sub => (
                        <li key={sub.id} >{sub.name} : <u>{sub.result}</u>
                        </li>
                    ))}
                </ul>                            
            </> }
        </li>   
    );
}

export default TodoItem;