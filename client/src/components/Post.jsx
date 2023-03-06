import React, { forwardRef } from "react";
import "../css/Post.css";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from '../avatar';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import DeleteIcon from '@mui/icons-material/Delete';

const Post = forwardRef(
    ({ displayName, text, personal, onClick }, ref) => {

        return (
            <div className="post" ref={ref}>
                <div className="postAvatar">
                    <Avatar
                        style={{ width: '100px', height: '100px' }}
                        avatarStyle='Circle'
                        {...generateRandomAvatarOptions()}
                    />
                </div>
                <div className="postBody">
                    <div className="postHeader">
                        <div className="postHeaderText">
                            <h3>
                                Account : {displayName}
                            </h3>
                        </div>
                        <div className="postHeaderDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className="postFooter">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                        {personal ? (
                            <DeleteIcon fontSize="small" onClick={onClick}
                                className="deleteIcon" />
                        ) : ("")}
                    </div>
                </div>
            </div>
        );
    }
);

export default Post;