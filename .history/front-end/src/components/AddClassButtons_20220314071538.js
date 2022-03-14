import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function AddClassButton(props) {
    const router = useRouter();

    return (
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Add Class</span>
        </button>

    )


}

AddClassButton.propTypes = {};

export default AddClassButton;