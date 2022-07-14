import React from 'react';
const UserCard = (props) => {
    return (
        <div class="ui card">
            <div class="content">
                <a class="header">User Profile</a>
                <div class="description">sample description{props.children}</div>
            </div>
            <div className="ui bottom button">
                <i className='add icon'>AddFriend</i>
            </div>
        </div>

    );
}
export default UserCard;