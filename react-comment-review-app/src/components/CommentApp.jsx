import React, { useState } from 'react';
import './CommentApp.css';

const CommentApp = () => {
    const [formData, setFormData] = useState({ name: '', comment: '' });
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => (
            { ...prev, [name]: value }
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.comment) {
            setError('Please fill all Fields');
            return;
        }

        setError('');

        const newReview = {
            id: Date.now(),
            name: formData.name,
            comment: formData.comment
            
        };

        setReviews((prev) => [newReview, ...prev]);
        setFormData({ name: '', comment: '' })
    };

    const handleDelete = (id) => {
        const filtered = reviews.filter((rev) => rev.id !== id);
        setReviews(filtered);
    };

   
  return (
    <div className="comment-container">
      <h2>⭐Review/Comment App</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name..."
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Write your review..."
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit Review</button>
          </form>
          
          <div className="review-list">
              <h3>📝 All Reviews:</h3>
              {reviews.length === 0 ? (<p>No reviews yet...</p>) : (reviews.map((rev) => (
                  <div className="review-card" key={rev.id}>
                      <h4>{rev.name}</h4>
                      <p>{rev.comment}</p>
                      <button onClick={()=> handleDelete(rev.id)}>Delete</button>
                  </div>
              )))}
          </div>
    </div>
  );
}

export default CommentApp