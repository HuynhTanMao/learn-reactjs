import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.sass';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null
}

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);
    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (!onSubmit) return;

        // set -- 300 SUBMIT
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value
            };
            onSubmit(formValue);
        }, 300);
    }
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Search:</legend>
                    <input type="text" onChange={handleSearchTermChange} value={searchTerm} placeholder="Enter your keyword" />
                </fieldset>
            </form>
        </div>
    );
}

export default PostFiltersForm;