import React, { useState, useEffect } from "react";
import "../css/TweetBox.css";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from '../avatar';
import { TwitterContractAddress } from '../config';
import Twitter from '../utils/TwitterContract.json'
const { ethers } = require("ethers");

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [avatarOptions, setAvatarOptions] = useState("");

    const addTweet = async () => {
        let tweet = {
            'tweetText': tweetMessage,
            'isDeleted': false
        };

        try {
            const { ethereum } = window

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const TwitterContract = new ethers.Contract(
                    TwitterContractAddress,
                    Twitter.abi,
                    signer
                )

                let twitterTx = await TwitterContract.addTweet(tweet.tweetText, tweet.isDeleted);
                window.location.reload();
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            alert("Alert creating new tweet....Please try again");
        }
    }

    const sendTweet = (e) => {
        e.preventDefault();
        addTweet();
        setTweetMessage("");
        setTweetImage("");
    };

    useEffect(() => {
        let avatar = generateRandomAvatarOptions();
        setAvatarOptions(avatar);
    }, []);

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetInput">
                    <Avatar
                        style={{ width: '100px', height: '100px' }}
                        avatarStyle='Circle'
                        {...avatarOptions}
                    />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetImageInput"
                    placeholder="Image URL (optional)"
                    type="text"
                />

                <button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetButton"
                >
                    Tweet
                </button>
            </form>
        </div>
    );
}

export default TweetBox;