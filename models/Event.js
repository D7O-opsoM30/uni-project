const mongoose = require('mongoose');

// === Comment Schema
const CommentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// === Event Schema
const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  seats: { type: Number, required: true },
  description: { type: String },
  price: { type: Number, default: 0 },
  category: {
    type: String,
    enum: ["cultural", "food", "nature", "adventure", "family", "sport"],
    required: true
  },
  image: { type: String },
  organizerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

// === Favorite Schema
const FavoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }
}, { timestamps: true });

// === Booking Schema
const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  seatsBooked: { type: Number, default: 1 },
  bookedAt: { type: Date, default: Date.now }
});

// === Models
const Event = mongoose.model('Event', EventSchema);
const Favorite = mongoose.model('Favorite', FavoriteSchema);
const Booking = mongoose.model('Booking', BookingSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  Event,
  Favorite,
  Booking,
  Comment
};
