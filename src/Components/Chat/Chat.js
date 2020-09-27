import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import '../../Sass/Chat.scss';

const Chat = () => {
    return ( 
        <div className="Chat">

            <FontAwesomeIcon icon={faCommentAlt} className="Icon"/>

        </div>
     );
}
 
export default Chat;