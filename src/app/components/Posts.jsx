'use client';
import { useState } from 'react';
import styles from '../page.module.css';

import { useRouter } from 'next/navigation.js';

export default function Posts({ post }) {
       const [votes, setVotes] = useState(post.votes || 0);
       const [isEditing, setIsEditing] = useState(false);
       const [editedText, setEditedText] = useState('');
       const [comment, setComment] = useState('');
       const [showCommentBox, setShowCommentBox] = useState(false);
       const [errorMessage, setErrorMessage] = useState('');
       const router = useRouter();


       //Vote Post function
       const votePost = async (voteType) => {
              const response = await fetch(`/api/votes`, {
                     method: 'POST',
              });
              const info = await response.json()
              console.log(info)

              if (!response.ok) {
                     throw new Error('Error voting on post');
              }

              router.refresh();

              // Check voteType and adjust likes accordingly
              if (voteType === 'upvote') {
                     setVotes(votes + 1);
              } else if (voteType === 'downvote') {
                     setVotes(votes - 1);
              }
       };

       // DELETE  posts function
       const deletePost = async () => {
              const response = await fetch(`/api/posts/${post.id}`, {
                     method: 'DELETE',
              });

              if (!response.ok) {
                     throw new Error('Error deleting post');
              }

              router.refresh();
       };

       // Edit post function
       const editPost = async () => {
              if (editedText === post.text) {
                     setErrorMessage('No changes were made to the post.');
                     return;
              }

              const response = await fetch(`/api/posts/${post.id}`, {
                     method: 'PUT',
                     headers: {
                            'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({ text: editedText }),
              });

              if (!response.ok) {
                     throw new Error('Error editing post');
              }

              router.refresh();
              setIsEditing(false);
              setErrorMessage('');
       };

       return (
              <div>
                     
              </div>
       )

}